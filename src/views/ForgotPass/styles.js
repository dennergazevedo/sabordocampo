import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
    min-height: 100vh;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 1px 1px 10px 1px #0003;
    width: 30vw;
    height: 70%;
    min-width: 350px;
    min-height: 300px;

    @media only screen and (max-width: 600px){
        justify-content: center;
    }
`;

export const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 29vw;
    min-width: 300px;
    min-width: 320px;
    font-size: 14px;
    padding: 10px;

    @media only screen and (max-width: 600px){
        width: 100%;
    }
`;

export const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 29vw;
    height: auto;
    min-width: 320px;
    font-size: 14px;
    padding: 10px;

    @media only screen and (max-width: 600px){
        width: 100%;
    }
`;

export const Divider = styled.hr`
    display: flex;
    width: 80%;
    border-bottom: 1px solid #0003;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const DividerHori = styled.hr`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #0003;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const ContainerDivider = styled.div`
    display: flex;
    width: 100%;
    font-size: 12px;
    color: #0009;
    justify-content: center;
    align-items: center;
`;

export const DividerOr = styled.hr`
    display: flex;
    width: 35%;
    border-bottom: 1px solid #0003;
    margin: 10px;
`;


export const Logomarca = styled.img`
    display: flex;
    margin-bottom: 80px;
    width: 200px;
    height: auto;
    cursor: pointer;

    @media only screen and (max-width: 600px){
        margin-bottom: 0px;
        margin: 20px;
    }
`;

export const Title = styled.span`
    display: flex;
    font-size: 18px;
    font-weight: 600;
    margin: 10px;
    color: #0009;
    margin-top: 15px;
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 20px;
    margin-top: 0px;
`;

export const FormRegister = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 20px;
    margin-top: 0px;
`;

export const LabelLogin = styled.label`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    color: #0008;
    align-self: flex-start;
    margin-bottom: 5px;
    margin-top: 20px;
`;

export const InputEmail = styled.input`
    display: flex;
    width: 100%;
    border: 1px solid #0003;
    border-radius: 5px;
    padding: 10px 5px 10px 20px;
    font-size: 12px;
    transition: 0.5s all;

    &:hover{
        border: 1px solid #00713C;
    }

    &:focus{
        transition: 0.5s all;
        border: 2px solid #00713C;
    }
`;

export const ForgotPass = styled.span`
    display: flex;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    margin-top: 10px;
    align-self: flex-start;
    color: #0009;
    transition: 0.5s all;
    flex-direction: row;

    &:hover{
        transition: 0.5s all;
        color: #00713C;
    }
`;

export const ButtonSignIn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: #00713C;
    color: #FFF;
    margin-top: 50px;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        background-color: #024f2b;
    }
`;

export const FacebookButton = styled.button`
    display: flex;
    background-color: #3B5998;
    border: none;
    color: #FFF;
    flex-direction: row;
    width: 80%;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin: 10px;
`;

export const LinkTermos = styled.span`
    font-weight: 600;
    cursor: pointer;
    font-size: 12px;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        color: #00713C;
    }
`;

export const Termos = styled.span`
    display: flex;
    margin-top: 10px;
    align-self: flex-start;
    color: #0009;
    transition: 0.5s all;
    flex-direction: row;
    font-size: 12px;
`;

export const Back = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #0009;
    font-size: 12px;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.5s all;
    margin-bottom: 50px;

    &:hover{
        transition: 0.5s all;
        color: #000;
    }
`;