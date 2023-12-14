import React, { useState } from 'react'
import './AnnoyingButton.scss';

export default function AnnoyingButton() {

  let [marginLeft, setMarginLeft] = useState(25);
  let [marginTop, setMarginTop] = useState(25);

    const moveButton = (event) => {
      calculateNextMargin();
    }

    const calculateNextMargin = () => {
      setMarginLeft(nextRandom());
      setMarginTop(nextRandom());
    }

    const nextRandom = () => {
      return Math.random() * (50 - 1);
    }

  return (
    <button className='annoying-button' onMouseEnter={moveButton} onTouchStart={moveButton}
      style={{marginTop: marginTop + '%', marginLeft: marginLeft  + '%'}}>Click me... if you dare</button>
  )
}
