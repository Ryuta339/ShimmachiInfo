import * as React from 'react';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { firstPocket } from '../../settings/switches'
import { ShakosenState } from '../../settings/drawings'

interface RouteItemProps {
  depth: number;
  label: string;
  children?: RouteItemProps[];
}

const routeMembers: RouteItemProps[] = [
  {
    depth: 0,
    label: "本線-引上線",
    children: [
      {
        depth: 1,
        label: "3番線-引上げ1番線",
      },
      {
        depth: 1,
        label: "3番線-引上げ2番線",
      },
      {
        depth: 1,
        label: "3番線-引上げ3番線",
      },
    ],
  },
  {
    depth: 0,
    label: "本線-留置線",
  },
  {
    depth: 0,
    label: "引上線-洗浄線",
  }
]

const RouteItem: React.FC<RouteItemProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (props.depth === 0) {
      setOpen(!open);
    } else {
      firstPocket.state = ShakosenState
    }
  }

  const text = (props.depth === 0) ?
    <ListItemText primary={`${props.label}`} /> :
    <ListItemText secondary={`${props.label}`} /> 

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon></ListItemIcon>
        {text}
        {props.children &&
          <> {open ? <ExpandLess /> : <ExpandMore />} </>
        }
      </ListItemButton>
      {props.children &&
        <Collapse in={open} timeout="auto" unmountOnExit>
          {
            props.children.map((val, idx) => {
              return (
                <RouteItem {...val} />
              )
            })
          }
        </Collapse>
      }
    </>
  )
}


const ListItems: React.FC<{ click: ()=>void, click2: ()=>void }> = ({ click, click2 }) => {
  return (
    <List component="nav">
      <ListItemButton onClick={click}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="メイン" />
      </ListItemButton>
      <ListItemButton onClick={click2}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="メイン2" />
      </ListItemButton>
      {
        routeMembers.map((val: RouteItemProps, idx) => {
          return (
            <RouteItem {...val} />
          )
        })
      }
    </List>
  );
}

export default ListItems;
