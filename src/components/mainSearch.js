import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ReactDOM from 'react-dom';
import GetMarketListings from "./getMarketListings";
import { MenuItem, Button, Select, TextField, Grid, Divider, InputLabel, FormControl } from "@material-ui/core";
import Category from './categoryCard';
import { makeStyles } from '@material-ui/core/styles';
const api = require('./apiHandler');
export default class MainSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sale: "alla",
            area: "helasverige",
            search: "",
            blocketIn: undefined,
            traderaIn: undefined,
            filters: [],
            selectedCategory: undefined
        }
        this.classes = useStyles;
     }  
    changeSale = (event) => { 
        console.log("Selected: " + event);
        this.setState({sale: event.target.value});

    }
    changeArea = (event) => { 
        console.log("Selected: " + event);
        this.setState({area: event.target.value});
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

        return (
            <form className={this.classes.container} noValidate autoComplete="off">
                
                <div style={{ width: "50%", margin: "2% auto" }} color="inherit">
                    <Grid container spacing={3}>
                        
                        <Grid item xs={10}>
                            <TextField
                                id="outlined-helperText"
                                label="Produktens namn"
                                className={this.classes.textField}
                                helperText="Sökningen sker på flera hemsidor för att leta efter passande annonser"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                onChange={this.changeSearchWord.bind(this)}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{ margin: "2% auto", align: "center", marginTop: 26 }}>
                                <Button variant="contained" className={this.classes.button} style={{backgroundColor: "#507B00"}} onClick={() => {this.sendApiRequest()}}>
                                        <SearchIcon className={this.classes.searchIcon} color="inherit" style={{color: "white"}}/>
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Category></Category>
                            <Category></Category>
                            <Category></Category>
                            <Category></Category>
                            <Category></Category>
                            <Category></Category>

                        </Grid>
                        <Grid item xs={2}>
                        <FormControl className={this.classes.formControl}>

                            <InputLabel htmlFor="typ">Försäljningstyp</InputLabel>
                            <Select
                                className={this.classes.selectAll}
                                onChange={this.changeSale.bind(this)}
                                value={this.state.sale}
                                style={{width: 150}}
                                id="typ"
                            >
                                
                                <MenuItem value="alla">Alla</MenuItem>
                                <MenuItem value="budgivning">Endast budgivning</MenuItem>
                                <MenuItem value="direktforsaljning">Endast direktförsäljning</MenuItem>
                            </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={4}>  
                        <FormControl className={this.classes.formControl}>
                        <InputLabel htmlFor="area">Område</InputLabel>

                        <Select
                                className={this.classes.selectAll}
                                onChange={this.changeArea.bind(this)}
                                value={this.state.area}
                                style={{width: 150}}
                                id="area"
                            >
                                <MenuItem value="helasverige">Hela Sverige</MenuItem>
                                <MenuItem value="skane">Skåne</MenuItem>
                                <MenuItem value="halland">Halland</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}> 
                            <Divider />
                        </Grid>
                    </Grid>
                </div>
                
            </form>
        )
    }
   
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        color: "white"
    },
    searchIcon: {
        color: "inherit",
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    selectAll: {
        width: 200,
        height: 200,
        minWidth: 200
    },
    menu: {
        width: 200,
    },
    button: {
        margin: "2% auto",
        float: "left",
        marginTop: 22,
        backgroundColor: "#507B00",
        color: "#507B00"
    },
}));