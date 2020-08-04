/* eslint-disable no-restricted-globals */
import React from 'react';

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
} from './styles';

// ASSETS
import logo from '../../assets/img/logomarca.png'

// ICONS
import {
    AiFillFacebook
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
                        CADASTRAR
                    </Title>

                    <DividerHori />
                </SignUp>
          </LoginContainer>
      </Container>
  );
}

export default Login;