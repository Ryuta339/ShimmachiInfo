import * as React from "react"
import { Paper, Typography } from '@mui/material'

interface PointPaperProps {
  numOfPoints: number[]
}

const PointPaper: React.FC<PointPaperProps> = ({ numOfPoints }) => {
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
        <h1 color="red">
          {numOfPoints.map(elem => `${elem}, `)}
        </h1>
        <span>番です</span>
      </div>
    </Paper>
  )
}

export default PointPaper
