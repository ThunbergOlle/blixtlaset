import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ReactDOM from 'react-dom';
import GetMarketListings from "./getMarketListings";
import { MenuItem, Button, Select, TextField, Grid, Divider, InputLabel, FormControl } from "@material-ui/core";
import Category from './categoryCard';
import AreaFilter from './filters/areaFilter';

const api = require('./api/apiHandler');
class MainSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sale: "alla",
            area: "helasverige",
            search: "",
            blocketIn: undefined,
            traderaIn: undefined,
            filters: [],
            selectedCategory: undefined,
            
        }
    }
    onChangeCategory(category) {
        this.setState({ selectedCategory: category });
    }
    onChangeArea(area) {
        this.setState({ area: area });
    }
    changeSearchWord = (event) => {

        this.setState({ search: event.target.value });
    }
    async sendApiRequest() {
        console.log(`Sending api request for search term ${this.state.search}`);
        let data = await api.Search(this.state.search, this.state.area, this.state.selectedCategory);
        if (data === undefined) {
            console.log("We did not get a response from the server.");
            return;
        } else {
            ReactDOM.render(
                <GetMarketListings blocket={data.blocket} tradera={data.tradera} />, document.getElementById("items")

            )
            console.log("Set the state of items");
        }

    }
    render() {
        const isMobile = window.innerWidth <= 500;
        console.log(isMobile);
        const category = () => {
            if (this.state.selectedCategory !== undefined) return true
            else return false;
        }
        console.log(category());
        if (!isMobile) {
            return (
                <form
                    noValidate autoComplete="off">
                    <p>{this.state.selectedCategory}</p>
                    <p>{this.state.area}</p>

                    <div style={{ width: "50%", margin: "2% auto" }} color="inherit" className="searchIcon">
                        <Grid container spacing={3}>

                            <Grid item xs={10}>
                                <TextField
                                    id="outlined-helperText"
                                    label="Produktens namn"
                                    fullWidth
                                    helperText="Sökningen sker på flera hemsidor för att leta efter passande annonser"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.changeSearchWord.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <div style={{ margin: "2% auto", align: "center", marginTop: 26 }}>
                                    <Button variant="contained" style={{ backgroundColor: "#507B00" }} onClick={() => { this.sendApiRequest() }}>
                                        <SearchIcon color="inherit" style={{ color: "white" }} />
                                    </Button>
                                </div>
                            </Grid>
                            {!category() &&
                            <Grid item xs={12}>
                                <h4 style={{margin: 0, padding: 0}}>Välj en kategori</h4>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/135/135077.svg" category="leksaker" categoryName="Leksaker"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/173/173231.svg" category="fordon" categoryName="Fordon"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/1169/1169382.svg" category="kläder" categoryName="Kläder"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/222/222545.svg" category="elektronik" categoryName="Elektronik"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/2210/2210649.svg" category="fritid" categoryName="Fritid"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/1111/1111553.svg" category="heminredning" categoryName="Inredning"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/2071/2071474.svg" category="konst" categoryName="Konst"></Category>
                            </Grid>
                            }
                            <AreaFilter changeArea={this.onChangeArea.bind(this)} />
                            <Grid item xs={12} style={{ textAlign: "center", alignSelf: "center" }}>
                                <Divider />
                            </Grid>
                        </Grid>
                    </div>

                </form>
            )
        } else return (
            <form
                noValidate autoComplete="off">
                <p>{this.state.selectedCategory}</p>
                <p>{this.state.area}</p>

                <div style={{ width: "80%", margin: "2% auto" }} color="inherit" className="searchIcon">
                    <Grid container spacing={3}>

                        <Grid item xs={10}>
                            <TextField
                                id="outlined-helperText"
                                label="Produktens namn"

                                helperText="Sökningen sker på flera hemsidor för att leta efter passande annonser"
                                margin="normal"
                                variant="outlined"
                                onChange={this.changeSearchWord.bind(this)}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{ margin: "2% auto", align: "center", marginTop: 26 }}>
                                <Button variant="contained" style={{ backgroundColor: "#507B00" }} onClick={() => { this.sendApiRequest() }}>
                                    <SearchIcon color="inherit" style={{ color: "white" }} />
                                </Button>
                            </div>
                        </Grid>
                        {!category() &&
                            <Grid item xs={12}>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/135/135077.svg" category="Leksaker" categoryName="Leksaker"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/173/173231.svg" category="Fordon" categoryName="Fordon"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/1169/1169382.svg" category="Kläder" categoryName="Kläder"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/222/222545.svg" category="Elektronik" categoryName="Elektronik"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/2210/2210649.svg" category="Fritid" categoryName="Fritid"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/1111/1111553.svg" category="Heminredning" categoryName="Inredning"></Category>
                                <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/2071/2071474.svg" category="Konst" categoryName="Konst"></Category>
                            </Grid>
                        }
                        <AreaFilter changeArea={this.onChangeArea.bind(this)} />
                        <Grid item xs={12} style={{ textAlign: "center", alignSelf: "center" }}>
                            <Divider />
                        </Grid>
                    </Grid>
                </div>

            </form>
        )

    }

}
export default MainSearch;