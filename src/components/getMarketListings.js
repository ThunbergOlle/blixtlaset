import axios from "axios";
import React from 'react';
import MarketItem from "./marketItem";
export default class GetMarketListings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount(){
        axios.get("http://localhost:1200/api/getlistings").then(response => {
            response = response.data;  
            for(let i = 0; i < response.blocket.length; i++){
                if(response.blocket[i].title.length > 10) response.blocket[i].title = response.blocket[i].title.substr(0,10);
            }  
            this.setState({items: response.blocket});
            console.log(this.state.items);
        });
        
    }
    render(){
        return(<div>
            {this.state.items.map(item => (<MarketItem  title={item.title} price={item.price} location="not set yet"></MarketItem>))}
        </div>);
    }
}