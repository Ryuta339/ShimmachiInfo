import React from "react"
import ListItems from './listItems'
import { styled } from '@mui/material/styles'
import { Divider, Drawer as MuiDrawer, Toolbar } from '@mui/material'


const drawerWidth = 240;

const Drawer = styled(MuiDrawer) (({theme}) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    boxSizing: 'border-box',
  }
}))

const Sidebar: React.FC<{ click: () => void, click2: () => void }> = ({ click, click2 }) => {
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
      <ListItems
        click={click}
        click2={click2}
      />
    </Drawer>
  )
}

export default Sidebar;
