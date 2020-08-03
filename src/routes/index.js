
import React from 'react';

// ROUTE
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route.js';

// COMPONENTES
import Homepage from '../views/Homepage';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
            </Switch>
        </BrowserRouter>
    );
}