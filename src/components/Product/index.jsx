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

function Product() {
  return (
      <Container>
        <ImagemProduct src={basket} alt="ITEM"/>
        <Divider />
        
        <Text>
          <Title>
            12 Ovos 
            <Subtitle>(Dúzia)</Subtitle>
          </Title>
          Ovos de galinhas livres de gaiola com acesso ao campo.
          <Button1>
            Assinar Agora
          </Button1>
          <Button2>
            Comprar Agora
          </Button2>
        </Text>

        <Divider />
        
        <Text>
          <Title>
            30 Ovos
            <Subtitle>(Pente)</Subtitle> 
          </Title>
          Ovos de galinhas livres de gaiola com acesso ao campo.
          <Button1>
            Assinar Agora
          </Button1>
          <Button2>
            Comprar Agora
          </Button2>
        </Text>

        <Divider />
        
        <Text>
          <Title>
            360 Ovos
            <Subtitle>(Caixa)</Subtitle>
          </Title>
          Ovos de galinhas livres de gaiola com acesso ao campo.
          <Button1>
            Assinar Agora
          </Button1>
          <Button2>
            Comprar Agora
          </Button2>
        </Text>

        <DividerTransp />

      </Container>
  );
}

export default Product;