import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ReactDOM from 'react-dom';
import GetMarketListings from "./getMarketListings";
import { Button, TextField, Grid, Divider, Typography, CircularProgress } from "@material-ui/core";
import Category from './categoryCard';
import AreaFilter from './filters/areaFilter';
import api from './api/apiHandler';
import OnlyImages from './filters/onlyImages';
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
            onlyImages: false
        }
    }
    onChangeCategory(category) {
        this.setState({ selectedCategory: category });
    }
    onChangeArea(area) {
        this.setState({ area: area });
    }
    onChangeImages(bool) {
        this.setState({ onlyImages: bool });

    }
    changeSearchWord = (event) => {

        this.setState({ search: event.target.value });
    }
    async sendApiRequest() {
        console.log(`Sending api request for search term ${this.state.search}`);
        ReactDOM.render(
            <CircularProgress size="10rem" color="#00b300" style={{ color: "#00b300" }} />, document.getElementById("items")
        )
        let data = await api(this.state.search, this.state.area, this.state.selectedCategory).catch(err => {
            ReactDOM.render(
                <p>⚠️Hoppsan! Något gick fel, vänligen kontakta administratör: {err.toString()} ⚠️<br />
                    <img src="https://media0.giphy.com/media/qWPyeR6LhQTLO/giphy.gif?cid=790b7611dd2d9415b46411d21a6b1bd8740d4108796bb74d&rid=giphy.gif" alt="gif" height="150"></img>
                </p>, document.getElementById("items")

            )
        });
        if (data === undefined) {
            console.log("We did not get a response from the server.");
            return;
        } else {
            ReactDOM.render(
                <GetMarketListings data={data} />, document.getElementById("items")

            )
            console.log("Set the state of items");
        }

    }
    render() {
        const isMobile = window.innerWidth <= 500;
        const category = () => {
            if (this.state.selectedCategory !== undefined) return true
            else return false;
        }
        console.log("only images: ", this.state.onlyImages);
        if (!isMobile) {
            return (
                <form
                    noValidate autoComplete="off" style={{ backgroundColor: "white", width: "60%", textAlign: "center", borderRadius: 20, borderStyle: "line", margin: "2% auto", marginTop: 100, height: 480 }}>
                    <div style={{ width: "90%", margin: "2% auto" }} color="inherit" className="searchIcon">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                
                                <h2 style={{ display: "block", textAlign: "left", fontWeight: "lighter" }}>Hitta begagnad produkt</h2>

                                <TextField
                                    id="outlined-helperText"
                                    label="Produktens namn 🔍"
                                    fullWidth
                                    helperText="Sökningen sker på flera hemsidor för att leta efter passande annonser"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.changeSearchWord.bind(this)}
                                />
                            </Grid>
                            {!category() &&
                                <Grid item xs={12}>
                                    <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/135/135077.svg" category="leksaker" categoryName="Leksaker"></Category>
                                    <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/173/173231.svg" category="fordon" categoryName="Fordon"></Category>
                                    <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/1169/1169382.svg" category="kläder" categoryName="Kläder"></Category>
                                    <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/222/222545.svg" category="elektronik" categoryName="Elektronik"></Category>
                                    <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/2210/2210649.svg" category="fritid" categoryName="Fritid"></Category>
                                    <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/1111/1111553.svg" category="heminredning" categoryName="Inredning"></Category>
                                    <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/2071/2071474.svg" category="konst" categoryName="Konst"></Category>
                                </Grid>
                            }
                            {category() &&
                                <Grid item xs={12} style={{ textAlign: 'left' }}>
                                    <a style={{ color: 'green', fontSize: 16, textAlign: "left", cursor: "pointer" }} onClick={() => this.setState({ selectedCategory: undefined })}>Tillbaka</a>
                                    <p>Du har valt kategori: {this.state.selectedCategory}</p>
                                </Grid>
                            }
                            <AreaFilter changeArea={this.onChangeArea.bind(this)} />
                            <OnlyImages changeOnlyImages={this.onChangeImages.bind(this)} />

                            <Button style={{ width: "100%", marginTop: 20, backgroundColor: "#00b300", color: "white" }} onClick={() => { this.sendApiRequest() }}>Sök</Button>
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
                                label="Produktens namn 🔍"

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
                        {category() &&
                            <Grid item xs={12} style={{ textAlign: 'left' }}>
                                <a style={{ color: 'green', fontSize: 16, textAlign: "left", cursor: "pointer" }} onClick={() => this.setState({ selectedCategory: undefined })}>Tillbaka</a>
                                <p>Du har valt kategori: {this.state.selectedCategory}</p>
                            </Grid>
                        }
                        <div style={{ textAlign: 'center' }}>
                            <Divider></Divider>
                            <p style={{ fontSize: 22 }}>Filter <br /><em style={{ fontSize: 12 }}>Använd filter för att optimera din sökning</em></p>
                            <AreaFilter changeArea={this.onChangeArea.bind(this)} />
                            <OnlyImages changeOnlyImages={this.onChangeImages.bind(this)} />
                        </div>


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