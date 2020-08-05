import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Foto,
    Title,
    Subtitle,
    Preco,
    Valor,
    Unid,
    Buy
} from './productStyles.js';

// ASSETS
import foto from '../../assets/products/01.png';

function Product() {
  return (
      <Container>
          <Foto src={foto} alt="FOTO" />
          <Title>OVOS CAIPIRA</Title>
          <Subtitle>PENTE (30 OVOS)</Subtitle>
          <Preco>
            <Valor>
                R$ 12,00
            </Valor>
            <Unid>
                (unid.)
            </Unid>
          </Preco>
          <Buy>
              COMPRAR
          </Buy>
      </Container>
  );
}

export default Product;