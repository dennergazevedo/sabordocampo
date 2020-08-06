import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: auto;
    background-color: #FFF;
    border: 1px solid #0003;
    margin-top: 5px;
    padding: 10px 50px 10px 50px;

    @media only screen and (max-width: 600px){
        padding: 10px 20px 10px 20px;
    }
`;

export const Editar = styled.button`
    display: flex;
    width: 50px;
    height: 50px;
    color: #0009;
    font-size: 20px;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    
    &:hover{
        transition: 0.5s all;
        color: #000;
    }

    @media only screen and (max-width: 600px){
        width: auto;
        height: auto;
    }
`;

export const Text = styled.span`
    display: flex;
    font-size: 14px;
    color: #0009;

    @media only screen and (max-width: 600px){
        font-size: 12px;
    }
`;

export const Divider = styled.hr`
    display: flex;
    height: 50px;
    border-left: 1px solid #0003;
    margin-left: 10px;
    margin-right: 10px;
`;