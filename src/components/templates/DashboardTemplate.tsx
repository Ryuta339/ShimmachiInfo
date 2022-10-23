import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  CssBaseline, Box, Toolbar } from "@mui/material";

import AppHeader from './AppHeader'
import AppMain from './AppMain'
import Sidebar from './Sidebar'

const mdTheme = createTheme()

const DashboardTemplate: React.FC = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppHeader />
        <Sidebar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            width: '100%'
          }}
        >
          <Toolbar />
          <AppMain />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashboardTemplate;
