import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100vw;
    min-height: 100vh;
    justify-content: space-between;
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 120px;
    width: 90%;
    min-width: 350px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const Endereco = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
    min-width: 320px;
    padding: 20px;
`;

export const Fatura = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 40%;
    min-width: 320px;
    border: 2px solid #00713C;
    padding: 20px;
    margin-bottom: 50px;
`;

export const Title = styled.span`
    display: flex;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
    align-self: flex-start;
`;

export const Items = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    color: #0009;
    font-size: 14px;
    margin-top: 15px;
`;

export const Divider = styled.hr`
    display: flex;
    width: 100%;
    border-bottom: 2px solid #0003;
    margin-bottom: 10px;
    margin-top: 5px;
`;

export const DividerLeft = styled.hr`
    display: flex;
    width: 80%;
    border-bottom: 1px solid #0003;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const DividerFino = styled.hr`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #0003;
    margin-top: 10px;
`;

export const ProdutoDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ProdutoTitle = styled.span`
    display: flex;
    font-size: 12px;
    flex-direction: row;
`;

export const Aviso = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 60px;
    margin-bottom: 20px;

    span{
        text-align: justify;
        font-size:12px;
    }
`;

export const AvisoTitle = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 600;
    color: #E54;
    margin-bottom: 10px;
`;

export const CheckoutButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    background-color: #00713C;
    color: #FFF;
    font-size: 14px;
    height: 40px;
    width: 100%;
    font-weight: 600;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        background-color: #004223;
    }
`;

export const BackButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    background-color: #E54;
    color: #FFF;
    font-size: 14px;
    height: 40px;
    width: 100%;
    font-weight: 600;

    &:hover{
        transition: 0.5s all;
        background-color: #820d00;
    }
`;

export const ItemInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    height: auto;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 10px;

    label{
        display: flex;
        font-size: 12px;
        font-weight: 600;
        color: #000;
        margin-bottom: 5px;
    }

    input{
        display: flex;
        font-size: 12px;
        color: #0008;
        padding: 5px 5px 5px 10px;
        height: 40px;
        width: 40%;
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

    .inputMask{
        display: flex;
        font-size: 12px;
        color: #0008;
        padding: 5px 5px 5px 10px;
        height: 40px;
        width: 40%;
        min-width: 250px;
        border: 1px solid #0003;

        @media only screen and (max-width: 600){
            width: 100%;
        }
    }

    select{
        display: flex;
        font-size: 12px;
        color: #0008;
        padding: 5px 5px 5px 10px;
        height: 40px;
        width: 40%;
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