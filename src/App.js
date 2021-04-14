
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDataLayerValue } from './Datalayer';
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51Ig5wTSApxnflnsK34WnHwhcBTZJsuZIa3CxWXHBnRb8h0s0BK4FCb7DZoFDBLugdRxpQtt1hy0VcvjEsQZOVQuU00rPZRfblm');

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
        <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />

            </Elements>
            

          </Route>
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
