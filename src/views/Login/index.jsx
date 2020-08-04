/* eslint-disable no-restricted-globals */
import React from 'react';

// SERVICES
import { Link } from 'react-router-dom';

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

function Login() {
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

                    <FormLogin>
                        <LabelLogin for="email">
                            E-mail*
                        </LabelLogin>
                        <InputEmail id="email" type="email" placeholder="exemplo@email.com"/>

                        <LabelLogin for="password">
                            Senha*
                        </LabelLogin>
                        <InputEmail id="password" type="password" placeholder="********"/>

                        <ForgotPass>
                            Esqueceu sua senha?
                        </ForgotPass>

                        <ButtonSignIn>
                            Entrar
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