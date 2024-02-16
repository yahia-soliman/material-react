import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


export default function CollectionList() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: '40vw', maxWidth: 420,
        borderBottom: '1px solid #eee'
     }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Collections" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Winter collection" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Summer collection" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Jeans collection" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Cool collection" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}