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
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 20px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
    min-width: 300px;
    height: auto;
    padding: 10px;
    background-color: #FFF;
    border-radius: 10px;
    margin: 20px;
    cursor: pointer;

    &:hover{
        box-shadow: 1px 1px 10px 1px #00713C;
    }
`;

export const Divider = styled.hr`
    display: flex;
    width: 80%;
    border-bottom: 1px solid #0003;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const More = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0009;
    font-size: 12px;
    margin: 10px;
    cursor: pointer;

    &:hover{
        font-weight: 600;
    }
`;

export const Title = styled.div`
    display: flex;
    font-size: 20px;
    color: #0009;
    font-weight: 600;
    margin: 10px;
`;

export const Exit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: #00713C;
    color: #FFF;
    margin: 30px;
    transition: 0.5s all;
    width: 25vw;
    min-width: 250px;

    &:hover{
        transition: 0.5s all;
        background-color: #4DA250;
    }
`;

export const Help = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: #FFF;
    border: 1px solid #E54;
    color: #E54;
    margin-top: 30px;
    transition: 0.5s all;
    width: 25vw;
    min-width: 250px;

    &:hover{
        transition: 0.5s all;
        background-color: #E54;
        color: #FFF;
    }
`;

export const Admin = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: #333;
    color: #FFF;
    margin-top: 30px;
    transition: 0.5s all;
    width: 25vw;
    min-width: 250px;

    &:hover{
        transition: 0.5s all;
        background-color: #000;
    }
`;