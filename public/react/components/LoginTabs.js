import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import LoginUserForm from './LoginUserForm';
import AdminPanelForm from './AdminPanelForm';

const LoginTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Regular User" />
          <Tab label="Admin User" />
        </Tabs>
      </Box>
      {value === 0 && <LoginUserForm />}
      {value === 1 && <AdminPanelForm />}
    </Box>
  );
};

export default LoginTabs;