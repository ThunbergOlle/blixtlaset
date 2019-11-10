import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles({
    root: {
      width: "100%",
      position: 'fixed',
      bottom: 0,
    },
  });
export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const isMobile = window.innerWidth <= 500;
    if(isMobile){
    return(
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Sök" value="search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Hjälp" value="help" icon={<HelpIcon />} />
        <BottomNavigationAction label="Sparade" value="saved" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Mitt konto" value="account" icon={<AccountCircleIcon />} />
        </BottomNavigation>
      )
    }else {
      return(
        <div style={{display: 'none'}}>

        </div>
      );
    }

}