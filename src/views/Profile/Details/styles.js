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
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 20px;
`;

export const Dados = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px;
`;

export const Title = styled.span`
    display: flex;
    align-self: flex-start;
    font-size: 24px;
    color: #0009;
    font-weight: 600;
`;

export const Subtitle = styled.span`
    display: flex;
    align-self: flex-start;
    font-size: 18px;
    color: #0009;
    font-weight: 600;
    margin-top: 20px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    width: 45%;

    label{
        font-size: 12px;
        color: #000;
        font-weight: 600;
    }

    .inputMask{
        display: flex;
        font-size: 12px;
        color: #0008;
        padding: 5px 5px 5px 10px;
        height: 40px;
        width: 100%;
        min-width: 250px;
        border: 1px solid #0003;

        &:disabled{
            background-color: #FFF;
            color: #909090;
        }

        @media only screen and (max-width: 600){
            width: 100%;
        }
    }

    input{
        display: flex;
        font-size: 12px;
        color: #0008;
        padding: 5px 5px 5px 10px;
        height: 40px;
        width: 100%;
        min-width: 250px;
        border: 1px solid #0003;

        &:disabled{
            background-color: #FFF;
            color: #909090;
        }

        @media only screen and (max-width: 600){
            width: 100%;
        }
    }
`;

export const Divider = styled.hr`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #0003;
    margin: 10px;
`;

export const ChangePass = styled.button`
    display: flex;
    width: 50%;
    min-width: 200px;
    background-color: #E54;
    color: #FFF;
    font-size: 12px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    height: 50px;
    transition: 0.5s all;
    font-weight: 600;

    &:hover{
        transition: 0.5s all;
        background-color: #820d00;
    }
`;

export const EditButton = styled.button`
    display: flex;
    width: 50%;
    min-width: 200px;
    background-color: #00713C;
    color: #FFF;
    font-size: 12px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    height: 50px;
    transition: 0.5s all;
    font-weight: 600;

    &:hover{
        transition: 0.5s all;
        background-color: #004022;
    }
`;