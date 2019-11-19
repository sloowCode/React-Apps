import React, { Component, } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Addcontacts from './components/Addcontacts';
import Home from './components/Home';
// import HomeProvider from './components/Home';


class App extends Component {
  render() {

    return (
      <BrowserRouter>

        <div className="App">
          < Navbar />


        </div>

          {/* <HomeProvider>
           <Route path='/Addcontacts' component={Addcontacts} />
          </HomeProvider>  */}
          <Route path='/Home' component={Home} />
          <Route path='/Addcontacts' component={Addcontacts} />

      </BrowserRouter>

    );
  }

}

export default App;
