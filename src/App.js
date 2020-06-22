import React, { Component } from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import CountContext from './utils/CountContext'

class App extends Component {

  state = {
    count: 0,
    handleBtnClick: () => {
      this.setState({ count: this.state.count + 1 })
    }
  }

  render() {
    return (
      <CountContext.Provider value={this.state}>
        <Router>
          <div>
            <nav>
              <Link to="/">Page One</Link>
              <Link to="/pagetwo">Page Two</Link>
            </nav>
            <Switch>

              <Route exact path="/">
                <PageOne />
              </Route>
              <Route path="/pagetwo">
                <PageTwo />
              </Route>

            </Switch>
          </div>
        </Router>
      </CountContext.Provider>
    )
  }
}

export default App
