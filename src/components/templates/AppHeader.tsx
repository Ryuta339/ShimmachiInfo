import React from "react"
import { styled  } from '@mui/material/styles'
import { Badge, IconButton, Toolbar, Typography } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {}) <MuiAppBarProps> (({theme}) => ({
  zIndex: theme.zIndex.drawer + 1,
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
}));


const AppHeader: React.FC = () => {
  return (
    <AppBar 
      position="absolute" 
    >
      <Toolbar sx={{ pr: "24", }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{
            marginRight: "36px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGlow: 1 }}
        >
          Dashboard
        </Typography>
        <IconButton
          color="inherit"
        >
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader;
