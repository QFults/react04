import React from 'react'
import CountContext from '../../utils/CountContext'
import { Button } from 'reactstrap'

const Increment = () => {
  return (
    <CountContext.Consumer>
      {
        ({ handleIncrement }) => (
          <Button color="primary" onClick={handleIncrement}>+</Button>
        )
      }
    </CountContext.Consumer>
  )
}

export default Increment
