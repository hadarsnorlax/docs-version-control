import { React } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import {
  Add,
  CreateNewFolder,
  IndeterminateCheckBox,
} from '@mui/icons-material';

const NavigatorControls = ({ onAddFile, onAddFolder, onCollapseAll }) => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton onClick={onAddFile}>
        <Add />
      </IconButton>
      <IconButton onClick={onAddFolder}>
        <CreateNewFolder />
      </IconButton>
      <IconButton onClick={onCollapseAll}>
        <IndeterminateCheckBox />
      </IconButton>
    </Stack>
  );
};

NavigatorControls.propTypes = {
  onAddFile: PropTypes.func.isRequired,
  onAddFolder: PropTypes.func.isRequired,
  onCollapseAll: PropTypes.func.isRequired,
};

export default NavigatorControls;
