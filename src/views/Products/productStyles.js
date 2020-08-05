import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
`;

export const Foto = styled.img`
    display: flex;
    width: 100%;
    height: auto;
`;

export const Title = styled.span`
    display: flex;
    font-size: 18px;
    font-weight: 600;
    color: #0009;
    margin-top: 20px;
`;

export const Subtitle = styled.span`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    color: #0005;
`;

export const Preco = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 10px;
`;

export const Unid = styled.span`
    display: flex;
    font-size: 10px;
    color: #0005;
    font-weight: 500;
    margin-left: 5px;
`;

export const Valor = styled.span`
    color: #00713C;
    font-size: 18px;
    font-weight: 600;
`;

export const Buy = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 60%;
    min-width: 150px;
    background-color: #00713C;
    color: #FFF;
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 100px;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        box-shadow: 1px 1px 10px 1px #00713C;
    }
`;