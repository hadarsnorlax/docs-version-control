import React from 'react';
import { Stack } from '@mui/material';

import ToolBar from '../components/ToolBar';
import ProjectNavigator from '../components/ProjectNavigator';
import WritingSpace from '../components/WritingSpace';

const WritingPage = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      spacing={2}
    >
      <ToolBar />
      <ProjectNavigator />
      <WritingSpace />
    </Stack>
  );
};

export default WritingPage;
