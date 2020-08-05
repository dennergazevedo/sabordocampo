/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

// SERVICES
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    FacebookButton,
    ContainerDivider,
    DividerOr,
    LinkTermos,
    Termos,
    Back
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

function Login() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        window.event.preventDefault()
        if (validator.isEmail(email)) {
          dispatch(signInRequest(email, password));
          setTimeout(function(){window.location.reload()}, 3000);
        } else {
          toast.error('Digite um e-mail válido.', { position: 'bottom-center'} );
        }
    }

  return (
      <Container>
          <Logomarca src={logo} alt="LOGOMARCA"/>
          <LoginContainer>
                <SignIn>
                    <Title>
                        ENTRAR
                    </Title>

                    <FacebookButton>
                        <AiFillFacebook style={{fontSize:'30px'}}/>
                        Entrar com Facebook
                    </FacebookButton>

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

                        <ForgotPass>
                            Esqueceu sua senha?
                        </ForgotPass>

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

                    <FacebookButton>
                        <AiFillFacebook style={{fontSize:'30px'}}/>
                        Cadastrar com Facebook
                    </FacebookButton>

                    <ContainerDivider>
                        <DividerOr/>
                        ou
                        <DividerOr/>
                    </ContainerDivider>

                    <FormLogin>
                        <LabelLogin for="emailregister">
                            E-mail*
                        </LabelLogin>
                        <InputEmail id="emailregister" type="email" placeholder="exemplo@email.com"/>

                        <LabelLogin for="passwordregister">
                            Senha*
                        </LabelLogin>
                        <InputEmail id="passwordregister" type="password" placeholder="********"/>

                        <LabelLogin for="passwordconfirm">
                            Confirme sua Senha*
                        </LabelLogin>
                        <InputEmail id="passwordconfirm" type="password" placeholder="********"/>

                        <Termos>
                            <input type="checkbox" id="termos" style={{marginRight:'5px'}}/>
                            Li e concordo com os &nbsp;
                            <LinkTermos>Termos de uso.</LinkTermos>
                        </Termos>

                        <ButtonSignIn>
                            Registrar-se
                        </ButtonSignIn>
                    </FormLogin>
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