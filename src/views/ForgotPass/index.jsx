/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

// SERVICES
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

// STYLED COMPONENTS
import { 
    Container,
    LoginContainer,
    SignIn,
    Logomarca,
    Title,
    FormLogin,
    LabelLogin,
    InputEmail,
    ButtonSignIn,
    ContainerDivider,
    Divider,
    Back,
} from './styles';

// ASSETS
import logo from '../../assets/img/logomarca.png'

// ICONS
import {
    AiOutlineArrowLeft
} from 'react-icons/ai';

function ForgotPassword() {

    const [email, setEmail] = useState('');

    async function forgotPass(){
        try{
            await api.post('forgot-pass', {
                email
            })
            toast.success(`E-mail de recuperação enviado para ${email}.`, { position: 'bottom-center' });
            setTimeout(function(){
                window.location.href = "https://www.sabordocampomg.com.br";
            }, 5000)
        }catch(err){
            toast.error('', { position: 'bottom-center' });
        }
    }

  return (
      <Container>
          <Logomarca src={logo} alt="LOGOMARCA"/>
          <LoginContainer>
                <SignIn>
                    <Title>
                        Recuperar Senha
                    </Title>

                    <ContainerDivider>
                        <Divider/>
                    </ContainerDivider>

                    <FormLogin>
                        <LabelLogin for="email">
                            E-mail*
                        </LabelLogin>
                        <InputEmail value={email} onChange={e => setEmail(e.target.value)} id="email" type="email" placeholder="exemplo@email.com"/>

                        <ButtonSignIn onClick={forgotPass}>
                            Recuperar
                        </ButtonSignIn>
                    </FormLogin>
                </SignIn>
          </LoginContainer>

          <Link to="/">
            <Back>
                    <AiOutlineArrowLeft />
                    Voltar para página inicial
            </Back>
          </Link>

      </Container>
  );
}

export default ForgotPassword;