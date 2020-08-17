/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

// STYLED-COMPONENTS
import { 
    Container,
    Body,
    Email,
    MailTitle,
    MailSubtitle,
    Form
} from './styles';

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import InputMask from 'react-input-mask';

// SERVICES
import { toast } from 'react-toastify';
import api from '../../../services/api';

// STORE
import { useSelector } from 'react-redux';

function Help() {

    const profileRedux = useSelector(state => state.user.user);

    const [nome] = useState(profileRedux.nome);
    const [phone, setPhone] = useState(profileRedux.phone);
    const [email] = useState(profileRedux.email);
    const [assunto, setAssunto] = useState('');
    const [msg, setMsg] = useState('');

    async function sendMail(){
      event.preventDefault();
      toast.info('Enviando mensagem, aguarde por favor...', { position: 'bottom-center' });
        if(assunto !== '' && msg !== ''){
          try{
            await api.post('send-email', {
                nome,
                phone,
                email,
                assunto: '[AJUDA]' + assunto,
                msg,
            })
            toast.success('Mensagem enviada com sucesso!', { position: 'bottom-center' });
            setAssunto('');
            setMsg('');
          }catch(err){
              toast.error('Falha ao enviar mensagem', { position: 'bottom-center' });
          }
        }else{
          toast.error('Preencha todos os campos', { position: 'bottom-center' });
        }
    }

  return (
      <Container>
          <Navbar />
            <Body>
              <Email>
                    <MailTitle>
                        Como podemos ajudá-lo?
                    </MailTitle>

                    <MailSubtitle>
                        Olá {nome}, descreva com clareza como podemos ajudar você preenchendo o formulário abaixo:
                    </MailSubtitle>

                    <Form onSubmit={sendMail}>
                        <input value={nome} disabled type="text" placeholder="Nome"/>
                        <input value={email} disabled type="text" placeholder="E-mail"/>
                        <input value={assunto} onChange={e => setAssunto(e.target.value)} type="text" placeholder="Assunto"/>
                        <InputMask mask="(99)9 9999-9999" value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder="Telefone"/>

                        <textarea value={msg} onChange={e => setMsg(e.target.value)} type="text" placeholder="Mensagem"/>

                        <button type="submit">
                            ENVIAR MENSAGEM
                        </button>
                    </Form>

                </Email>
            </Body>
          <Footer />
      </Container>
  );
}

export default Help;