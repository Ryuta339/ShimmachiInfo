import React from "react"
import ListItems from './listItems'
import { styled } from '@mui/material/styles'
import { Divider, Drawer as MuiDrawer, List, Toolbar, Typography } from '@mui/material'


const drawerWidth = 240;

const Drawer = styled(MuiDrawer) (({theme}) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    boxSizing: 'border-box',
  }
}))

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent">
      <Toolbar 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
      </Toolbar>
      <Divider />
      <ListItems />
    </Drawer>
  )
}

export default Sidebar;
