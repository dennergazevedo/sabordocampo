/* eslint-disable no-restricted-globals */
import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Left,
    Logo,
    Contato,
    Phone,
    Social,
    Divider,
    Center,
    Sac,
    SacLink,
    TextLink,
    DividerLink
} from './styles';

// ASSETS
import logofooter from '../../assets/img/logofooter.png';

// ICONS
import {
    AiOutlineWhatsApp,
    AiFillFacebook,
    AiOutlineInstagram,
    AiFillPhone
} from 'react-icons/ai';

function Footer() {
  return (
    <Container>
        <Left>
            <Logo src={logofooter} alt="LOGOMARCA" />
            <Contato>
                <Phone>
                    <AiOutlineWhatsApp style={{fontSize:'16px', marginRight: '5px'}}/>
                    (31) 9 9988-8949
                </Phone>
                <Social>
                    <AiFillFacebook style={{cursor: 'pointer', margin: '10px'}}/>
                    <AiOutlineInstagram style={{cursor: 'pointer', margin: '10px'}}/>
                </Social>
            </Contato>
        </Left>

        {
            screen.width > 680 && window.innerWidth > 680 ?
            <Divider />
            :
            null
        }
        
        <Center>
            <Sac>
                <AiFillPhone style={{ fontSize:'20px', marginRight: '5px' }} />
                Central de Ajuda ao Consumidor
            </Sac>

            <SacLink>
                <TextLink>
                    Dúvidas frequentes
                </TextLink>

                <DividerLink/>

                <TextLink>
                    Termos de uso
                </TextLink>

                <DividerLink/>

                <TextLink>
                    Segurança e privacidade
                </TextLink>

                <DividerLink/>

                <TextLink>
                    Trocas e cancelamento
                </TextLink>

                <DividerLink/>
            </SacLink>
        </Center>
    </Container>
  );
}

export default Footer;