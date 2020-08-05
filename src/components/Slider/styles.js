import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    height: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #FFF8;

    @media only screen and (max-width: 730px){
        justify-content: center;
    }
`;

export const Button = styled.button`
    display: flex;
    height: 350px;
    border: none;
    justify-content: center;
    align-items: center;
    width: 50px;
    font-size: 24px;
    color: #0007;
    background-color: #F5F5F5;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        background-color: #E0E0E0;
        box-shadow: 1px 1px 10px 1px #0001;
        color: #0009;
    }
`;

export const ButtonMobile = styled.button`
    display: flex;
    height: 50px;
    border: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 24px;
    color: #0007;
    background-color: #F5F5F5;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        background-color: #E0E0E0;
        box-shadow: 1px 1px 10px 1px #0001;
        color: #0009;
    }
`;

export const Title = styled.span`
    font-size: 26px;
    color: #0009;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 15px;
`;