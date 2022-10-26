import { LayerNode, SwitchNode, OffState, HonsenState, ShakosenState } from './drawings'

// 電源スイッチ
export const switchLayer = new LayerNode()
export const firstTrack = new SwitchNode(620, 100, OffState)
switchLayer.append(firstTrack)
export const secondTrack = new SwitchNode(620, 140, HonsenState)
switchLayer.append(secondTrack)
export const thirdTrack = new SwitchNode(620, 170, HonsenState)
switchLayer.append(thirdTrack)
export const fourthTrack = new SwitchNode(620, 210, OffState)
switchLayer.append(fourthTrack)
export const dententions = new SwitchNode(435, 100, OffState)
switchLayer.append(dententions)
export const cross = new SwitchNode(435, 140, HonsenState)
switchLayer.append(cross)
// 引き上げ線
export const firstPocket = new SwitchNode(100, 210, OffState)
switchLayer.append(firstPocket)
export const secondPocket = new SwitchNode(100, 230, OffState)
switchLayer.append(secondPocket)
export const thirdPocket = new SwitchNode(100, 250, OffState)
switchLayer.append(thirdPocket)
// 真ん中らへんのやつ
export const honsenToPocket = new SwitchNode(270, 210, OffState)
switchLayer.append(honsenToPocket)
export const secondPocketSub = new SwitchNode(270, 230, OffState)
switchLayer.append(secondPocketSub)
export const washToPocket = new SwitchNode(270, 270, OffState)
switchLayer.append(washToPocket)
// 洗浄線
export const firstWash = new SwitchNode(460, 270, OffState)
switchLayer.append(firstWash)
export const secondWash = new SwitchNode(460, 290, OffState)
switchLayer.append(secondWash)
export const thirdWash = new SwitchNode(460, 310, OffState)
switchLayer.append(thirdWash)
// 留置67番線
export const dententions67 = new SwitchNode(440, 230, OffState)
switchLayer.append(dententions67)
// ヤード
export const yard = new SwitchNode(700, 270, OffState)
switchLayer.append(yard)


