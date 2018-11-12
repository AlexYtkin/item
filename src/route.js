import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Items from "./components/Items";
import ItemShow from "./components/ItemShow";

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route path="/" component={App}/>
                    <Route path="/items" component={Items}/>
                    <Router path='/items/:id' component={ItemShow}/>
                </div>
            </BrowserRouter>
        )
    }
}
export default Router;

