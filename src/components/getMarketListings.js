import React from 'react';
import MarketItem from "./marketItem";
export default class GetMarketListings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
        }
        
    }
    
    render(){
        console.log(this.state.data);
        if(this.state.data !== undefined){
            return(<div>
                {this.state.data.map(item => (<MarketItem  title={item.title} price={item.price} location="not set yet" image={item.image} company={item.source} link={item.link}></MarketItem>))}
            </div>);
        }else {
            return(<p>Unable to get the items for you</p>)
        }

    }
}
//                {this.state.tradera.map(item => (<MarketItem  title={item.title} price="Budgivning" location="not set yet" image={item.image} company='https://i.imgur.com/y7yj6aD.png' link={item.link}></MarketItem>))}        
