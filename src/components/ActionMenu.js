import React from 'react';
import { Drawer, List } from '@mui/material';
import {
  Home,
  FolderOpen,
  Commit,
  Comment,
  People,
  Settings,
} from '@mui/icons-material';

import MenuIcon from './MenuIcon';

const menuIcons = {
  home: {
    name: 'Home',
    muiIcon: Home,
  },
  documents: {
    name: 'Documents',
    muiIcon: FolderOpen,
  },
  history: {
    name: 'History',
    muiIcon: Commit,
  },
  comments: {
    name: 'Comments',
    muiIcon: Comment,
  },
  people: {
    name: 'Members',
    muiIcon: People,
  },
  settings: {
    name: 'Settings',
    muiIcon: Settings,
  },
};

const ActionMenu = () => {
  return (
    <Drawer anchor="left" variant="permanent">
      <List>
        {Object.values(menuIcons).map((icon) => {
          return <MenuIcon iconName={icon.name} muiIcon={icon.muiIcon} />;
        })}
      </List>
    </Drawer>
  );
};

export default ActionMenu;
