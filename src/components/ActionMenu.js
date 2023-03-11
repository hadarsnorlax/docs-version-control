import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Home,
  FolderOpen,
  Commit,
  Comment,
  People,
  Settings,
} from '@mui/icons-material';

const menuIcons = {
  Home,
  FolderOpen,
  Commit,
  Comment,
  People,
  Settings,
};

const ActionMenu = () => {
  return (
    <Drawer anchor="left" variant="permanent">
      <List>
        {menuIcons.map((icon) => (
          <ListItem key={icon} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default ActionMenu;
