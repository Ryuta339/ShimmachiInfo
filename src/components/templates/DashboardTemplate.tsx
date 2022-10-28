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
  // 本線-引上線
  // 1番線-引上線
  {
    lines: [
      Lines.firstLine, Lines.firstToSecondCross, Lines.inboundSubLine,
      Lines.secondToThirdCross, Lines.outboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketTrack,
    ],
    switches: [
      Switches.firstTrack, Switches.cross,
      Switches.honsenToPocket, Switches.firstPocket,
    ],
    numbers: [6, 9, 10],
  },
  {
    lines: [
      Lines.firstLine, Lines.firstToSecondCross, Lines.inboundSubLine,
      Lines.secondToThirdCross, Lines.outboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketToSecondPocketCross,
      Lines.secondPocketTrack,
    ],
    switches: [
      Switches.firstTrack, Switches.cross,
      Switches.honsenToPocket, Switches.secondPocket,
    ],
    numbers: [6, 9, 10, 13, 14],
  },
  {
    lines: [
      Lines.firstLine, Lines.firstToSecondCross, Lines.inboundSubLine,
      Lines.secondToThirdCross, Lines.outboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketToSecondPocketCross,
      Lines.secondPocketToThirdPocketCross, Lines.thirdPocketTrack,
    ],
    switches: [
      Switches.firstTrack, Switches.cross,
      Switches.honsenToPocket, Switches.thirdPocket,
    ],
    numbers: [6, 9, 10, 13, 15],
  },
  // 2番線-引上線
  {
    lines: [
      Lines.secondLine, Lines.inboundSubLine,
      Lines.secondToThirdCross, Lines.outboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketTrack,
    ],
    switches: [
      Switches.secondTrack, Switches.cross,
      Switches.honsenToPocket, Switches.firstPocket,
    ],
    numbers: [9, 10],
  },
  {
    lines: [
      Lines.secondLine, Lines.inboundSubLine,
      Lines.secondToThirdCross, Lines.outboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketToSecondPocketCross,
      Lines.secondPocketTrack,
    ],
    switches: [
      Switches.secondTrack, Switches.cross,
      Switches.honsenToPocket, Switches.secondPocket,
    ],
    numbers: [9, 10, 13, 14],
  },
  {
    lines: [
      Lines.secondLine, Lines.inboundSubLine,
      Lines.secondToThirdCross, Lines.outboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketToSecondPocketCross,
      Lines.secondPocketToThirdPocketCross, Lines.thirdPocketTrack,
    ],
    switches: [
      Switches.secondTrack, Switches.cross,
      Switches.honsenToPocket, Switches.thirdPocket,
    ],
    numbers: [9, 10, 13, 15],
  },
  // 3番線-引上線
  {
    lines: [
      Lines.thirdLine, Lines.inboundSubLine, Lines.thirdToFourthCross1,
      Lines.firstPocketSubLine, Lines.firstPocketTrack,
    ],
    switches: [
      Switches.thirdTrack, Switches.honsenToPocket, Switches.firstPocket,
    ],
    numbers: [10],
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
    numbers: [10, 13, 14],
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
    numbers: [10, 13, 15],
  },
  // 4番線-引上線
  {
    lines: [
      Lines.fourthLine, Lines.fourthSubLine, Lines.fourthSubLineOnCross,
      Lines.firstPocketSubLine, Lines.firstPocketTrack,
    ],
    switches: [
      Switches.fourthTrack, Switches.honsenToPocket, Switches.firstPocket,
    ],
    numbers: [],
  },
  {
    lines: [
      Lines.fourthLine, Lines.fourthSubLine, Lines.fourthSubLineOnCross,
      Lines.firstPocketSubLine, Lines.firstPocketToSecondPocketCross,
      Lines.secondPocketTrack,
    ],
    switches: [
      Switches.fourthTrack, Switches.honsenToPocket, Switches.secondPocket,
    ],
    numbers: [13, 14],
  },
  {
    lines: [
      Lines.fourthLine, Lines.fourthSubLine, Lines.fourthSubLineOnCross,
      Lines.firstPocketSubLine, Lines.firstPocketToSecondPocketCross,
      Lines.secondPocketToThirdPocketCross, Lines.thirdPocketTrack,
    ],
    switches: [
      Switches.fourthTrack, Switches.honsenToPocket, Switches.thirdPocket,
    ],
    numbers: [13, 15],
  },
  // 本線-留置線
  {
    lines: [
      Lines.firstLine, Lines.dententionToFirstLine, Lines.firstDententionLine,
    ],
    switches: [
      Switches.firstTrack, Switches.dententions,
    ],
    numbers: [16],
  },
  {
    lines: [
      Lines.firstLine, Lines.dententionToFirstLine,
      Lines.dententionFirstToSecond, Lines.secondDententionLine,
    ],
    switches: [
      Switches.firstTrack, Switches.dententions,
    ],
    numbers: [17],
  },
  {
    lines: [
      Lines.firstLine, Lines.dententionToFirstLine,
      Lines.dententionFirstToSecond, Lines.dententionSecondToThird,
      Lines.thirdDententionLine,
    ],
    switches: [
      Switches.firstTrack, Switches.dententions,
    ],
    numbers: [18],
  },
  {
    lines: [
      Lines.firstLine, Lines.dententionToFirstLine, 
      Lines.dententionFirstToSecond, Lines.dententionSecondToThird,
      Lines.dententionThirdToFourth, Lines.fourthDententionLine,
    ],
    switches: [
      Switches.firstTrack, Switches.dententions,
    ],
    numbers: [19],
  },
  {
    lines: [
      Lines.firstLine, Lines.dententionToFirstLine,
      Lines.dententionFirstToSecond, Lines.dententionSecondToThird,
      Lines.dententionThirdToFourth, Lines.fifthDententionLine,
    ],
    switches: [
      Switches.firstTrack, Switches.dententions,
    ],
    numbers: [],
  },
  // 引上線-ヤード
  {
    lines: [
      Lines.firstPocketTrack, Lines.firstPocketSubLine,
      Lines.fourthSubLineOnCross, Lines.fourthSubLine,
      Lines.fourthToDententionCross, Lines.dententionSubLine,
      Lines.sixthDententionToSeventhDentention,
      Lines.dentensionToYardCross, Lines.firstToMainWashLine,
      Lines.toYard,
    ],
    switches: [
      Switches.firstPocket, Switches.honsenToPocket,
      Switches.dententions67, Switches.yard,
    ],
    numbers: [5, 7, 8],
  },
  {
    lines: [
      Lines.secondPocketTrack, Lines.secondPocketSubLine,
      Lines.dententionSubLine, Lines.sixthDententionToSeventhDentention,
      Lines.dentensionToYardCross, Lines.firstToMainWashLine,
      Lines.toYard,
    ],
    switches: [
      Switches.secondPocket, Switches.secondPocketSub,
      Switches.dententions67, Switches.yard,
    ],
    numbers: [5, 7],
  },
  {
    lines: [
      Lines.thirdPocketTrack, Lines.pocketToWashLine,
      Lines.thirdToMainWashLine, Lines.firstWashLine,
      Lines.firstToMainWashLine, Lines.toYard,
    ],
    switches: [
      Switches.thirdPocket, Switches.washToPocket,
      Switches.firstWash, Switches.yard,
    ],
    numbers: [],
  },
  {
    lines: [
      Lines.thirdPocketTrack, Lines.pocketToWashLine,
      Lines.thirdToMainWashLine, Lines.secondWashLine,
      Lines.secondToMainWashLine, Lines.toYard,
    ],
    switches: [
      Switches.thirdPocket, Switches.washToPocket,
      Switches.secondWash, Switches.yard,
    ],
    numbers: [3, 4, 11],
  },
  {
    lines: [
      Lines.thirdPocketTrack, Lines.pocketToWashLine,
      Lines.thirdWashLine, Lines.secondToMainWashLine,
      Lines.toYard,
    ],
    switches: [
      Switches.thirdPocket, Switches.washToPocket,
      Switches.thirdWash, Switches.yard,
    ],
    numbers: [3, 12],
  },
  {
    lines: [
      Lines.thirdPocketTrack, 
      Lines.secondPocketToThirdPocketCross, Lines.secondPocketSubLine,
      Lines.dententionSubLine, Lines.sixthDententionToSeventhDentention,
      Lines.dentensionToYardCross, Lines.firstToMainWashLine,
      Lines.toYard,
    ],
    switches: [
      Switches.thirdPocket,Switches.secondPocketSub,
      Switches.dententions67, Switches.yard,
    ],
    numbers: [5, 7, 14, 15],
  },
  // 引上線ー留置6,7 番線
  {
    lines: [
      Lines.firstPocketTrack, Lines.firstPocketSubLine,
      Lines.fourthToDententionCross, Lines.fourthSubLine,
      Lines.fourthSubLineOnCross, Lines.dententionSubLine,
      Lines.sixthDententionLine,
    ],
    switches: [
      Switches.firstPocket, Switches.honsenToPocket,
      Switches.dententions67,
    ],
    numbers: [8],
  },
  {
    lines: [
      Lines.firstPocketTrack, Lines.firstPocketSubLine,
      Lines.fourthToDententionCross, Lines.fourthSubLine,
      Lines.fourthSubLineOnCross, Lines.dententionSubLine,
      Lines.sixthDententionToSeventhDentention,
      Lines.seventhDententionLine,
    ],
    switches: [
      Switches.firstPocket, Switches.honsenToPocket,
      Switches.dententions67,
    ],
    numbers: [7, 8],
  },
  {
    lines: [
      Lines.secondPocketTrack, Lines.secondPocketSubLine,
      Lines.dententionSubLine, Lines.sixthDententionLine,
    ],
    switches: [
      Switches.secondPocket, Switches.secondPocketSub,
      Switches.dententions67,
    ],
    numbers: [],
  },
  {
    lines: [
      Lines.secondPocketTrack, Lines.secondPocketSubLine,
      Lines.dententionSubLine, Lines.seventhDententionLine,
      Lines.sixthDententionToSeventhDentention,
    ],
    switches: [
      Switches.secondPocket, Switches.secondPocketSub,
      Switches.dententions67,
    ],
    numbers: [7],
  },
  {
    lines: [
      Lines.thirdPocketTrack, Lines.secondPocketToThirdPocketCross, Lines.secondPocketSubLine,
      Lines.dententionSubLine, Lines.sixthDententionLine,
    ],
    switches: [
      Switches.thirdPocket, Switches.secondPocketSub,
      Switches.dententions67,
    ],
    numbers: [14, 15],
  },
  {
    lines: [
      Lines.secondPocketTrack, Lines.secondPocketSubLine,
      Lines.dententionSubLine, Lines.seventhDententionLine,
      Lines.sixthDententionToSeventhDentention,
    ],
    switches: [
      Switches.thirdPocket, Switches.secondPocketSub,
      Switches.dententions67,
    ],
    numbers: [7, 14, 15],
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
