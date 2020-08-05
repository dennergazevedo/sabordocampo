
import React from 'react';

// ROUTE
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route.js';

// COMPONENTES
import Homepage from '../views/Homepage';
import Login from '../views/Login';
import Assign from '../views/Assign';
import Buy from '../views/Buy';
import Products from '../views/Products';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/assinatura/:qnt" exact component={Assign}/>
                <Route path="/comprar/:id" exact component={Buy} />
                <Route path="/produtos" exact component={Products} />
            </Switch>
        </BrowserRouter>
    );
}