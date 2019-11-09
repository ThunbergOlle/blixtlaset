import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ReactDOM from 'react-dom';
import GetMarketListings from "./getMarketListings";
import { MenuItem, Button, Select, TextField, Grid, Divider, InputLabel, FormControl } from "@material-ui/core";
import Category from './categoryCard';
import AreaFilter from './filters/areaFilter';

const api = require('./api/apiHandler');
class MainSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sale: "alla",
            area: "helasverige",
            search: "",
            blocketIn: undefined,
            traderaIn: undefined,
            filters: [],
            selectedCategory: "undefined"
        }
     }  
    onChangeCategory(category){
        this.setState({selectedCategory: category});
    }
    changeSale = (event) => { 
        console.log("Selected: " + event);
        this.setState({sale: event.target.value});

    }
    onChangeArea(area) { 
        this.setState({area: area});
    }
    changeSearchWord = (event) => { 

        this.setState({search: event.target.value});
    }
    async sendApiRequest(){
        console.log(`Sending api request for search term ${this.state.search}`);
        let data = await api.Search(this.state.search, this.state.area);
        if(data === undefined){
            console.log("We did not get a response from the server.");
            return;
        }else {    
            ReactDOM.render(
                <GetMarketListings blocket={data.blocket} tradera={data.tradera} />, document.getElementById("items")

            )
            console.log("Set the state of items");
        }

    }
    render(){
        const isMobile = window.innerWidth <= 500;
        console.log(isMobile);
        return (
            <form 
            noValidate autoComplete="off">
                <p>{this.state.selectedCategory}</p>
                <p>{this.state.area}</p>
                
                <div style={!isMobile && { width: "50%", margin: "2% auto"}, isMobile &&{ width: "80%", margin: "2% auto"}} color="inherit" className="searchIcon">
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
                                <Button variant="contained" style={{backgroundColor: "#507B00"}} onClick={() => {this.sendApiRequest()}}>
                                        <SearchIcon color="inherit" style={{color: "white"}}/>
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/1153/1153054.svg" category="leksaker" categoryName="Leksaker"></Category>
                            <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/296/296216.svg" category="fordon" categoryName="Fordon"></Category>
                            <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/2242/2242296.svg" category="heminredning" categoryName="Inredning"></Category>
                            <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/1169/1169382.svg" category="kläder" categoryName="Kläder"></Category>
                            <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/897/897066.svg" category="elektronik" categoryName="Elektronik"></Category>
                            <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/2210/2210649.svg" category="fritid" categoryName="Fritid"></Category>
                            <Category changeLink={this.onChangeCategory.bind(this)} image="https://image.flaticon.com/icons/svg/1530/1530970.svg" category="konst" categoryName="Konst"></Category>
                        </Grid>
                        <AreaFilter changeArea={this.onChangeArea.bind(this)}/>
                        <Grid item xs={12} style={{textAlign: "center", alignSelf:"center"}}> 
                            <Divider />
                        </Grid>
                    </Grid>
                </div>
                
            </form>
        )
    }
   
}
export default MainSearch;