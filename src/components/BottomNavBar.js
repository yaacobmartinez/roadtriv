import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import { Cloud, Explore, Map, Search } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
    root: {
        position: 'absolute', bottom: 0, width: '100%', paddingTop: 10, paddingBottom: 10, 
    }
}))
function BottomNavBar({...rest}){
    const classes = useStyles()
    const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
    const [value, setValue] = React.useState(pathname);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} showLabels={true} 
            className={classes.root}
            {...rest} 
        >
          <BottomNavigationAction label="Discover" value="/home" icon={<Explore />} component={Link} to='/home'/>
          <BottomNavigationAction label="Map" value="/map" icon={<Map /> } component={Link} to='/map'/>                
          <BottomNavigationAction label="Weather" value="/weather" icon={<Cloud />}  component={Link} to='/weather'/>
          <BottomNavigationAction label="Search" value="/search" icon={<Search />} component={Link} to='/search'/>
        </BottomNavigation>
      );
}

export default BottomNavBar