import * as React from "react"
import { Circle, Group, Layer, Line } from 'react-konva'
import { v4 as uuidv4 } from 'uuid'

export interface PowerUnitType {
  label: string;
  strokeWidth: number;
}

export const Honsen: PowerUnitType = {
  label: '本線',
  strokeWidth: 3,
}

export const Shakosen: PowerUnitType = {
  label: '車庫線',
  strokeWidth: 1,
}

export interface PowerState {
  label: string;
  color: string;
}

export const OffState: PowerState = {
  label: '切',
  color: 'black'
}

export const HonsenState: PowerState = {
  label: '本線',
  color: 'green',
}

export const ShakosenState: PowerState = {
  label: '車庫線',
  color: 'red'
}

export interface BoardNode {
  id: string;
  fieldType: string;
  children?: BoardNode[];
}

abstract class BoardNodeBase implements BoardNode {
  id: string;
  fieldType: string;

  constructor(fieldType: string) {
    this.id = uuidv4()
    this.fieldType = fieldType
  }
}

export class LayerNode extends BoardNodeBase {
  children: BoardNode[];

  constructor(children: BoardNode[] = []) {
    super('Layer')
    this.children = children;
  }

  append(node: BoardNode) {
    this.children.push(node)
  }
}

export class GroupNode extends BoardNodeBase {
  children: BoardNode[];

  constructor(children: BoardNode[] = []) {
    super('Group')
    this.children = children;
  }
}

interface LineState {
  color: string;
}

export const DefaultLineState: LineState = { color: 'black' }
export const SelectedLineState: LineState = { color: 'red' }

export class LineNode extends BoardNodeBase {
  points: number[];
  power: PowerUnitType;
  state: LineState;

  constructor(power: PowerUnitType, points: number[] = []) {
    super('Line')
    this.power = power;
    this.points = points;
    this.state = DefaultLineState;
  }

}

export class SwitchNode extends BoardNodeBase {
  x: number;
  y: number;
  state: PowerState

  constructor(x: number, y: number, state: PowerState) {
    super('Switch')
    this.x = x;
    this.y = y;
    this.state = state
  }

}

interface ComponentsDict {
  [key: string]: React.FC<NodeProps>
}

interface NodeProps {
  node: BoardNode;
  components?: ComponentsDict;
}

const defaultNodeComponents: ComponentsDict = {
  'Layer': ({ node, components }: NodeProps) => (
      <Layer id={node.id}>
        {node.children &&
          node.children.map(elem => (
            <NodeGenerator
              node={elem}
              components={components}
            />
          ))
        }
      </Layer>
    ),
  'Group': ({ node, components }: NodeProps) => (
      <Group id={node.id}>
        {node.children &&
          node.children.map(elem => (
            <NodeGenerator
              node={elem}
              components={components}
            />
          ))
        }
      </Group>
    ),
  'Line': ({ node }: NodeProps) => {
      const lineNode = node as LineNode
      return (
        <>
          <Line
            x={0}
            y={0}
            points={lineNode.points}
            tension={0.1}
            stroke={lineNode.state.color}
            strokeWidth={lineNode.power.strokeWidth}
          />
        </>
      )
    },
  'Switch': ({ node }: NodeProps) => {
    const switchNode = node as SwitchNode
    return (
      <>
        <Circle
          x={switchNode.x}
          y={switchNode.y}
          radius={7}
          fill={switchNode.state.color}
        />
      </>
    )
  }
}


export function NodeGenerator({ node, components }: NodeProps): React.ReactElement {
  const mergedComponents: ComponentsDict = {
    ...defaultNodeComponents,
    ...components,
  }

  return (
    <>
      {mergedComponents[node.fieldType]( {node: node, components: mergedComponents} )}
    </>
  )
}
