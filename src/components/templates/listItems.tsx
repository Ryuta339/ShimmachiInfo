import * as React from 'react';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material'

type Clickable = () => void

interface RouteItemProps {
  depth: number;
  label: string;
  children?: RouteItemProps[];
  click?: Clickable[];
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
        depth: 2,
        label: "3番線-引上げ2番線",
      },
      {
        depth: 3,
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
      props.click![props.depth]()
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
                <RouteItem {...val}
                  click={props.click}
                />
              )
            })
          }
        </Collapse>
      }
    </>
  )
}


const ListItems: React.FC<{ clicks: Clickable[] }> = ({ clicks }) => {
  return (
    <List component="nav">
      <ListItemButton onClick={clicks[0]}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="メイン" />
      </ListItemButton>
      {
        routeMembers.map((val: RouteItemProps, idx) => {
          return (
            <RouteItem {...val}
              click={clicks}
            />
          )
        })
      }
    </List>
  );
}

export default ListItems;
