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
            <MarketItem title="Toro 580D groundmaster -10" price="110 000 kr" location="Osby" image="https://cdn.blocket.com/static/2/lithumbs/04/0413001378.jpg" company="https://i.imgur.com/IcUn5Jr.png" link={"https://google.com"}></MarketItem>
            <MarketItem title="Motorgräsklippare" price="1000 kr" location="Osby" image="https://webimg.secondhandapp.com/w-i-mgl/5cb615cccccf456f9c8c0376" company="data:image/png;base64,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" link={"https://google.com"}></MarketItem>
            <MarketItem title="Gräsklippare & Högtryckstvätt, Grästrimmer" price="600 kr" location="Hästveda" image="https://cdn.blocket.com/static/1/lithumbs/04/0443156736.jpg" company="https://i.imgur.com/IcUn5Jr.png" link={"https://google.com"}></MarketItem>
            <MarketItem title="Gräsklippare med drivning" price="450 kr (budgivning) " location="Hästveda" image="https://img.tradera.net/images/533/305956533_b5261d83-f510-474c-adb2-2f2e58aff069.jpg" company="https://i.imgur.com/y7yj6aD.png" link={"https://google.com"}></MarketItem>
            <MarketItem title="gräsklippare" price="5000 kr" location="Markaryd" image="https://webimg.secondhandapp.com/w-i-mgl/5d3d8e71d673a841c61b7b75" company="data:image/png;base64,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" link={"https://google.com"}></MarketItem>
            <MarketItem title="Åkgräsklippare" price="14 000 kr" location="Rävninge" image="https://www.celticmowers.com/Media/IMG_4042.JPG" company="https://i.imgur.com/IcUn5Jr.png" link={"https://google.com"}></MarketItem>

            {this.state.blocket.map(item => (<MarketItem  title={item.title} price={item.price} location="not set yet" image="https://i.imgur.com/IcUn5Jr.png" company="https://i.imgur.com/IcUn5Jr.png" link={item.link}></MarketItem>))}
            {this.state.tradera.map(item => (<MarketItem  title={item.title} price={item.price} location="not set yet" image={item.image} company='https://i.imgur.com/y7yj6aD.png' link={item.link}></MarketItem>))}        
        </div>);
    }
}