import React from 'react';
import { MenuItem, Select, Grid, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default class ThumbnailFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thumbnail: "helasverige"
        }
        this.classes = useStyles;

    }
    changeThumbnail(event){
        this.setState({thumbnail: event.target.value});
        this.props.changeThumbnail(event.target.value);
    }
    render() {
        return (

            <FormControl style={{textAlign: "center", display: "inline-block"}}>
                <InputLabel htmlFor="thumbnail">Utseende</InputLabel>

                <Select
                    className={this.classes.selectAll}
                    onChange={this.changeThumbnail.bind(this)}
                    value={this.state.thumbanil}
                    style={{ width: 150 }}
                    id="thumbnail"
                >
                    <MenuItem value="all">Alla sorters</MenuItem>
                    <MenuItem value="onlyimages">Endast med bilder</MenuItem>
                    <MenuItem value="onlywithoutimages">Endast utan bilder</MenuItem>


                </Select>
            </FormControl>

        )
    }
}
const useStyles = makeStyles(theme => ({

    selectAll: {
        width: 200,
        height: 200,
        minWidth: 200
    },
}));