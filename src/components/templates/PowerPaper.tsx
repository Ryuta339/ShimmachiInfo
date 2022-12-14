import * as React from "react"
import { Paper, Typography } from '@mui/material'

const PowerPaper: React.FC = () => {
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
        電源操作
      </Typography>
    </Paper>
  )
}

export default PowerPaper
