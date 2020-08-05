import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Item,
    More,
    Title,
    Divider,
} from '../styles';

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// ICONS
import {
  FaExternalLinkAlt
} from 'react-icons/fa';

// SERVICES
import { Link } from 'react-router-dom';

function Produtos() {
  return (
      <Container>
          <Navbar />

            <Body>
              <Link to="/painel/produtos/register">
                <Item>
                  <Title>
                    Cadastrar
                  </Title>

                  <Divider />
                  <More>
                    <FaExternalLinkAlt style={{marginRight: '5px'}}/>
                      Cadastrar produto
                  </More>
                </Item>
              </Link>

              <Item>
                <Title>
                  Pesquisar
                </Title>

                <Divider />
                <More>
                  <FaExternalLinkAlt style={{marginRight: '5px'}}/>
                    Pesquisar produto
                </More>
              </Item>
            </Body>

          <Footer />
      </Container>
  );
}

export default Produtos;