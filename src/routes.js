import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Repos from './pages/Repos'

const Routes = () => (
   <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/repos/:login" component={Repos} />
    </Switch>
   </BrowserRouter> 
)

export default Routes