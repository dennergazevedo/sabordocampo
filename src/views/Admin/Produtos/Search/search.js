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
    flex-direction: column;
    width: 90vw;
    min-width: 350px;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 20px;
`;

export const Title = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: #0009;
`;

export const SearchBody = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    @media only screen and (max-width: 600px){
        flex-direction: column;
    }
`;

export const Label = styled.label`
    display: flex;
    font-size: 12px;
    margin-right: 10px;
`;

export const Input = styled.input`
    display: flex;
    padding: 5px 5px 5px 10px;
    background-color: #FFF;
    border: 1px solid #0005;
    width: 35vw;
    min-width: 250px;
    border-radius: 5px 0px 0px 5px;
    height: 40px;
    font-size: 12px;

    @media only screen and (max-width: 600px){
        margin-top: 10px;
        border-radius: 5px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 40px;
    width: 60px;
    border-radius: 0px 5px 5px 0px;
    background-color: #00713C;
    color: #FFF;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        background-color: #004525;
    }

    @media only screen and (max-width: 600px){
        border-radius: 5px;
        margin-top: 10px;
        width: 100%;
    }
`;

export const ListProducts = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    min-width: 350px;
    margin-top: 50px;
`;