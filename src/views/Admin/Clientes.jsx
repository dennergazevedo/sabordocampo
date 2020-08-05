import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Clientes() {
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

export default Clientes;