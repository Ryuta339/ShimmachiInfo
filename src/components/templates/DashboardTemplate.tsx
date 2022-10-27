import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  CssBaseline, Box, Toolbar } from "@mui/material";

import AppHeader from './AppHeader'
import AppMain from './AppMain'
import Sidebar from './Sidebar'
import { mainLayer } from '../../settings/lines'
import { switchLayer } from '../../settings/switches'
import { ShakosenState, SwitchNode } from '../../settings/drawings'

const mdTheme = createTheme()

const DashboardTemplate: React.FC = () => {
  const [ mainLayerHook, setMainState ] = React.useState(mainLayer)
  const [ switchLayerHook, setSwitchState ] = React.useState(switchLayer)

  const click = () => {
    setSwitchState(switchLayer)

    setSwitchState((prevState) => ({
      ...prevState,
      children: prevState.children.map((val, idx) => (idx===0 ? ({...val, state:ShakosenState} as SwitchNode): val)),
        append: prevState.append
      })
    )
  }
  const click2 = () => {
    setSwitchState(switchLayer)

    setSwitchState((prevState) => ({
      ...prevState,
      children: prevState.children.map((val, idx) => (idx===4 ? ({...val, state:ShakosenState} as SwitchNode): val)),
        append: prevState.append
      })
    )
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppHeader />
        <Sidebar 
          click={click}
          click2={click2}
        />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100%',
            overflow: 'auto',
            width: '100%'
          }}
        >
          <Toolbar />
          <AppMain
            mainLayer={mainLayerHook}
            switchLayer={switchLayerHook}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashboardTemplate;
