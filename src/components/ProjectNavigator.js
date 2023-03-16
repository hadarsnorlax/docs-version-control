import React, { useState } from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';

import NavigatorControls from './NavigatorControls';

const ProjectNavigator = () => {
  const [projectItems, setProjectItems] = useState([]);
  const [itemsExpanded, setItemsExpanded] = useState([]);

  const handleCollapseAll = () => {
    setItemsExpanded([]);
  };

  const handleAddFile = () => {
    // Add file
  };

  const handleAddFolder = () => {
    // Add folder
  };

  return (
    <Stack direction="column" spacing={1}>
      <NavigatorControls
        onAddFile={handleAddFile}
        onAddFolder={handleAddFolder}
        onCollapseAll={handleCollapseAll}
      />
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          height: '100vh',
          flexGrow: 1,
          maxWidth: 300,
          overflow: 'hidden',
        }}
      >
        <TreeItem nodeId="1" label="some-folder">
          <TreeItem nodeId="2" label="some-file" />
        </TreeItem>
      </TreeView>
    </Stack>
  );
};

export default ProjectNavigator;
