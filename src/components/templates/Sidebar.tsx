import React from "react"
import ListItems from './listItems'
import { styled } from '@mui/material/styles'
import { Divider, Drawer as MuiDrawer, Toolbar } from '@mui/material'


const drawerWidth = 250;

const Drawer = styled(MuiDrawer) (({theme}) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    boxSizing: 'border-box',
  }
}))

type Clickable = () => void;

interface SidebarProps {
  clicks: Clickable[];
}

const Sidebar: React.FC<SidebarProps> = ({ clicks }) => {
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
        clicks={clicks}
      />
    </Drawer>
  )
}

export default Sidebar;
