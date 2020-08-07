import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Item,
    More,
    Title,
    Divider,
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// ICONS
import {
  FaExternalLinkAlt
} from 'react-icons/fa';

// SERVICES
import { Link } from 'react-router-dom';

function Admin() {
  return (
      <Container>
          <Navbar />

            <Body>
              <Link to="/painel/produtos">
                <Item>
                  <Title>
                    PRODUTOS
                  </Title>

                  <Divider />
                  <More>
                    <FaExternalLinkAlt style={{marginRight: '5px'}}/>
                      Saiba mais...
                  </More>
                </Item>
              </Link>

              <Link to="/painel/pedidos">
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
              </Link>

              <Link to="/painel/clientes">
                <Item>
                  <Title>
                    CLIENTES
                  </Title>

                  <Divider />
                  <More>
                    <FaExternalLinkAlt style={{marginRight: '5px'}}/>
                      Saiba mais...
                  </More>
                </Item>
              </Link>
            </Body>

          <Footer />
      </Container>
  );
}

export default Admin;