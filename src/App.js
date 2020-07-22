import React from 'react';
import Main from './components/Main'
import InfoCard from './components/InfoCard'
import Cart from './components/Cart'
import { 
  Switch, 
  BrowserRouter as  Router, 
  Route,
} from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'

function App() {

  return (
    <GlobalProvider>
    <Router>
      <div>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/info/:id">
            <InfoCard />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
    </GlobalProvider>
  );
}

export default App;
