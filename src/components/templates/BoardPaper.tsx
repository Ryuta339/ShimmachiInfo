import * as React from "react"
import { Container, Paper, Typography } from '@mui/material'
import { Layer, Stage, Text } from 'react-konva'
import { NodeGenerator, LayerNode } from "../../settings/drawings"

interface BoardPaperProps {
  mainLayer: LayerNode;
  switchLayer: LayerNode;
}

const BoardPaper: React.FC<BoardPaperProps> = (
  {
    mainLayer,
    switchLayer,
  }
) => {
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
          <NodeGenerator
            node={mainLayer}
          />
          <NodeGenerator
            node={switchLayer}
          />
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
            <Text
              x={600}
              y={80}
              text="1番線"
            />
            <Text
              x={600}
              y={120}
              text="2番線"
            />
            <Text
              x={600}
              y={150}
              text="3番線"
            />
            <Text
              x={600}
              y={190}
              text="4番線"
            />
            <Text
              x={390}
              y={259}
              text={"洗浄1番線"}
            />
            <Text
              x={390}
              y={279}
              text={"洗浄2番線"}
            />
            <Text
              x={390}
              y={299}
              text={"洗浄3番線"}
            />
            <Text
              x={100}
              y={120}
              fontSize={16}
              text="下り本線→"
            />
            <Text
              x={100}
              y={178}
              fontSize={16}
              text="←上り本線"
            />
          </Layer>
        </Stage>
      </Container>
    </Paper>
  )
}

export default BoardPaper
