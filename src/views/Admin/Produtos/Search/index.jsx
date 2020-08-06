/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container, 
    Body,
    Title,
    SearchBody,
    Label,
    Input,
    Button,
    ListProducts
} from './search.js';

// COMPONENTS
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Item from './Item.jsx';

// ICONS
import {
    FaSearch
} from 'react-icons/fa';

// SERVICES
import api from '../../../../services/api';

function Search() {

    const [products, setProducts] = useState(new Map());
    const [titulo, setTitulo] = useState('');

    async function loadProducts(){
        setProducts(new Map());
        const response = await api.get('search_all_product');
        setProducts(response.data);
    }

    async function searchProducts(){
        event.preventDefault();
        if(titulo !== ''){
            setProducts(new Map());
            const response = await api.get(`search_product_title/${titulo}`);
            setProducts(response.data);
        }else{
            loadProducts()
        }
    }

    useEffect(()=>{
        loadProducts();
    }, [])

  return (
    <Container>
        <Navbar />

        <Body>
            <Title>
                <FaSearch style={{marginRight:'5px'}}/>
                Pesquisar Produtos
            </Title>

            <SearchBody onSubmit={searchProducts}>
                <Label>
                    Parte do nome:
                </Label>
                <Input value={titulo} onChange={e => setTitulo(e.target.value)} type="text" placeholder="Exemplo: Suíno"/>
                <Button>
                    <FaSearch type="submit"/>
                </Button>
            </SearchBody>

            <ListProducts>
                {[...products.keys()].map(id => (
                    <Item key={id} produto={products[id]} />
                ))}
            </ListProducts>
        </Body>

        <Footer />
    </Container>
    );
}

export default Search;