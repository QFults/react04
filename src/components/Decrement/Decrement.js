import React from 'react'
import CountContext from '../../utils/CountContext'
import { Button } from 'reactstrap'

const Decrement = () => {
  return (
    <CountContext.Consumer>
      {
        ({ handleDecrement }) => (
          <Button color="danger" onClick={handleDecrement}>-</Button>
        )
      }
    </CountContext.Consumer>
  )
}

export default Decrement
