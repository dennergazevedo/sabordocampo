import React, { useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Banner,
    Title,
    Subtitle,
    ProductList
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Product from './Product';

// ASSETS
import nossosprodutos from '../../assets/img/nossosprodutos.png';

function Products() {

    useEffect(()=>{
        window.location.href="#index";
    }, [])

  return (
      <Container>
          <Navbar />

          <div id="index"/>

          <Body>
            <Banner src={nossosprodutos} alt="BANNER" />
            <Title>
                CONHEÇA NOSSOS PRODUTOS
            </Title>

            <Subtitle>
                Produtos da roça de alta qualidade, tudo pensando em você!
            </Subtitle>

            <ProductList>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </ProductList>
          </Body>

          <Footer />
      </Container>
  );
}

export default Products;