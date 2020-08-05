/* eslint-disable no-restricted-globals */
import React from 'react';

// STYLED COMPONENTS
import {
  Container,
  ImagemProduct,
  Divider,
  DividerTransp,
  Text,
  Title,
  Button1,
  Button2,
  Subtitle
} from './styles';

// ASSETS
import basket from '../../assets/img/basket.png';

// SERVICES
import { Link } from 'react-router-dom';

function Product() {
  return (
    <Container>
      <ImagemProduct src={basket} alt="ITEM" />
      {
        screen.width > 680 && window.innerWidth > 680 ?
          <Divider />
          :
          null
      }

      <Text>
        <Title>
          12 Ovos
            <Subtitle>(Dúzia)</Subtitle>
        </Title>
          Ovos de galinhas livres de gaiola com acesso ao campo.
          
          <Link to="/assinatura/1">
            <Button1>
              Assinar Agora
            </Button1>
          </Link>
          
          <Link to="/comprar/1">
            <Button2>
              Comprar Agora
            </Button2>
          </Link>
          
      </Text>

      {
        screen.width > 680 && window.innerWidth > 680 ?
          <Divider />
          :
          null
      }

      <Text>
        <Title>
          30 Ovos
            <Subtitle>(Pente)</Subtitle>
        </Title>
          Ovos de galinhas livres de gaiola com acesso ao campo.
          
          <Link to="/assinatura/2">
            <Button1>
              Assinar Agora
            </Button1>
          </Link>

          <Link to="/comprar/2">
            <Button2>
              Comprar Agora
            </Button2>
          </Link>
      </Text>

      {
        screen.width > 680 && window.innerWidth > 680 ?
          <Divider />
          :
          null
      }

      <Text>
        <Title>
          360 Ovos
            <Subtitle>(Caixa)</Subtitle>
        </Title>
          Ovos de galinhas livres de gaiola com acesso ao campo.
          
          <Link to="/assinatura/3">
            <Button1>
              Assinar Agora
            </Button1>
          </Link>

          <Link to="/comprar/3">
            <Button2>
              Comprar Agora
            </Button2>
          </Link>
      </Text>

      {
        screen.width > 680 && window.innerWidth > 680 ?
          <DividerTransp />
          :
          null
      }

    </Container>
  );
}

export default Product;