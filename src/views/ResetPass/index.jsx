/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

// SERVICES
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// STYLED COMPONENTS
import { 
    Container,
    LoginContainer,
    SignUp,
    Divider,
    Logomarca,
    Title,
    LabelLogin,
    InputEmail,
    ButtonSignIn,
    Back,
    FormRegister
} from './styles';

// ASSETS
import logo from '../../assets/img/logomarca.png'

// ICONS
import {
    AiOutlineArrowLeft
} from 'react-icons/ai';

// VALIDATOR
import api from '../../services/api';
import history from '../../services/history';

function ResetPass() {

    const params = useParams();

    const [email] = useState(params.email);
    const [token] = useState(params.token);
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    async function handleReset(){
        if(password === confirmPass){
            try{
                await api.post('reset_password', {
                    email,
                    token,
                    password
                })
                toast.success('Senha atualizada com sucesso!', { position: 'bottom-center' });
                setTimeout(function(){
                    history.push('/');
                    window.location.reload();
                }, 3000)
            }catch(err){
                toast.error('Não foi possível recuperar a senha.', { position: 'bottom-center' });
            }
        }else{
            toast.error('As senhas não conferem!', { position: 'bottom-center' });
        }
    }

  return (
      <Container>
          <Logomarca src={logo} alt="LOGOMARCA"/>
          <LoginContainer>
                <SignUp>
                    <Title>
                        RESETAR SENHA
                    </Title>

                    <Divider/>

                    <FormRegister>

                        <LabelLogin for="emailregister">
                            E-mail*
                        </LabelLogin>
                        <InputEmail value={email} disabled/>

                        <LabelLogin for="passwordregister">
                            Nova senha*
                        </LabelLogin>
                        <InputEmail value={password} onChange={e => setPassword(e.target.value)} id="passwordregister" type="password" placeholder="********"/>

                        <LabelLogin for="passwordconfirm">
                            Confirme sua Senha*
                        </LabelLogin>
                        <InputEmail value={confirmPass} onChange={e => setConfirmPass(e.target.value)} id="passwordconfirm" type="password" placeholder="********"/>

                        <ButtonSignIn onClick={handleReset}>
                            Resetar Senha
                        </ButtonSignIn>
                    </FormRegister>
                </SignUp>
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

export default ResetPass;