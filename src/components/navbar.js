import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
function NavBar(props){
const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };
    const classes = useStyles(); 
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            <img src="https://i.imgur.com/4L2LaHv.png" alt="logo"></img>
                    </Typography>
                    <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Sök efter annons"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div> 
                                          
                            <AccountCircleIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                            <Menu
                            id="login-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Logga in</MenuItem>
                            <MenuItem onClick={handleClose}>Skapa konto</MenuItem>
                        </Menu>
    
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    
    
}
const useStyles = makeStyles(theme => ({
    '@global': {  
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: " #00b300",
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        textAlign: "left"
    },
    link: {
        margin: theme.spacing(1, 1.5),
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
            display: 'inline-block'
        },
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        display: "none",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
            display: 'inline-block'
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        cardPricing: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            marginBottom: theme.spacing(2),
        },
        footer: {
            borderTop: `1px solid ${theme.palette.divider}`,
            marginTop: theme.spacing(8),
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            [theme.breakpoints.up('sm')]: {
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
            },
        },
    },
}));
export default NavBar;