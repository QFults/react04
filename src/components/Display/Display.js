import React from 'react'
import CountContext from '../../utils/CountContext'

const Display = () => {
  return(
    <CountContext.Consumer>
      {
        ({ count }) => (
          <h1>Count: {count}</h1>
          )
      }
    </CountContext.Consumer>
  )
}

export default Display
