import * as React from "react"
import { Circle, Group, Layer, Line } from 'react-konva'
import { v4 as uuidv4 } from 'uuid'

export interface PowerUnitType {
  label: string;
  strokeWidth: number;
}

export const Honsen: PowerUnitType = {
  label: '本線',
  strokeWidth: 10,
}

export const Shakosen: PowerUnitType = {
  label: '車庫線',
  strokeWidth: 5,
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
  render(): React.ReactElement
}

abstract class BoardNodeBase implements BoardNode {
  id: string;

  constructor() {
    this.id = uuidv4()
  }

  abstract render(): React.ReactElement
}

export class LayerNode extends BoardNodeBase {
  children: BoardNode[];

  constructor(children: BoardNode[] = []) {
    super()
    this.children = children;
  }

  render(): React.ReactElement {
    return (
      <Layer id={this.id}>
        {this.children.map(elem => elem.render())}
      </Layer>
    )
  }

  append(node: BoardNode) {
    this.children.push(node)
  }
}

export class GroupNode extends BoardNodeBase {
  children: BoardNode[];

  constructor(children: BoardNode[] = []) {
    super()
    this.children = children;
  }

  render(): React.ReactElement {
    return (
      <Group id={this.id}>
        {
          this.children.map(elem => elem.render())
        }
      </Group>
    )
  }
}

export class LineNode extends BoardNodeBase {
  points: number[];
  power: PowerUnitType;

  constructor(power: PowerUnitType, points: number[] = []) {
    super()
    this.power = power;
    this.points = points;
  }

  render(): React.ReactElement {
    return (
        <>
          <Line
            x={0}
            y={0}
            points={this.points}
            tension={0.1}
            stroke="black"
            strokeWidth={this.power.strokeWidth}
          />
        </>
      )
  }
}

export class SwitchNode extends BoardNodeBase {
  x: number;
  y: number;
  state: PowerState

  constructor(x: number, y: number, state: PowerState) {
    super()
    this.x = x;
    this.y = y;
    this.state = state
  }

  render(): React.ReactElement {
    return (
      <>
        <Circle
          x={this.x}
          y={this.y}
          radius={7}
          fill={this.state.color}
        />
      </>
    )
  }
}


