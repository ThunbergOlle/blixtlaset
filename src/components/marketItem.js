import React from 'react';
import {Card, CardContent} from '@material-ui/core';


export default class MarketItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            price: this.props.price,
            image: this.props.image,
            location: this.props.location,
            company: this.props.company,
            link: this.props.link
        }
        
    }
    render(){
        if(this.state.image === undefined) this.setState({image: "https://www.deadlineclaims.com/wp-content/uploads/2017/02/placeholder-image.jpg"})
        return(
    <Card style={{width: 600, height: 108, display: "inline-block", cursor: "pointer", margin: 10, position: "relative"}} onClick={() => {window.open(this.state.link, '_blank')}}>
        <CardContent style={{margin: 0, padding: 0}}>
        <div className="imageDiv" style={{height: "100%", width: 96, padding: 0, margin: 0, display: "inline-block", float: "left", textAlign: "center", alignContent:"center"}}>
            <img src={this.state.image} alt="item" height="108" style={{padding: 0, textAlign: 'center', margin: 'auto'}}></img>
        </div>
        <div style={{position: "absolute", bottom: 5, right: 5}}>
           <img src={this.state.company} alt="company" height="25"></img>
        </div>
        <div style={{display: "inline-block"}}>
            <p style={{marginTop: 5, marginBottom: 0}}><em>{this.state.location}</em></p>
            <h3 style={{margin: 0}}>{this.state.title}</h3>
            <p style={{margin: 0}}>{this.state.price}</p>
            
        </div>
        </CardContent>
    </Card>
        )
    }
}
