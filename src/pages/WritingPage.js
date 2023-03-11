import React from 'react';
import { Stack } from '@mui/material';

import ActionMenu from '../components/ActionMenu';
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
      <ActionMenu />
      <ProjectNavigator />
      <WritingSpace />
    </Stack>
  );
};

export default WritingPage;
