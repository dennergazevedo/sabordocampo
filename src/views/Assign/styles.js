import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
`;

export const Product = styled.img`
    display: flex;
    width: 45vw;
    height: auto;

    @media only screen and (max-width: 600px){
        width: 90vw;
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 45vw;
    height: auto;
    color: #0009;
    margin: 20px;

    @media only screen and (max-width: 600px){
        width: 90vw;
    }
`;

export const Title = styled.span`
    display: flex;
    font-size: 24px;
    font-weight: 600;
`;

export const Subtitle = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-top: 20px;

    span{
        margin-top: 10px;
        font-size: 14px;
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span{
        margin-top: 10px;
        font-size: 12px;
        font-style: italic;
        width: 40vw;

        @media only screen and (max-width: 600px){
            width: 80vw;
        }
    }
`;

export const Label = styled.label`
    display: flex;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 20px;
`;

export const Select = styled.select`
    display: flex;
    flex-direction: row;
    border: 1px solid #0005;
    border-radius: 5px;
    padding: 10px;
    width: 40vw;

    &:hover{
        border: 1px solid #00713C;
    }

    &:focus{
        border: 2px solid #00713C;
    }

    @media only screen and (max-width: 600px){
        width: 80vw;
    }
`;

export const Options2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 90vw;
    justify-content: center;
    align-items: center;
`;

export const Valor = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 16px;
    color: #0009;
    margin-bottom: 20px;

    span{
        color: #E54;
        font-weight: 600;
        margin-right: 5px;
        margin-left: 5px;
        font-size: 20px;
    }
`;

export const Quantidade = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #0009;
    margin-bottom: 20px;
`;

export const ButtonQnt = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 50px;
    height: 50px;
    color: #0009;
    border: 1px solid #0005;
    border-radius: 5px;
    margin: 10px;

    &:hover{
        border: 1px solid #0009;
    }
`;

export const InputQnt = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50px;
    height: 50px;
    padding: 10px;
    box-shadow: 1px 1px 5px 1px #0003;
`;