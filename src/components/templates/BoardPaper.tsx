import * as React from "react"
import { Container, Paper, Typography } from '@mui/material'
import Konva from "konva"
import { Circle, Group, Layer, Line, Stage, Text } from 'react-konva'
import { mainLayer } from '../../settings/lines'
import { switchLayer } from '../../settings/switches'

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
      <Container>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          noWrap
        >
          配線状態
        </Typography>
        <Stage
          width={800}
          height={370}
        >
          {mainLayer.render()}
          {switchLayer.render()}
          <Layer>
            <Text
              x={140}
              y={14}
              text="留置1番線"
            />
            <Text
              x={140}
              y={34}
              text="留置2番線"
            />
            <Text
              x={140}
              y={54}
              text="留置3番線"
            />
            <Text
              x={140}
              y={74}
              text="留置4番線"
            />
            <Text
              x={140}
              y={94}
              text="留置5番線"
            />
            <Text
              x={0}
              y={204}
              text="引上1番線"
            />
            <Text
              x={0}
              y={224}
              text="引上2番線"
            />
            <Text
              x={0}
              y={244}
              text="引上3番線"
            />
            <Text
              x={750}
              y={290}
              text="ヤード"
            />
            <Text
              x={750}
              y={224}
              text="留置6番線"
            />
            <Text
              x={750}
              y={244}
              text="留置7番線"
            />
          </Layer>
        </Stage>
      </Container>
    </Paper>
  )
}

export default BoardPaper
