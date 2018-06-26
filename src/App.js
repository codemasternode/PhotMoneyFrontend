import React, { Component } from 'react';
import Loadable from 'react-loadable';
import NavWrapper from './components/NavWrapper'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './css/App.css';


const App = () => (
    <div>
        <NavWrapper />
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/login"/>
                <Route component={Register} path="/register"/>
            </Switch>
        </BrowserRouter>
    </div>
)

export default App
