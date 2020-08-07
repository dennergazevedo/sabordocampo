/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Body,
    Banner,
    ContatoBody,
    Contato,
    Email,
    Item,
    Desc,
    Title,
    Subtitle,
    MailTitle,
    MailSubtitle,
    Form
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// ASSETS
import contatobanner from '../../assets/img/contatobanner.png';

// SERVICES
import { toast } from 'react-toastify';
import api from '../../services/api';

// VALIDATOR
import validator from 'validator';

// ICONS
import {
    FaMapMarkerAlt,
    FaEnvelope
} from 'react-icons/fa';

function Products() {

    const [nome, setNome] = useState('');
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(()=>{
        window.location.href="#index";
    }, [])

    async function sendMail(){
        event.preventDefault();
        toast.info('Enviando mensagem, aguarde por favor...', { position: 'bottom-center' });
        if(validator.isEmail(email)){
            try{
                await api.post('send-email', {
                    nome,
                    phone,
                    email,
                    assunto,
                    msg,
                })
                toast.success('Mensagem enviada com sucesso!', { position: 'bottom-center' });
            }catch(err){
                toast.error('Falha ao enviar mensagem', { position: 'bottom-center' });
            }
        }else{
            toast.error('Digite um e-mail válido!', { position: 'bottom-center' });
        }
    }

  return (
      <Container>
          <Navbar />

          <div id="index"/>

          <Body>
            <Banner src={contatobanner} alt="BANNER" />
            
            <ContatoBody>
                <Contato>

                    <Item>
                        <FaMapMarkerAlt style={{fontSize:'20px'}}/>
                        <Desc>
                            <Title>
                                <span>
                                    Central de Atendimento
                                </span>
                                <span>
                                    (31) 9 9988-8949
                                </span>
                            </Title>

                            <Subtitle>
                                <span>
                                    Atendimento de segunda a sexta, de 9h às 17h.
                                </span>
                                <span>
                                    Este canal recebe ligações e Whatsapp.
                                </span>
                            </Subtitle>
                        </Desc>
                    </Item>

                    <Item style={{marginTop:'50px'}}>
                        <FaEnvelope style={{fontSize:'20px'}}/>
                        <Desc>
                            <Title>
                                <span>
                                    E-mail
                                </span>
                                <span>
                                    contato@sabordocampomg.com.br
                                </span>
                            </Title>

                            <Subtitle>
                                <span>
                                    Atendimento de segunda a sexta, de 9h às 17h.
                                </span>
                                <span>
                                    Este canal é reservado para e-mail comerciais.
                                </span>
                            </Subtitle>
                        </Desc>
                    </Item>

                </Contato>

                <Email>
                    <MailTitle>
                        Envie-nos uma mensagem
                    </MailTitle>

                    <MailSubtitle>
                        Envie uma mensagem para nosso atendimento e você será respondido(a)
                        pelo e-mail ou telefone de contato deixado abaixo.
                    </MailSubtitle>

                    <Form onSubmit={sendMail}>
                        <input value={nome} onChange={e => setNome(e.target.value)} type="text" placeholder="Nome"/>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="E-mail"/>
                        <input value={assunto} onChange={e => setAssunto(e.target.value)} type="text" placeholder="Assunto"/>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="number" placeholder="Telefone"/>

                        <textarea value={msg} onChange={e => setMsg(e.target.value)} type="text" placeholder="Mensagem"/>

                        <button type="submit">
                            ENVIAR MENSAGEM
                        </button>
                    </Form>

                </Email>

            </ContatoBody>
          </Body>

          <Footer />
      </Container>
  );
}

export default Products;