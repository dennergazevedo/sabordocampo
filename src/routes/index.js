
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
import Profile from '../views/Profile';
import Admin from '../views/Admin';
import Produtos from '../views/Admin/Produtos';
import Pedidos from '../views/Admin/Pedidos';
import Assinaturas from '../views/Admin/Assinaturas';
import Clientes from '../views/Admin/Clientes';
import CadastrarProduto from '../views/Admin/Produtos/Register.jsx';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/login" exact component={Login} Login/>
                <Route path="/assinatura/:qnt" exact component={Assign}/>
                <Route path="/comprar/:id" exact component={Buy} />
                <Route path="/produtos" exact component={Products} />
                <Route path="/perfil" exact component={Profile} isPrivate/>
                <Route path="/painel" exact component={Admin} Admin/>
                <Route path="/painel/produtos" exact component={Produtos} Admin/>
                <Route path="/painel/produtos/register" exact component={CadastrarProduto} Admin/>
                <Route path="/painel/pedidos" exact component={Pedidos} Admin/>
                <Route path="/painel/assinaturas" exact component={Assinaturas} Admin/>
                <Route path="/painel/clientes" exact component={Clientes} Admin/>
            </Switch>
        </BrowserRouter>
    );
}