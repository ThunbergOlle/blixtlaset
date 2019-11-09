import React from 'react';

export default class Category extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            categoryLink: this.props.category,
            image: this.props.image
        }

    }
    onChangeLink(){
        this.props.changeLink(this.state.categoryLink);
    }
    render(){
        return(
           <div style={{width: 70, height: 70, cursor: "pointer", borderRadius: "200px", display: "inline-block", backgroundColor: "#DCDCDC", margin: 5}} onClick={this.onChangeLink.bind(this)}>
               <div style={{margin: "2% auto", marginTop: "15%"}}>
                <img src={this.state.image} alt="leksaker" style={{maxWidth: "70%", maxHeight: "70%"}}></img>
                <p>{this.props.categoryName}</p>
               </div>
           </div> 
        )
    }
}