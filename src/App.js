import React from 'react';
// import { Main } from './pages'
import { Nav } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, User, Board, Item } from './pages'
const App = () => <>
    <Router>
        <Nav/>
        <Switch>
            <Route exact path ='/' component={Home}></Route>
            <Route path ='/user' component={User}></Route>
            <Route path ='/board' component={Board}></Route>
            <Route path ='/item' component={Item}></Route>
        </Switch>
    </Router>
</>


export default App;
