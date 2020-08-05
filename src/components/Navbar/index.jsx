/* eslint-disable no-restricted-globals */
import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Logomarca,
    Menu,
    ItemIcon,
    ItemText,
} from './styles';

// ASSETS
import logo from '../../assets/img/logomarca.png'

// ICONS
import {
    FaUser,
} from 'react-icons/fa';

// COMPONENTS
import MenuMobile from './MenuMobile';

// SERVICES
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Container>
        <Logomarca src={logo} alt="LOGOMARCA"/>
        {
            screen.width > 970 && window.innerWidth > 970 ?
            <Menu>
                <Link to="/">
                    <ItemText>
                        Clube de Assinatura
                    </ItemText>
                </Link>

                <Link to="/produtos">
                    <ItemText>
                        Produtos
                    </ItemText>
                </Link>
                <ItemText>
                    Quem somos
                </ItemText>
                <ItemText>
                    Contato
                </ItemText>

                <Link to="/login">
                    <ItemIcon>
                        <FaUser/>
                    </ItemIcon>
                </Link>
                
            </Menu>
            :
            <MenuMobile/>
        }
    </Container>
  );
}

export default Navbar;