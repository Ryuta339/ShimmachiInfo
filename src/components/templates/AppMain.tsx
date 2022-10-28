import React from "react";
import { Container, Grid } from '@mui/material'

import BoardPaper from './BoardPaper'
import PointPaper from './PointPaper'
import PowerPaper from './PowerPaper'
import { LayerNode } from '../../settings/drawings'

interface AppMainProps {
  mainLayer: LayerNode,
  switchLayer: LayerNode,
  numOfPoints: number[],
  numOfStraight: number[],
}

const AppMain: React.FC<AppMainProps> = (
  {
    mainLayer,
    switchLayer,
    numOfPoints,
    numOfStraight,
  }
) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, height: `calc(100% - 64px)` }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <BoardPaper 
            mainLayer={mainLayer}
            switchLayer={switchLayer}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PointPaper numOfPoints={numOfPoints} numOfStraight={numOfStraight} />
        </Grid>
        <Grid item xs={12} md={6}>
          <PowerPaper />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AppMain;
