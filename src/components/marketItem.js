import React from 'react';
import {Card, Typography, CardMedia, CardContent, CardActionArea, Button, CardActions} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';


export default class MarketItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            price: this.props.price,
            image: this.props.image,
            location: this.props.location
        }
        
        this.classes = useStyles;
        this.theme = useTheme;
        this.bull = <span className={this.classes.bullet}>•</span>;

    }
    render(){

        return(
    <Card className={this.classes.card} style={{width: 400, height: 108, display: "inline-block", margin: 10}}>
        <CardContent style={{margin: 0, padding: 0}}>
        <div className="imageDiv" style={{height: "100%", width: 192, padding: 0, margin: 0, display: "inline-block", float: "left"}}>
            <img src="https://www.blocket.se/img/hub/logobyte_logo_310x200@2x.png" height="108" width="192" style={{margin: 0, padding: 0}}></img>
        </div>
        <div style={{display: "inline-block"}}>
            <h3 style={{marginTop: 5, marginBottom: 0}}>{this.state.title}</h3>
            <p style={{margin: 0}}>{this.state.price}kr<br/>{this.state.location}</p>
        </div>
        </CardContent>
                <CardActions style={{margin: 0, padding: 0, textAlign: "center"}}>
                <Button size="small" color="primary" style={{margin: "2% auto"}}>
                Till annons
                </Button>
                </CardActions>
    </Card>
        )
    }
}
const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
  });