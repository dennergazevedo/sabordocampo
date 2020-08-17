/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';

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
  ProductList,
  Process
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Product from '../../components/Product';

// ASSETS
import fixedslider from '../../assets/img/fixedslider.png';
import imgplan from '../../assets/img/backgroundhome.png';
import imgplanmobile from '../../assets/img/backgroundhomemobile.png';

function Homepage() {

  useEffect(()=>{
    window.location.href="#index";
  }, [])

  return (
      <Container>
        <Navbar />

        <div id="index" />

        <FixedSlider>
          {
            screen.width > 700 && window.innerWidth > 700 ?
              <Imagem src={fixedslider} />
              :
              null
          }
          <TextSlider>
            <Subtitle>
              CLUBE DO OVO SABOR DO CAMPO
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
              <ButtonNav href="#assign">
                Eu quero
              </ButtonNav>
              <ButtonNav href="#about">
                Entenda como funciona
              </ButtonNav>
            </ButtonsSlider>
          </TextSlider>
        </FixedSlider>

        <Process >
          <h2 id="about" >PROCESSO</h2>

          <span>
            Assim que você faz sua assinatura ou compra de algum produto em nosso site já começamos a nos preparar para você receber tudo fresquinho em casa. Planejamos e separamos nossa produção de acordo com a demanda dos pedidos. Assim evitamos desperdício de produtos e embalagens. Depois nos movimentamos para fazer as entregar no dia e intervalo de horário que você selecionou em nossa em nossa plataforma.
          </span>
        </Process>

        {
          screen.width > 700 && window.innerWidth > 700 ?
            <AboutPlan>
              <ImgPlan src={imgplan} alt="IMAGEMPLANO" />
              <ButtonPlan href="#assign">
                ASSINAR AGORA
              </ButtonPlan>
            </AboutPlan>
            :
            <AboutPlan>
              <ImgPlan src={imgplanmobile} alt="IMAGEMPLANO" />
              <ButtonPlan href="#assign">
                ASSINAR AGORA
              </ButtonPlan>
            </AboutPlan>
        }

        <ProductList id="assign">
          <Product />
        </ProductList>

        <Footer />
        
      </Container>
  );
}

export default Homepage;