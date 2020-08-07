import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100vw;
    height: auto;
    justify-content: center;
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 100px;
    margin-bottom: 50px;
`;

export const ContatoBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: auto;
    margin-top: 50px;
    margin-bottom: 50px;

    @media only screen and (max-width: 600px){
        width: 100%;
        justify-content: center;
    }
`;

export const Banner = styled.img`
    display: flex;
    width: 100%;
    height: auto;
`;

export const Contato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    background-color: #00713C;
    padding: 20px;
    min-width: 350px;
    border-radius: 10px;
`;

export const Email = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;

    @media only screen and (max-width: 600px){
        width: 90%;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    font-size: 14px;
    color: #FFF;
`;

export const Desc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    font-size: 12px;
`;

export const Subtitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-top: 20px;
`;

export const Title = styled.span`
    display: flex;
    align-items: flex-end;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    font-weight: 600;
`;

export const MailTitle = styled.span`
    display: flex;
    font-size: 20px;
    font-weight: 600;
    color: #000;

    @media only screen and (max-width: 600px){
        font-size: 16px;
        margin-top: 20px;
    }
`;

export const MailSubtitle = styled.span`
    display: flex;
    font-size: 14px;
    color: #0009;
    margin-top: 10px;

    @media only screen and (max-width: 600px){
        font-size: 12px;
        margin-top: 20px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding: 10px;

    input{
        font-size: 12px;
        padding: 5px 5px 5px 15px;
        display: flex;
        border: 1px solid #0003;
        border-radius: 100px;
        margin-top: 20px;
        margin-right: 10px;
        height: 40px;
        width: 40%;
        min-width: 200px;

        @media only screen and (max-width: 600px){
            width: 90%;
        }
    }

    textarea{
        font-size: 12px;
        padding: 5px 5px 5px 15px;
        display: flex;
        border: 1px solid #0003;
        border-radius: 20px;
        margin-top: 20px;
        margin-right: 10px;
        height: 70px;
        width: 85%;
        min-width: 250px;

        @media only screen and (max-width: 600px){
            width: 90%;
        }
    }

    button{
        margin-top: 20px;
        height: 40px;
        width: 70%;
        min-width: 250px;
        background-color: #00713C;
        color: #FFF;
        transition: 0.5s all;

        &:hover{
            transition: 0.5s all;
            background-color: #004022;
        }
    }
`;