/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

// SERVICES
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import FacebookLogin from 'react-facebook-login';

// STYLED COMPONENTS
import { 
    Container,
    LoginContainer,
    SignIn,
    SignUp,
    Divider,
    DividerHori,
    Logomarca,
    Title,
    FormLogin,
    LabelLogin,
    InputEmail,
    ForgotPass,
    ButtonSignIn,
    ContainerDivider,
    DividerOr,
    LinkTermos,
    Termos,
    Back,
    FormRegister
} from './styles';

// ASSETS
import logo from '../../assets/img/logomarca.png'

// ICONS
import {
    AiFillFacebook,
    AiOutlineArrowLeft
} from 'react-icons/ai';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

// VALIDATOR
import validator from 'validator';
import api from '../../services/api';

function Login() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [termos, setTermos] = useState(false);

    function handleLogin(){
        window.event.preventDefault()
        if (validator.isEmail(email)) {
          dispatch(signInRequest(email, password));
          setTimeout(function(){window.location.reload()}, 3000);
        } else {
          toast.error('Digite um e-mail válido.', { position: 'bottom-center'} );
        }
    }

    async function handleRegister(){
        if (validator.isEmail(emailReg)){
            if(passwordReg === confirmPass){
                if(termos){
                    try{
                        await api.post('register_user',{
                            nome,
                            email: emailReg,
                            password: passwordReg,
                        })
                        dispatch(signInRequest(emailReg, passwordReg));
                    }catch(err){
                        toast.error('Falha ao cadastrar usuário', { position: 'bottom-center' });
                    }
                }else{
                    toast.error('É necessário concordar com os termos de uso', { position: 'bottom-center' });
                }
            }else{
                toast.error('As senhas não conferem', { position: 'bottom-center' });
            }
        }else{
            toast.error('Digite um e-mail válido', { position: 'bottom-center' });
        }
    }

    async function handleLoginFacebook(e){
        try{
            await api.post('register_user',{
                nome: e.name,
                email: e.email,
                password: e.userID,
            })
            dispatch(signInRequest(e.email, e.userID));
        }catch(err){
            try{
                dispatch(signInRequest(e.email, e.userID));
            }catch(err){
                toast.error('Falha ao logar com o Facebook!', { position: 'bottom-center' });
                setTimeout(function(){}, 3000)
            }
        }
    }

    const responseFacebook = (response) =>{
        handleLoginFacebook(response);
    }

  return (
      <Container>
          <Logomarca src={logo} alt="LOGOMARCA"/>
          <LoginContainer>
                <SignIn>
                    <Title>
                        ENTRAR
                    </Title>

                    <FacebookLogin
                        appId="840985653099721"
                        autoLoad={false}
                        size="medium"
                        icon={<AiFillFacebook style={{fontSize:'30px', marginRight:'10px'}}/>}
                        fields="name,email"
                        textButton="Entrar com Facebook"
                        callback={responseFacebook} />

                    <ContainerDivider>
                        <DividerOr/>
                        ou
                        <DividerOr/>
                    </ContainerDivider>

                    <FormLogin onSubmit={handleLogin}>
                        <LabelLogin for="email">
                            E-mail*
                        </LabelLogin>
                        <InputEmail value={email} onChange={e => setEmail(e.target.value)} id="email" type="email" placeholder="exemplo@email.com"/>

                        <LabelLogin for="password">
                            Senha*
                        </LabelLogin>
                        <InputEmail value={password} onChange={e => setPassword(e.target.value)} id="password" type="password" placeholder="********"/>

                        <Link to="/esqueci-minha-senha">
                            <ForgotPass>
                                Esqueceu sua senha?
                            </ForgotPass>
                        </Link>

                        <ButtonSignIn>
                            {
                                loading?
                                "Carregando"
                                :
                                "Entrar"
                            }
                        </ButtonSignIn>
                    </FormLogin>
                </SignIn>

                {
                    screen.width > 500 && window.innerWidth > 500 ?
                    <Divider />
                    :
                    <DividerHori />
                }

                <SignUp>
                    <Title>
                        CADASTRAR-SE
                    </Title>

                    <FacebookLogin
                        appId="840985653099721"
                        autoLoad={false}
                        size="medium"
                        icon={<AiFillFacebook style={{fontSize:'30px', marginRight:'10px'}}/>}
                        fields="name,email"
                        textButton="Cadastrar com Facebook"
                        callback={responseFacebook} />

                    <ContainerDivider>
                        <DividerOr/>
                        ou
                        <DividerOr/>
                    </ContainerDivider>

                    <FormRegister>

                        <LabelLogin>
                            Nome*
                        </LabelLogin>
                        <InputEmail value={nome} onChange={e => setNome(e.target.value)} type="text" placeholder="Nome Completo"/>


                        <LabelLogin for="emailregister">
                            E-mail*
                        </LabelLogin>
                        <InputEmail value={emailReg} onChange={e => setEmailReg(e.target.value)} id="emailregister" type="email" placeholder="exemplo@email.com"/>

                        <LabelLogin for="passwordregister">
                            Senha*
                        </LabelLogin>
                        <InputEmail value={passwordReg} onChange={e => setPasswordReg(e.target.value)} id="passwordregister" type="password" placeholder="********"/>

                        <LabelLogin for="passwordconfirm">
                            Confirme sua Senha*
                        </LabelLogin>
                        <InputEmail value={confirmPass} onChange={e => setConfirmPass(e.target.value)} id="passwordconfirm" type="password" placeholder="********"/>

                        <Termos>
                            <input value={termos} onChange={e => setTermos(!termos)} type="checkbox" id="termos" style={{marginRight:'5px'}}/>
                                Li e concordo com os &nbsp;
                            <LinkTermos>Termos de uso.</LinkTermos>
                        </Termos>

                        <ButtonSignIn onClick={handleRegister}>
                            Registrar-se
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

export default Login;