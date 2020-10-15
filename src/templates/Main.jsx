import React from 'react';
import Home from './Home';
import Item from './Item';
import User from './User';
import Board from './Board';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = () => <>
    <BrowserRouter>
        <Switch>
            <Route>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/item" component={Item}/>
                <Route path="/board" component={Board}/>
            </Route>
        </Switch>
    </BrowserRouter>
</>

export default Main