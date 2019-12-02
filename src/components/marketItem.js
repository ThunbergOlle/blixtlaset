import React from 'react';
import { Card, CardContent } from '@material-ui/core';


export default class MarketItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            price: this.props.price,
            image: this.props.image,
            location: this.props.location,
            company: this.props.company,
            link: this.props.link,
            likedThis: false
        }

    }
    like() {
        if (document.getElementById('likeImg').src === "https://i.imgur.com/EBSEJhl.png") {
            document.getElementById('likeImg').src = "https://i.imgur.com/UwtKFEG.png";
            return;
        }
        document.getElementById('likeImg').src = "https://i.imgur.com/EBSEJhl.png";
    }
    render() {
        const isMobile = window.innerWidth <= 500;
        if (this.state.image === undefined) this.setState({ image: "https://www.deadlineclaims.com/wp-content/uploads/2017/02/placeholder-image.jpg" })
        if (!isMobile) {
            return (
                <Card style={{ width: 600, height: 108, display: "inline-block", margin: 10, position: "relative" }}>
                    <CardContent style={{ margin: 0, padding: 0 }}>
                        <div className="imageDiv" style={{ height: "100%", width: 96, padding: 0, margin: 0, display: "inline-block", float: "left", textAlign: "center", alignContent: "center" }}>
                            <img src={this.state.image} alt="item" height="108" style={{ padding: 0, textAlign: 'center', margin: 'auto' }}></img>
                        </div>
                        <div style={{ position: "absolute", top: 8, right: 10 }}>
                            {!this.state.likedThis &&
                                <img src="https://i.imgur.com/UwtKFEG.png" alt="like_icon" height="25" onClick={() => { if (!this.state.likedThis) this.setState({ likedThis: true }); else this.setState({ likedThis: false }) }} style={{ cursor: 'pointer' }}></img>
                            }
                            {this.state.likedThis &&
                                <img src="https://i.imgur.com/EBSEJhl.png" alt="like_icon" height="25" onClick={() => { if (!this.state.likedThis) this.setState({ likedThis: true }); else this.setState({ likedThis: false }) }} style={{ cursor: 'pointer' }}></img>
                            }
                        </div>
                        <div style={{ position: "absolute", bottom: 5, right: 5 }}>
                            {this.props.company === 'tradera' &&
                                <img src="https://i.imgur.com/y7yj6aD.png" alt="company" height="25"></img>
                            }
                            {this.props.company === 'blocket' &&
                                <img src="https://i.imgur.com/IcUn5Jr.png" alt="company" height="25"></img>
                            }
                            {this.props.company === 'shpock' &&
                                <img src="https://i.imgur.com/I8xM3Nh.png" alt="company" height="25"></img>
                            }
                        </div>
                        <div style={{ display: "inline-block" }}>
                            <p style={{ marginTop: 5, marginBottom: 0 }}><em>{this.state.location}</em></p>
                            <h3 style={{ margin: 0 }}>{this.state.title}</h3>
                            <p style={{ margin: 0 }}>{this.state.price}</p>
                            <a onClick={() => { window.open(this.state.link, '_blank') }} style={{ color: 'green', fontSize: 16, textDecorationLine: 'underline', cursor: 'pointer' }}>Visa annons</a>
                        </div>
                    </CardContent>
                </Card>
            )
        }
        else {
            return (
                <Card style={{ width: "90%", height: 220, display: "inline-block", margin: 10, position: "relative" }}>
                    <CardContent style={{ margin: 0, padding: 0 }}>
                        <div className="imageDiv" style={{ height: 108, padding: 0, margin: 0, textAlign: 'center' }}>
                            <img src={this.state.image} alt="item" height="108" style={{ padding: 0, textAlign: 'center', margin: '2% auto' }}></img>
                        </div>
                        <div style={{ position: "absolute", top: 8, right: 10 }}>
                        {!this.state.likedThis &&
                                <img src="https://i.imgur.com/UwtKFEG.png" alt="like_icon" height="25" onClick={() => { if (!this.state.likedThis) this.setState({ likedThis: true }); else this.setState({ likedThis: false }) }} style={{ cursor: 'pointer' }}></img>
                            }
                            {this.state.likedThis &&
                                <img src="https://i.imgur.com/EBSEJhl.png" alt="like_icon" height="25" onClick={() => { if (!this.state.likedThis) this.setState({ likedThis: true }); else this.setState({ likedThis: false }) }} style={{ cursor: 'pointer' }}></img>
                            }
                        </div>
                        <div style={{ position: "absolute", bottom: 5, right: 5 }}>
                            {this.props.company === 'tradera' &&
                                <img src="https://i.imgur.com/y7yj6aD.png" alt="company" height="25"></img>
                            }
                            {this.props.company === 'blocket' &&
                                <img src="https://i.imgur.com/IcUn5Jr.png" alt="company" height="25"></img>
                            }
                            {this.props.company === 'shpock' &&
                                <img src="https://i.imgur.com/I8xM3Nh.png" alt="company" height="25"></img>
                            }
                        </div>
                        <div style={{ display: "inline-block" }}>
                            <p style={{ marginTop: 5, marginBottom: 0 }}><em>{this.state.location}</em></p>
                            <h3 style={{ margin: 0 }}>{this.state.title}</h3>
                            <p style={{ margin: 0 }}>{this.state.price}</p>
                            <a onClick={() => { window.open(this.state.link, '_blank') }} style={{ color: 'green', fontSize: 16, textDecorationLine: 'underline', cursor: 'pointer' }}>Visa annons</a>
                        </div>
                    </CardContent>
                </Card>
            )
        }
    }
}
