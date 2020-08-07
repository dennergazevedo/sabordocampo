import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    padding: 5px 25px 5px 25px;
    margin-top: 5px;
    border: 1px solid #0003;

    @media only screen and (max-width: 600px){
        padding: 5px;
    }
`;

export const Divider = styled.hr`
    display: flex;
    height: 30px;
    border-left: 1px solid #0003;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin: 5px;
    color: #0009;
    text-align: center;

    @media only screen and (max-width: 600px){
        font-size: 10px;
    }
`;

export const LinkPay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    color: #0009;
    transition: 0.5s all;
    
    &:hover{
        transition: 0.5s all;
        color: #00713C;
        font-weight: 600;
    }
`;