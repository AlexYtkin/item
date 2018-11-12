import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="ui container">
          <div className="ui grid">
            <div className="column">
              <div className="ui fixed inverted menu">
                <div className="header item"><NavLink to="/" activeClassName="active">Home</NavLink></div>
                <div className="item"><NavLink to="/items" activeClassName="active">Items</NavLink></div>
              </div>
            </div>
          </div>
            <div className="ui grid">
               <br />
               <br />
               <br />
            </div>
        </div>
    );
  }
}

export default App;
