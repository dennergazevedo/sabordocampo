import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    ImagemProduct,
} from './styles';

// ASSETS
import basket from '../../assets/img/basket.png';

function Product() {
  return (
      <Container>
        <ImagemProduct src={basket} alt="ITEM"/>
      </Container>
  );
}

export default Product;