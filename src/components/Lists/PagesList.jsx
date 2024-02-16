import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import palette from '../../shared/palette';


export default function PagesList() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: '40vw', maxWidth: 420,
        borderBottom: '1px solid #eee',
      }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Pages"/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding
          sx={{
            '& *': { py: 0, fontSize: '14px'},
            '& span:hover': {
              color: palette.fg1
            }
          }}
        >
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="About Us" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="FAQs" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Wishlist" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Brands" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="categories" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}