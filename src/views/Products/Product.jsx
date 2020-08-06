/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

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

// SERVICES
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Product(props) {

    const [produto] = useState(props.produto);
    const [imagem, setImagem] = useState(null);

    async function loadImagem(){
        const response = await api.get(`/search_img/${produto.file_id}`)
        setImagem(response.data.url);
    }

    useEffect(()=>{
        loadImagem()
    }, [])

  return (
      <Container>
          <Foto src={imagem} alt="FOTO" />
          <Title>{produto.titulo}</Title>
          <Subtitle>{produto.subtitulo}</Subtitle>
          <Preco>
            <Valor>
                R$ {produto.valor.toFixed(2)}
            </Valor>
            <Unid>
                (unid.)
            </Unid>
          </Preco>
          <Link to={`/comprar/${produto.id}`}>
            <Buy>
                COMPRAR
            </Buy>
          </Link>
      </Container>
  );
}

export default Product;