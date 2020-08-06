import React, { useState } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Editar,
    Text,
    Divider
} from './item.js';

// ICONS
import {
    FaEdit
} from 'react-icons/fa';

// SERVICES
import { Link } from 'react-router-dom';

function Item(props) {

    const [product] = useState(props.produto);

  return (
    <Container>
        <Link to={`/painel/produtos/editar/${product.id}`}>
            <Editar>
                <FaEdit/>
            </Editar>
        </Link>

        <Divider />

        <Text>
            {product.titulo}
        </Text>

        <Divider />

        <Text>
            R$ {product.valor.toFixed(2)}
        </Text>

        <Divider />

        <Text>
            {product.estoque} (unid.)
        </Text>
    </Container>
  );
}

export default Item;