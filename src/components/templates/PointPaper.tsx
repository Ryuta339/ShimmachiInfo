import * as React from "react"
import { Paper, Typography } from '@mui/material'

interface PointPaperProps {
  numOfPoints: number[];
  numOfStraight: number[];
}

const PointPaper: React.FC<PointPaperProps> = (
  { 
    numOfPoints,
    numOfStraight,
  }
) => {
  return (
    <Paper 
      elevation={1}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 240,
      }}
    >
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        noWrap
      >
        ポイント操作
      </Typography>
      <div style={{textAlign: "center"}} >
        <span>分岐ポイントは</span>
        <h1>
          {numOfPoints.map(elem => `${elem}, `)}
        </h1>
        <span>直進ポイントは</span>
        <h1>
          {numOfStraight.map(elem => `${elem}, `)}
        </h1>
      </div>
    </Paper>
  )
}

export default PointPaper
