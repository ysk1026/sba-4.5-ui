import React, {useState} from 'react';
// import { Main } from './pages'
import { Nav } from './components'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {UserRegister, UserLogin, UserDetail, UserModify, UserWithdrawal, UserList} from './container/user'
import { Home, User, Board, Item } from './templates'
import {Provider} from'react-redux'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import ReduxThunk from 'redux-thunk'
export default function App() { 
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return(<>
    <Router>
        <Nav isAuth = {loggedIn}/>
        <hr/>
        <Switch>
        <Provider store = {createStore(rootReducer, applyMiddleware(ReduxThunk))}>
            <Route path ='/home' component={Home}></Route>
            <Redirect exact from = {'/'} to = {'/home'}/>
            <Route path ='/user' component={User}></Route>
            <Route path ='/signup-form' component={UserRegister}></Route>
            <Route path ='/signin-form' component={UserLogin}></Route>
            <Route path ='/mypage' component={UserDetail}></Route>
            <Route path ='/modifying-user-info' component={UserModify}></Route>
            <Route path='/membership-withdrawal' component={UserWithdrawal}/>
            <Route path='/userlist' component={UserList}></Route>
            <Route path='/item' component={Item}></Route>
            <Route path='/board' component={Board}></Route>
        </Provider>
    </Switch>
        
    </Router>

</>)}