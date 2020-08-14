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
    FaUser,
    FaAngleRight
} from 'react-icons/fa';

// ASSETS
import logo from '../../assets/img/logomarca.png';

// SERVICES
import { Link } from 'react-router-dom';

// STORE
import { store } from '../../store';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

function MenuMobile() {

    const { signed } = store.getState().auth;
    const dispatch = useDispatch();

    const [menu, setMenu] = useState(false);

    const toggle = () => setMenu(!menu);

    const handleSignOut = () => {
        dispatch(signOut());
    }

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
                            
                            <Link to="/">
                                <ItemMenu>
                                    <FaAngleRight style={{marginRight: '10px'}}/>
                                    Clube de Assinatura
                                </ItemMenu>
                            </Link>

                            <Link to="/produtos">
                                <ItemMenu>
                                    <FaAngleRight style={{marginRight: '10px'}}/>
                                    Produtos
                                </ItemMenu>
                            </Link>
                            
                            <Link to="/quem-somos">
                                <ItemMenu>
                                    <FaAngleRight style={{marginRight: '10px'}}/>
                                    Quem somos
                                </ItemMenu>
                            </Link>

                            <Link to="/contato">
                                <ItemMenu>
                                    <FaAngleRight style={{marginRight: '10px'}}/>
                                    Contato
                                </ItemMenu>
                            </Link>
                        </Superior>
                        <Inferior>
                            {
                                signed ?
                                <SignIn onClick={handleSignOut}>
                                    Sair
                                </SignIn> 
                                :
                                <Link to="/login">
                                    <SignIn>
                                        Entrar
                                    </SignIn>
                                </Link>
                            }
                        </Inferior>
                    </MenuOpen>
                    <Exit initial={{opacity: 0}} animate={{opacity: 1}} onClick={toggle}/>
                </MenuToggle>
              :
                null
          }
          <Logomarca src={logo} alt="LOGOMARCA"/>
          <Link to="/perfil">
            <Item>
                <FaUser />
            </Item>
          </Link>
      </Container>
  );
}

export default MenuMobile;