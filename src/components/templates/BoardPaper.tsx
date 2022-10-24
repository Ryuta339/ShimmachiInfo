import * as React from "react"
import { Box, Paper, Typography } from '@mui/material'
import Konva from "konva"
import { Circle, Layer, Stage } from 'react-konva'

const BoardPaper: React.FC = () => {
  return (
    <Paper 
      elevation={1}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 400,
      }}
    >
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        noWrap
      >
        配線状態
      </Typography>
      <Stage
        width={500}
        height={370}
      >
        <Layer>
          <Circle
            x={250}
            y={185}
            radius={70}
            fill={"red"}
            stroke={"black"}
          />
        </Layer>
      </Stage>
    </Paper>
  )
}

export default BoardPaper
