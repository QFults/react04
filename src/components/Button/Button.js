import React from 'react'
import CountContext from '../../utils/CountContext'

const Button = () => {
  return (
    <CountContext.Consumer>
      {
        ({ handleBtnClick }) => (
          <button onClick={handleBtnClick}>Click Me</button>
        )
      }
    </CountContext.Consumer>
  )
}

export default Button
