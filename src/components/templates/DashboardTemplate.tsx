import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  CssBaseline, Box, Toolbar } from "@mui/material";

import AppHeader from './AppHeader'
import AppMain from './AppMain'
import Sidebar from './Sidebar'
import * as Lines from '../../settings/lines'
import * as Switches from '../../settings/switches'
import { LineNode, SelectedLineState, ShakosenState, SwitchNode } from '../../settings/drawings'

const mdTheme = createTheme()

const data = [
  {
    lines: [],
    switches: [],
    numbers: [],
  },
  {
    lines: [
      Lines.thirdLine, Lines.inboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketTrack,
    ],
    switches: [
      Switches.thirdTrack, Switches.honsenToPocket, Switches.firstPocket,
    ],
    numbers: [9],
  },
  {
    lines: [
      Lines.thirdLine, Lines.inboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketToSecondPocketCross,
      Lines.secondPocketTrack,
    ],
    switches: [
      Switches.thirdTrack, Switches.honsenToPocket, Switches.secondPocket,
    ],
    numbers: [9, 13, 14],
  },
  {
    lines: [
      Lines.thirdLine, Lines.inboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketToSecondPocketCross,
      Lines.secondPocketToThirdPocketCross, Lines.thirdPocketTrack,
    ],
    switches: [
      Switches.thirdTrack, Switches.honsenToPocket, Switches.thirdPocket,
    ],
    numbers: [9, 13, 15],
  },
]

const DashboardTemplate: React.FC = () => {
  const [ mainLayerHook, setMainState ] = React.useState(Lines.mainLayer)
  const [ switchLayerHook, setSwitchState ] = React.useState(Switches.switchLayer)
  const [ points, setPoints ] = React.useState<number[]>([])

  const clicks = data.map(elem => {
    return () => {
      setSwitchState(Switches.switchLayer)
      setMainState(Lines.mainLayer)

      setSwitchState((prevState) => ({
        ...prevState,
        append: prevState.append,
        children: prevState.children.map((val, idx) => {
          let flag: boolean = false
          elem.switches.forEach(s => {
            const i = Switches.switchLayer.children.indexOf(s)
            flag = flag || (idx === i)
          })
          return flag ? ({...val, state:ShakosenState} as SwitchNode): val
        })
      }))

      setMainState((prevState) => ({
        ...prevState,
        append: prevState.append,
        children: prevState.children.map((val, idx) => {
          let flag: boolean = false
          elem.lines.forEach(l => {
            const i = Lines.mainLayer.children.indexOf(l)
            flag = flag || (idx === i)
          })
          return flag ? ({...val, state: SelectedLineState} as LineNode) : val
        })
      }))

      setPoints(elem.numbers)
    }
  })

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppHeader />
        <Sidebar 
          clicks={clicks}
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
            numOfPoints={points}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashboardTemplate;
