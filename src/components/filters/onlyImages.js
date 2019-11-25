import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { green } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

export default class OnlyImages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onlyImages: false
        }
        this.classes = useStyles;

    }
    changeOnlyImages(event){
        this.setState({onlyImages: event.target.checked});
        this.props.changeOnlyImages(event.target.checked);
    }
    render() {
        return (

            <FormControlLabel
            control={
              <GreenCheckbox
                checked={this.state.onlyImages}
                onChange={this.changeOnlyImages.bind(this)}
                value="onlyImages"
              />
            }
            style={{marginLeft: 15}}
            label="Visa bara annonser med bilder"
          />

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