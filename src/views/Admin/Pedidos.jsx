import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Pedidos() {
  return (
      <Container>
          <Navbar />

            <Body>
              Teste
            </Body>

          <Footer />
      </Container>
  );
}

export default Pedidos;