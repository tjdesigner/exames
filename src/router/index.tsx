import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

import Home from '../pages/Home'

const Setting = () => (
    <div>
        <Link to="/">exames</Link>
        <h1>Hello from Setting </h1>
    </div>
)

const Routes = () => (
    <BrowserRouter basename="exames">
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Setting} exact path="/setting" />

            <Redirect to="/exames" />
        </Switch>
    </BrowserRouter>
)

export default Routes
