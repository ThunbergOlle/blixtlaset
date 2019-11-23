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
                <InputLabel htmlFor="area">Län</InputLabel>

                <Select
                    className={this.classes.selectAll}
                    onChange={this.changeArea.bind(this)}
                    value={this.state.area}
                    style={{ width: 150 }}
                    id="area"
                >
                    <MenuItem value="helasverige">Hela Sverige</MenuItem>
                    <MenuItem value="blekinge">Blekinge</MenuItem>
                    <MenuItem value="dalarna">Dalarna</MenuItem>
                    <MenuItem value="dalsland">Dalsland</MenuItem>
                    <MenuItem value="Gotland">Gotland</MenuItem>
                    <MenuItem value="Gastrikland">Gästrikland</MenuItem>
                    <MenuItem value="Halland">Halland</MenuItem>
                    <MenuItem value="Halsingland">Hälsingland</MenuItem>
                    <MenuItem value="Harjedalen">Härjedalen</MenuItem>
                    <MenuItem value="Jamtland">Jamtland</MenuItem>
                    <MenuItem value="Lappland">Lappland</MenuItem>
                    <MenuItem value="Medelpad">Medelpad</MenuItem>
                    <MenuItem value="Norrbotten">Norrbotten</MenuItem>
                    <MenuItem value="Narke">Närke</MenuItem>
                    <MenuItem value="Skane">Skåne</MenuItem>
                    <MenuItem value="Smaland">Småland</MenuItem>
                    <MenuItem value="Sodermanland">Södermanland</MenuItem>
                    <MenuItem value="Uppland">Uppland</MenuItem>
                    <MenuItem value="Varmland">Värmland</MenuItem>
                    <MenuItem value="Vasterbotten">Västerbotten</MenuItem>
                    <MenuItem value="Vastergotland">Västergotland</MenuItem>
                    <MenuItem value="Vastmanland">Västmanland</MenuItem>
                    <MenuItem value="Angermanland">Ångermanland</MenuItem>
                    <MenuItem value="oland">Öland</MenuItem>
                    <MenuItem value="ostergotland">Östergötland</MenuItem>

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