import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Foto,
    Subtitle,
    Title,
} from './productStyle.js';

// ASSETS
import foto from '../../assets/products/01.png';

function Product() {
  return (
        <Container>
            <Foto src={foto} alt="FOTO"/>
            <Subtitle>
                PENTE (30 OVOS)
            </Subtitle>
            <Title>
                OVOS CAIPIRA
            </Title>
        </Container>
    );
}

export default Product;