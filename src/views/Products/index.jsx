import React, { useState, useEffect } from 'react';

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

// SERVICES
import api from '../../services/api';

function Products() {

    const [products, setProducts] = useState(new Map());

    async function loadProducts(){
        const response = await api.get('search_all_product')
        setProducts(response.data);
    }

    useEffect(()=>{
        window.location.href="#index";
        loadProducts();
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
                {[...products.keys()].map(id => (
                    <>
                        {
                            products[id].estoque !== 0 ?
                                <Product key={id} produto={products[id]} />
                            :
                            null
                        }
                    </>
                ))}
            </ProductList>
          </Body>

          <Footer />
      </Container>
  );
}

export default Products;