import React from 'react';

export default class Category extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }

    }
    
    render(){
        if(this.state.category) console.log("CATEGORY SET");
        return(
           <div style={{width: 100, height: 100, outline:" #4CAF50 solid 2px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", cursor: "pointer", display: "inline-block", margin: 5}} onClick={() => {this.setState({category: "test"})}}>
               <img src="https://i.imgur.com/5LoGbt3.png" alt="leksaker" width="100%" height="100%"></img>
           </div> 
        )
    }
}