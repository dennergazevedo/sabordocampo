/* eslint-disable no-restricted-globals */
import React from 'react';

// STYLED COMPONENTS
import { 
  Container,
  FixedSlider,
  Imagem,
  TextSlider,
  Subtitle,
  Title,
  ButtonsSlider,
  ButtonNav,
  Text,
  AboutPlan,
  ImgPlan,
  ButtonPlan,
  ProductList
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Product from '../../components/Product';

// ASSETS
import fixedslider from '../../assets/img/fixedslider.png';
import imgplan from '../../assets/img/backgroundhome.png';

function Homepage() {
  return (
    <Container>
        <Navbar/>

        <FixedSlider>
          {
            screen.width > 700 && window.innerWidth > 700 ?
            <Imagem src={fixedslider}/>
            :
            null
          }
          <TextSlider>
            <Subtitle>
              Clube do Ovo Sabor do Campo
            </Subtitle>
            <Title>
              ASSINE E RECEBA
            </Title>
            <Title>
              SEUS OVOS EM CASA
            </Title>
            <Text>
              Tenha sempre ovos frescos, com qualidade, sem sair de casa.
            </Text>
            <ButtonsSlider>
              <ButtonNav>
                Eu quero
              </ButtonNav>
              <ButtonNav>
                Entenda como funciona
              </ButtonNav>
            </ButtonsSlider>
          </TextSlider>
        </FixedSlider>

        <AboutPlan>
          <ImgPlan src={imgplan} alt="IMAGEMPLANO"/>
          <ButtonPlan>
            ASSINAR AGORA
          </ButtonPlan>
        </AboutPlan>

        <ProductList>
          <Product />
        </ProductList>
    </Container>
  );
}

export default Homepage;