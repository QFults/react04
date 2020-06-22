import { createContext } from 'react'

const CountContext = createContext({
  count: 0,
  handleIncrement: () => { },
  handleDecrement: () => { }
})

export default CountContext
