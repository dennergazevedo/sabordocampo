/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Menu,
    Divider,
} from './styles';

function Item(props) {

  return (
      <Container>
          <Menu>
            000{props.client.id}
          </Menu>
          <Divider />

          <Menu>
            {props.client.nome}
          </Menu>
          <Divider />

          <Menu>
              {props.client.phone}
          </Menu>
          <Divider />

          <Menu>
              {props.client.email}
          </Menu>
      </Container>
  );
}

export default Item;