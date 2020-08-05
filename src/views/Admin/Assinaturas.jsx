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

function Assinaturas() {
  return (
      <Container>
          <Navbar />

            <Body>
              TESTE
            </Body>

          <Footer />
      </Container>
  );
}

export default Assinaturas;