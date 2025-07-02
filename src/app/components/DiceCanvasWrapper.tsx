// app/components/DiceCanvasWrapper.tsx
'use client'

import dynamic from 'next/dynamic'

const DiceCanvas = dynamic(() => import('./DiceCanvas'), {
  ssr: false,
})

export default function DiceCanvasWrapper() {
  return <DiceCanvas />
}
