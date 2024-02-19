import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import palette from '../shared/palette';


import logo from '/assets/kidx-logo.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="lg" style={{ position: 'relative' }}>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          borderBottom: '1px solid rgb(214,214,214)'
        }}
      >
        <Toolbar disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pl: 2
          }}
        >
          <Box sx={{
            display: { lg: 'flex', xs: 'none' },
          }}>
            <Typography>Home
            </Typography>
            <Typography mx={2}>Shop
            </Typography>
            <Typography>Collection
            </Typography>
          </Box>
          <Box textAlign='center' component='img' src={logo}></Box>
          <Box sx={{
            display: { lg: 'flex', xs: 'none' },
            gap: 2
          }}>
            <Typography>English</Typography>
            <Typography>USD, $</Typography>
            <SearchIcon></SearchIcon>
            <PersonIcon></PersonIcon>
            <ShoppingBasketIcon></ShoppingBasketIcon>
          </Box>
          <Box sx={{
            display: { sm: 'flex', lg: 'none' },
            px: 2
          }}>
            <PersonIcon></PersonIcon>
          </Box>

        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default ResponsiveAppBar;
