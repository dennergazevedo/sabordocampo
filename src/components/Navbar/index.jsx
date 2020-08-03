/* eslint-disable no-restricted-globals */
import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Logomarca,
    Menu,
    ItemIcon,
    ItemText,
    DividerItem
} from './styles';

// ASSETS
import logo from '../../assets/img/logomarca.png'

// ICONS
import {
    FaShoppingCart,
    FaUser,
} from 'react-icons/fa';

// COMPONENTS
import MenuMobile from './MenuMobile';

function Navbar() {
  return (
    <Container>
        <Logomarca src={logo} alt="LOGOMARCA"/>
        {
            screen.width > 970 && window.innerWidth > 970 ?
            <Menu>
                <ItemText>
                    Clube de Assinatura
                </ItemText>
                <ItemText>
                    Produtos
                </ItemText>
                <ItemText>
                    Quem somos
                </ItemText>
                <ItemText>
                    Contato
                </ItemText>
                <ItemIcon>
                    <FaUser/>
                </ItemIcon>
                <DividerItem/>
                <ItemIcon>
                    <FaShoppingCart/>
                </ItemIcon>
            </Menu>
            :
            <MenuMobile/>
        }
    </Container>
  );
}

export default Navbar;