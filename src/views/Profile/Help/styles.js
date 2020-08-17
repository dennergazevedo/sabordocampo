import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
`;

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 20px;
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
        width: 80%;
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