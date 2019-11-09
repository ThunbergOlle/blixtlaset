import React from 'react';
import { MenuItem, Select, Grid, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default class AreaFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            area: "helasverige"
        }
        this.classes = useStyles;

    }
    changeArea(event){
        this.setState({area: event.target.value});
        this.props.changeArea(event.target.value);
    }
    render() {
        return (

            <FormControl style={{textAlign: "center", display: "inline-block"}}>
                <InputLabel htmlFor="area">Område</InputLabel>

                <Select
                    className={this.classes.selectAll}
                    onChange={this.changeArea.bind(this)}
                    value={this.state.area}
                    style={{ width: 150 }}
                    id="area"
                >
                    <MenuItem value="helasverige">Hela Sverige</MenuItem>
                    <MenuItem value="skane">Skåne</MenuItem>
                    <MenuItem value="halland">Halland</MenuItem>
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