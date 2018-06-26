import React, { Component } from 'react';
import Loadable from 'react-loadable';
import NavWrapper from './components/NavWrapper'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as Page from './pages/index'
import { Container, Row } from 'mdbreact'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './css/App.css';


const App = () => (
    <div>
        <NavWrapper />
        <BrowserRouter>
            <Container>
                <Switch>

                    <Route component={Page.Login} path="/login" />
                    <Route component={Page.Register} path="/register" />
                    <Route component={Page.Home} path="/" />

                </Switch>
            </Container>
        </BrowserRouter>
    </div>
)

export default App
