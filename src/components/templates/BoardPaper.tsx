import * as React from "react"
import { Paper, Typography } from '@mui/material'

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
    </Paper>
  )
}

export default BoardPaper
