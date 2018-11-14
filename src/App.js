import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="ui container">
          <div className="ui grid">
            <div className="column">
              <div className="ui fixed inverted menu">
                <div className="header item"><NavLink exact to="/" activeStyle={{color:'red'}}>Home</NavLink></div>
                <div className="item"><NavLink to="/items" activeStyle={{color:'red'}}>Items</NavLink></div>
              </div>
            </div>
          </div>
            <div className="row">
               <br />
               <br />
               <br />
            </div>
        </div>
    );
  }
}

export default App;
