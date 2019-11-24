import React from 'react';
import MarketItem from "./marketItem";
export default class GetMarketListings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blocket: this.props.blocket,
            tradera: this.props.tradera,
        }
        
    }
    
    render(){
        console.log(this.state.tradera);
        if(this.state.tradera !== undefined){
            return(<div>
                {this.state.blocket.map(item => (<MarketItem  title={item.title} price={item.price} location="not set yet" image={item.image} company="https://i.imgur.com/IcUn5Jr.png" link={item.link}></MarketItem>))}
                {this.state.tradera.map(item => (<MarketItem  title={item.title} price="Budgivning" location="not set yet" image={item.image} company='https://i.imgur.com/y7yj6aD.png' link={item.link}></MarketItem>))}        
            </div>);
        }else {
            return(<p>Unable to get the items for you</p>)
        }

    }
}