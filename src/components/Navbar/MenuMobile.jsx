import React, { useState } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Item,
    MenuOpen,
    MenuToggle,
    Exit,
    Logomarca,
    Divider,
    ItemMenu,
    Superior,
    Inferior,
    SignIn
} from './stylesMobile';

// ICONS
import {
    FaBars,
    FaShoppingCart,
    FaAngleRight
} from 'react-icons/fa';

// ASSETS
import logo from '../../assets/img/logomarca.png';

function MenuMobile() {

    const [menu, setMenu] = useState(false);

    const toggle = () => setMenu(!menu);

  return (
      <Container>
          <Item>
            <FaBars onClick={toggle}/>
          </Item>
          {
              menu?
                <MenuToggle>
                    <MenuOpen initial={{opacity: 0}} animate={{scale: 1.1, opacity: 1}} transition={{ duration: 0.5 }}>
                        <Superior>
                            <Logomarca src={logo} alt="LOGOMARCA" style={{marginTop: '50px'}}/>
                            <Divider />
                            <ItemMenu>
                                <FaAngleRight style={{marginRight: '10px'}}/>
                                Clube de Assinatura
                            </ItemMenu>
                            <ItemMenu>
                                <FaAngleRight style={{marginRight: '10px'}}/>
                                Produtos
                            </ItemMenu>
                            <ItemMenu>
                                <FaAngleRight style={{marginRight: '10px'}}/>
                                Quem somos
                            </ItemMenu>
                            <ItemMenu>
                                <FaAngleRight style={{marginRight: '10px'}}/>
                                Contato
                            </ItemMenu>
                        </Superior>
                        <Inferior>
                            <SignIn>
                                Entrar
                            </SignIn>
                        </Inferior>
                    </MenuOpen>
                    <Exit initial={{opacity: 0}} animate={{opacity: 1}} onClick={toggle}/>
                </MenuToggle>
              :
                null
          }
          <Logomarca src={logo} alt="LOGOMARCA"/>
          <Item>
            <FaShoppingCart />
          </Item>
      </Container>
  );
}

export default MenuMobile;