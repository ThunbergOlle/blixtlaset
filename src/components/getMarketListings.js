import axios from "axios";
import React from 'react';
import MarketItem from "./marketItem";
export default class GetMarketListings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blocket: [],
            tradera: [],
        }
    }
    componentDidMount(){
        axios.get("http://localhost:1200/api/getlistings").then(response => {
            response = response.data;  
            for(let i = 0; i < response.blocket.length; i++){
                if(response.blocket[i].title.length > 10) response.blocket[i].title = response.blocket[i].title.substr(0,10);
            }  
            this.setState({blocket: response.blocket});
            for(let i = 0; i < response.blocket.length; i++){
                if(response.tradera[i].title.length > 10) response.tradera[i].title = response.tradera[i].title.substr(0,10);
            }  
            this.setState({tradera: response.tradera});
        });
        
    }
    render(){
        return(<div>
            <MarketItem title="En anna test sak mozilla firefox" price="450 000 kr" location="Osby" image="https://www.blocket.se/img/hub/logobyte_logo_310x200@2x.png" company="https://i.imgur.com/IcUn5Jr.png" link={"https://google.com"}></MarketItem>
            {this.state.blocket.map(item => (<MarketItem  title={item.title} price={item.price} location="not set yet" image="https://i.imgur.com/IcUn5Jr.png" company="https://i.imgur.com/IcUn5Jr.png" link={item.link}></MarketItem>))}
            {this.state.tradera.map(item => (<MarketItem  title={item.title} price={item.price} location="not set yet" image={item.image} company='https://i.imgur.com/y7yj6aD.png' link={item.link}></MarketItem>))}        
        </div>);
    }
}