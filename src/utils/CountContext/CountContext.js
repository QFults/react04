import { createContext } from 'react'

const CountContext = createContext({
  count: 0,
  handleBtnClick: () => { }
})

export default CountContext
