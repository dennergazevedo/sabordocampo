import React, { useState } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Item,
    Title,
    Divider,
    More,
    Exit,
    Help,
    Admin
} from './styles';

// ICONS
import {
    FaExternalLinkAlt
} from 'react-icons/fa';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// STORE
import { signOut } from '../../store/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

// SERVICES
import { Link } from 'react-router-dom';

function Profile() {

    const dispatch = useDispatch();
    const profileRedux = useSelector(state => state.user.user);

    const [profile] = useState(profileRedux);

    const handleSignOut = () => {
        dispatch(signOut());
    }

  return (
      <Container>
          <Navbar />

          <Body>
            <Link to="/perfil/detalhes">
                <Item>
                    <Title>
                        DETALHES DA CONTA
                    </Title>
                    <Divider />
                    <More>
                        <FaExternalLinkAlt style={{marginRight: '5px'}}/>
                        Saiba mais...
                    </More>
                </Item>
            </Link>

            <Item>
                <Title>
                    PEDIDOS
                </Title>
                <Divider />
                <More>
                    <FaExternalLinkAlt style={{marginRight: '5px'}}/>
                    Saiba mais...
                </More>
            </Item>

            <Item>
                <Title>
                    ASSINATURA
                </Title>
                <Divider />
                <More>
                    <FaExternalLinkAlt style={{marginRight: '5px'}}/>
                    Saiba mais...
                </More>
            </Item>
          </Body>
          
          {
              profile.provider === 143 || profile.provider === '143'?
              <Link to="/painel">
                <Admin>
                    PAINEL ADMINISTRATIVO
                </Admin>
              </Link>
              :
              <Help>
                  PRECISO DE AJUDA
              </Help>
          }

          <Exit onClick={handleSignOut}>
              SAIR
          </Exit>

          <Footer />
      </Container>
  );
}

export default Profile;