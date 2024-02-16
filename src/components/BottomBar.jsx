import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import CollectionList from './Lists/CollectionList';
import PagesList from './Lists/PagesList';


export default function BottomBar() {
    const [drawer, setDrawer] = useState(false);

    return (
        <Paper
            sx={{
                display: {lg: 'none', sx: 'block'},
                zIndex: 1000,
                position: 'fixed',
                bottom: 0, left: 0, right: 0,
            }}
        >
            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction label="Home"
                icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction label="Search"
                icon={<SearchOutlinedIcon />} />
                <BottomNavigationAction label="Shop"
                icon={<ShoppingBagOutlinedIcon />} />
                <BottomNavigationAction label="Phone"
                icon={<CallOutlinedIcon />} />
                <BottomNavigationAction label="More"
                icon={<MenuOutlinedIcon onClick={() => setDrawer(true)} />} />
            </BottomNavigation>
            <SwipeableDrawer
                anchor='right'
                open={drawer}
                onClose={() => setDrawer(false)}
                onOpen={() => setDrawer(true)}
            >
                <CollectionList></CollectionList>
                <PagesList></PagesList>
            </SwipeableDrawer>
        </Paper>
    );
}