import { LayerNode, GroupNode, LineNode, Honsen, Shakosen } from './drawings'

export const mainLayer = new LayerNode()
// 本線全体
export const honsenGroup = new GroupNode([
  new LineNode(Honsen, [10, 140, 400, 140]),
  new LineNode(Honsen, [10, 170, 300, 170]),
  new LineNode(Honsen, [780, 140, 790, 140]),
  new LineNode(Honsen, [780, 170, 790, 170]),
])
mainLayer.append(honsenGroup)
// 1番線
export const firstLine = new LineNode(Honsen, [500, 100, 750, 100, 780, 140])
mainLayer.append(firstLine)
// 2番線
export const secondLine = new LineNode(Honsen, [460, 140, 780, 140])
mainLayer.append(secondLine)
// 3番線
export const thirdLine = new LineNode(Honsen, [370, 170, 780, 170])
mainLayer.append(thirdLine)
// 4番線
export const fourthLine = new LineNode(Honsen, [370, 210, 750, 210, 780, 170])
mainLayer.append(fourthLine)

// 留置1〜5番線
export const firstDententionLine = new LineNode(Shakosen, [200, 20, 320, 20, 400, 100])
export const secondDententionLine = new LineNode(Shakosen, [200, 40, 320, 40, 380, 100])
export const thirdDententionLine = new LineNode(Shakosen, [200, 60, 320, 60, 360, 100])
export const fourthDententionLine = new LineNode(Shakosen, [200, 80, 320, 80, 340, 100])
export const fifthDententionLine = new LineNode(Shakosen, [200, 100, 340, 100])
export const dententionToFirstLine = new LineNode(Shakosen, [400, 100, 500, 100])
export const dententionFirstToSecond = new LineNode(Shakosen, [380, 100, 400, 100])
export const dententionSecondToThird = new LineNode(Shakosen, [360, 100, 380, 100])
export const dententionThirdToFourth = new LineNode(Shakosen, [340, 100, 360, 100])
export const dententionLineGroup1 = new GroupNode([
  firstDententionLine,
  secondDententionLine,
  thirdDententionLine,
  fourthDententionLine,
  fifthDententionLine,
  dententionToFirstLine,
  dententionFirstToSecond,
  dententionSecondToThird,
  dententionThirdToFourth,
])
// mainLayer.append(dententionLineGroup1)
dententionLineGroup1.children.forEach(elem => mainLayer.append(elem))

// 引き上げ線
export const firstPocketTrack = new LineNode(Shakosen, [60, 210, 240, 210]);
export const secondPocketTrack = new LineNode(Shakosen, [60, 230, 220, 230]);
export const thirdPocketTrack = new LineNode(Shakosen, [60, 250, 200, 250]);
export const pocketTrackGroup = new GroupNode([
  firstPocketTrack,
  secondPocketTrack,
  thirdPocketTrack
])
// mainLayer.append(pocketTrackGroup)
pocketTrackGroup.children.forEach(elem => mainLayer.append(elem))

// 留置6, 7番線
export const sixthDententionLine = new LineNode(Shakosen, [460, 230, 750, 230])
export const seventhDententionLine = new LineNode(Shakosen, [610, 250, 750, 250])
export const sixthDententionToSeventhDentention = new LineNode(Shakosen, [460, 230, 480, 250, 610, 250])
export const dententionLineGroup2 = new GroupNode([
  sixthDententionLine,
  seventhDententionLine,
  sixthDententionToSeventhDentention
])
// mainLayer.append(dententionLineGroup2)
dententionLineGroup2.children.forEach(elem => mainLayer.append(elem))

// 洗浄線
export const firstWashLine = new LineNode(Shakosen, [330, 270, 630, 270])
export const secondWashLine = new LineNode(Shakosen, [330, 270, 350, 290, 650, 290])
export const thirdWashLine = new LineNode(Shakosen, [300, 270, 340, 310, 630, 310, 650, 290])
export const thirdToMainWashLine = new LineNode(Shakosen, [300, 270, 330, 270])
export const secondToMainWashLine = new LineNode(Shakosen, [650, 290, 670, 270])
export const firstToMainWashLine = new LineNode(Shakosen, [630, 270, 670, 270])
export const toYard = new LineNode(Shakosen, [670, 270, 700, 270, 750, 290])
export const washGroup = new GroupNode([
  firstWashLine,
  secondWashLine,
  thirdWashLine,
  thirdToMainWashLine,
  secondToMainWashLine,
  firstToMainWashLine,
  toYard
])
// mainLayer.append(washGroup)
washGroup.children.forEach(elem => mainLayer.append(elem))


// 渡り線
export const firstToSecondCross = new LineNode(Honsen, [460, 140, 500, 100])
export const secondToThirdCross = new LineNode(Honsen, [370, 170, 400, 140])
export const thirdToFourthCross1 = new LineNode(Shakosen, [300, 210, 340, 170]) // 両渡り1
export const thirdToFourthCross2 = new LineNode(Honsen, [300, 170, 340, 210]) // 両渡り2
export const firstPocketToSecondPocketCross = new LineNode(Shakosen, [220, 230, 240, 210])
export const secondPocketToThirdPocketCross = new LineNode(Shakosen, [200, 250, 220, 230])
export const fourthToDententionCross = new LineNode(Shakosen, [370, 210, 390, 230])
export const dentensionToYardCross = new LineNode(Shakosen, [610, 250, 630, 270])
export const crossGroup = new GroupNode([
  firstToSecondCross,
  secondToThirdCross,
  thirdToFourthCross1,
  thirdToFourthCross2,
  firstPocketToSecondPocketCross,
  secondPocketToThirdPocketCross,
  fourthToDententionCross,
  dentensionToYardCross
])
// mainLayer.append(crossGroup)
crossGroup.children.forEach(elem => mainLayer.append(elem))


// 補助線
export const outboundSubLine = new LineNode(Honsen, [400, 140, 460, 140])
export const inboundSubLine = new LineNode(Honsen, [340, 170, 370, 170])
export const inboundSubLineOnCross = new LineNode(Honsen, [300, 170, 340, 170])
export const fourthSubLine = new LineNode(Honsen, [340, 210, 370, 210])
export const fourthSubLineOnCross = new LineNode(Shakosen, [300, 210, 340, 210])
export const firstPocketSubLine = new LineNode(Shakosen, [240, 210, 300, 210])
export const secondPocketSubLine = new LineNode(Shakosen, [220, 230, 390, 230])
export const dententionSubLine = new LineNode(Shakosen, [390, 230, 460, 230])
export const pocketToWashLine = new LineNode(Shakosen, [200, 250, 240, 250, 260, 270, 300, 270])
export const subLineGroup = new GroupNode([
  outboundSubLine,
  inboundSubLine,
  inboundSubLineOnCross,
  fourthSubLine,
  fourthSubLineOnCross,
  firstPocketSubLine,
  secondPocketSubLine,
  dententionSubLine,
  pocketToWashLine
])
// mainLayer.append(subLineGroup)
subLineGroup.children.forEach(elem => mainLayer.append(elem))
