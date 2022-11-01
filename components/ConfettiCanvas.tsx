import ReactCanvasConfetti from 'react-canvas-confetti'

const style: any = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 100000,
}

export default function ConfettiCanvas({ getInstance }: any) {
  return <ReactCanvasConfetti refConfetti={getInstance} style={style} />
}
