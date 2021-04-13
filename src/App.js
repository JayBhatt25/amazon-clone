
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDataLayerValue } from './Datalayer';

function App() {
  const [{user}, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    auth .onAuthStateChanged(authUser => {
      
      if(authUser){
        //if a user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // if the user is logged out
        dispatch({
          type:"SET_USER",
          user: null,
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />

          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />

          </Route>

          <Route path='/'>
            <Header />
            <Home />

          </Route>

          
        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
