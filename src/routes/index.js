
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
import Clientes from '../views/Admin/Clientes';
import Checkout from '../views/Checkout';
import CadastrarProduto from '../views/Admin/Produtos/Register';
import PesquisarProduto from '../views/Admin/Produtos/Search';
import EditarProduto from '../views/Admin/Produtos/Editar';
import Detalhes from '../views/Profile/Details';
import PedidosUser from '../views/Profile/Orders';
import AssinaturasUser from '../views/Profile/Assign';
import Termos from '../views/Termos';
import Privacidade from '../views/Privacidade';
import Trocas from '../views/Trocas';
import Contato from '../views/Contato';
import Payment from '../views/Payment';
import ForgotPass from '../views/ForgotPass';
import ResetPass from '../views/ResetPass';
import About from '../views/About';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/termos-de-uso" exact component={Termos} />
                <Route path="/seguranca-e-privacidade" exact component={Privacidade} />
                <Route path="/trocas-e-cancelamento" exact component={Trocas} />
                <Route path="/contato" exact component={Contato} />
                <Route path="/login" exact component={Login} Login/>
                <Route path="/assinatura/:id" exact component={Assign}/>
                <Route path="/comprar/:id" exact component={Buy} />
                <Route path="/produtos" exact component={Products} />
                <Route path="/perfil" exact component={Profile} isPrivate/>
                <Route path="/perfil/detalhes" exact component={Detalhes} isPrivate/>
                <Route path="/perfil/pedidos" exact component={PedidosUser} isPrivate/>
                <Route path="/perfil/assinaturas" exact component={AssinaturasUser} isPrivate/>
                <Route path="/painel" exact component={Admin} Admin/>
                <Route path="/painel/produtos" exact component={Produtos} Admin/>
                <Route path="/painel/produtos/cadastro" exact component={CadastrarProduto} Admin/>
                <Route path="/painel/produtos/pesquisa" exact component={PesquisarProduto} Admin/>
                <Route path="/painel/produtos/editar/:id" exact component={EditarProduto} Admin/>
                <Route path="/painel/pedidos" exact component={Pedidos} Admin/>
                <Route path="/painel/clientes" exact component={Clientes} Admin/>
                <Route path="/finalizar-compra/:id" exact component={Checkout} />
                <Route path="/pagamento-sucesso" exact component={Payment} />
                <Route path="/esqueci-minha-senha" exact component={ForgotPass} />
                <Route path="/reset-password/:email/:token" exact component={ResetPass} />
                <Route path="/quem-somos" exact component={About} />
            </Switch>
        </BrowserRouter>
    );
}