import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Title,
    Subtitle,
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Privacidade() {
  return (
      <Container>
          <Navbar />

            <Body>
                <Title>
                    Segurança e Privacidade
                </Title>

                <span>
                    Nós prezamos a sua privacidade e cuidamos da sua segurança! Por isso, nosso sistema de compras foi pensado para dar a você o máximo de proteção, utilizando as tecnologias e procedimentos eficazes em termos de segurança na Internet. Entenda como funciona:
                </span>

                <Subtitle>
                    Confidencialidade
                </Subtitle>

                <span>
                    Todas as informações fornecidas por você a Sabor do Campo são tratadas sob a mais absoluta confidencialidade. Ou seja, mais ninguém tem acesso. Seus dados pessoais serão utilizados apenas para efetivar suas compras e para que possamos enviar a você as novidades do site. No momento do cadastro, você escolhe se quer ou não receber esse tipo de e-mail. Informações a seu respeito não serão repassadas a terceiros.
                </span>

                <Subtitle>
                    Processamento sem intervenção humana
                </Subtitle>

                <span>
                    Todos os dados são processados em nossos computadores, sem que haja, em nenhum momento, intervenção de nossos funcionários. Dessa forma, eliminamos o risco de vazamento de informações ou eventuais falhas humanas.
                </span>

                <Subtitle>
                    Servidor Seguro
                </Subtitle>

                <span>
                    Para reforçar sua segurança, dispomos de um servidor seguro certificado pela Let’s Encrypt – um dos mais respeitados certificados de sistemas de segurança do mundo. 
                </span>

                <Subtitle>
                    Criptografia
                </Subtitle>

                <span>
                    Todos os dados enviados por você trafegam criptografados (codificados). Isso significa que, mesmo que consigam interceptá-las as, pessoas não conseguirão ler as suas informações.
                </span>

                <Subtitle>
                    Cartão de Crédito
                </Subtitle>

                <span>
                    Toda transação realizada por cartão de crédito é transacionada pelo PayPal e tem toda segurança necessária para que seus dados nunca sejam revelados.
                </span>

                <Subtitle>
                    Hospedagem
                </Subtitle>

                <span>
                    O site Sabor do Campo está hospedado em um Data Center especializado em hospedagem de comércio eletrônico, projetado para operar dentro de padrões mundiais de qualidade, garantindo total segurança, conectividade de alta performance, disponibilidade, monitoramento, redundância de links, e escalabilidade.
                </span>
            </Body>

          <Footer />
      </Container>
  );
}

export default Privacidade;