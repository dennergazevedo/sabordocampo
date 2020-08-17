import React, { useEffect } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Banner,
    BodyContainer,
    Item,
    DivMap
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Map from './Map';

// ASSETS
import aboutbanner from '../../assets/img/aboutbanner.png';
import aboutfoto from '../../assets/img/aboutfoto.png';

function About() {

    useEffect(() => {
        window.location.href= '#index';
    }, [])

  return (
      <Container>
          <Navbar />

          <div id="index" />

          <Banner src={aboutbanner} alt="BANNER" />
          <Body>

            <BodyContainer>
                <Item>
                    <img src={aboutfoto} alt="FOTO" />
                </Item>
                <Item>
                    <span>
                        Somos uma quarta geração de pequenos produtores. O contato com a terra e criações já acompanham nossa família há um tempo e temos muito orgulho disso. Tratamos, cuidamos, recolhemos, embalamos e distribuímos todos os produtos feitos ou gerados aqui. 
                    </span>
                    <span>
                        Nós moramos na fazenda, entre montanhas em uma cidade pequena na Zona da Mata de Minas Gerais. Fazemos produtos com o que plantamos ou criamos por aqui, respeitando os processos, o tempo e as tradições. Mas nosso respeito maior é a NATUREZA: com ela aprendemos como viver!
                    </span>

                    <span>
                        <b>De onde vem o produto que comprei:</b>
                    </span>
                    
                    <span>
                        São Pedro dos Ferros - MG
                    </span>
                </Item>
            </BodyContainer>

            <DivMap>
                <Map />
            </DivMap>

          </Body>

          <Footer />
      </Container>
  );
}

export default About;