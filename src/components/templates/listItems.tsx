import * as React from 'react';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material'

type Clickable = () => void

interface RouteItemProps {
  depth: number;
  index: number;
  label: string;
  children?: RouteItemProps[];
  click?: Clickable[];
}

const routeMembers: RouteItemProps[] = [
  {
    depth: 0,
    index: 0,
    label: "本線ー引上線",
    children: [
      {
        depth: 1,
        index: 1,
        label: "1番線ー引上1番線",
      },
      {
        depth: 1,
        index: 2,
        label: "1番線ー引上2番線",
      },
      {
        depth: 1,
        index: 3,
        label: "1番線ー引上3番線",
      },
      {
        depth: 1,
        index: 4,
        label: "2番線ー引上1番線",
      },
      {
        depth: 1,
        index: 5,
        label: "2番線ー引上2番線",
      },
      {
        depth: 1,
        index: 6,
        label: "2番線ー引上3番線",
      },
      {
        depth: 1,
        index: 7,
        label: "3番線ー引上1番線",
      },
      {
        depth: 1,
        index: 8,
        label: "3番線ー引上2番線",
      },
      {
        depth: 1,
        index: 9,
        label: "3番線ー引上3番線",
      },
      {
        depth: 1,
        index: 10,
        label: "4番線ー引上1番線",
      },
      {
        depth: 1,
        index: 11,
        label: "4番線ー引上2番線",
      },
      {
        depth: 1,
        index: 12,
        label: "4番線ー引上3番線",
      },
    ],
  },
  {
    depth: 0,
    index: 0,
    label: "本線ー留置1〜5線",
    children: [
      {
        depth: 1,
        index: 13,
        label: "1番線ー留置1番線",
      },
      {
        depth: 1,
        index: 14,
        label: "1番線ー留置2番線",
      },
      {
        depth: 1,
        index: 15,
        label: "1番線ー留置3番線",
      },
      {
        depth: 1,
        index: 16,
        label: "1番線ー留置4番線",
      },
      {
        depth: 1,
        index: 17,
        label: "1番線ー留置5番線",
      },
    ]
  },
  {
    depth: 0,
    index: 0,
    label: "引上線ー洗浄線・ヤード",
    children: [
      {
        depth: 1,
        index: 18,
        label: "引上1番線ーヤード",
      },
      {
        depth: 1,
        index: 19,
        label: "引上2番線ーヤード",
      },
      {
        depth: 1,
        index: 20,
        label: "引上3番線ー洗浄1番線ーヤード",
      },
      {
        depth: 1,
        index: 21,
        label: "引上3番線ー洗浄2番線ーヤード",
      },
      {
        depth: 1,
        index: 22,
        label: "引上3番線ー洗浄2番線ーヤード",
      },
      {
        depth: 1,
        index: 23,
        label: "引上3番線ーヤード（洗浄線非通過）",
      },
    ],
  },
  {
    depth: 0,
    index: 0,
    label: "引上線ー留置6, 7番線",
    children: [
      {
        depth: 1,
        index: 24,
        label: "引上1番線ー留置6番線",
      },
      {
        depth: 1,
        index: 25,
        label: "引上1番線ー留置7番線",
      },
      {
        depth: 1,
        index: 26,
        label: "引上2番線ー留置6番線",
      },
      {
        depth: 1,
        index: 27,
        label: "引上2番線ー留置7番線",
      },
      {
        depth: 1,
        index: 28,
        label: "引上3番線ー留置6番線",
      },
      {
        depth: 1,
        index: 29,
        label: "引上3番線ー留置7番線",
      },
    ],
  },
]

const RouteItem: React.FC<RouteItemProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (props.depth === 0) {
      setOpen(!open);
    } else {
      props.click![props.index]()
    }
  }

  const text = (props.depth === 0) ?
    <ListItemText primary={`${props.label}`} /> :
    <ListItemText secondary={`${props.label}`} /> 

  return (
    <>
      <ListItemButton onClick={handleClick}>
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
  const handleClick = () => {
    const rnd = Math.floor( Math.random() * (clicks.length-1) ) + 1;

      clicks[rnd]()
  }

  return (
    <List component="nav">
      <ListItemButton onClick={clicks[0]}>
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
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="ランダム" />
      </ListItemButton>
    </List>
  );
}

export default ListItems;
