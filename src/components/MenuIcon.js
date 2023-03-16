import { createElement, React } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';

const MenuIcon = ({ iconName, muiIcon }) => {
  const icon = createElement(muiIcon);

  return (
    <ListItem key={iconName} disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={iconName} />
      </ListItemButton>
    </ListItem>
  );
};

MenuIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  muiIcon: PropTypes.element.isRequired,
};

export default MenuIcon;
