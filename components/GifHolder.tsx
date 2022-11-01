import React from 'react'
import Image from 'next/image'
import { randomGif } from '../utils/randomGif'

const GifHolder = () => {
  const [num, setNum] = React.useState(() => 1)
  let randImg = `/chicken/0${num}.webp`
  return (
    <>
      <div
        onClick={() => {
          setNum(randomGif())
        }}
        style={{ width: 'max-content', margin: 'auto' }}
      >
        <Image src={randImg} alt="Moving Image" width={300} height={300} />
      </div>
    </>
  )
}

export default GifHolder
