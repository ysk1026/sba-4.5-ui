import React from 'react';
// import { BoardMenu, BoardRead, BoardRegister, BoardUpdate, BoardRemove } from '../components/board'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Nav } from '../components'
import './table.style.css'

const Board = () => <>
    {/* <div>
        <ul>
            <li>
                <NavLink to ={"/"}> Home </NavLink>
            </li>
            <li>
                <NavLink to ={"/user"}> User </NavLink>
            </li>
            <li>
                <NavLink to ={"/item"}> Item </NavLink>
            </li>
        </ul>
    </div> */}
    <h1>Board</h1>
    {/* <Router>
        <BoardMenu/>
        <Switch>
            <Route path ="/boardregister" component={BoardRegister}></Route>
            <Route path ="/boardread" component={BoardRead}></Route>
            <Route path ="/boardupdate" component={BoardUpdate}></Route>
            <Route path ="/boardremove" component={BoardRemove}></Route>
        </Switch>
    </Router> */}
    {/* <Nav/> */}
</>

export default Board