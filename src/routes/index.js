
import React from 'react';

// ROUTE
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route.js';

// COMPONENTES
import Homepage from '../views/Homepage';
import Login from '../views/Login';
import Assign from '../views/Assign';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/assinatura/:qnt" exact component={Assign}/>
            </Switch>
        </BrowserRouter>
    );
}