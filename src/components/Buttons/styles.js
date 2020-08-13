
import styled from 'styled-components';

export const CheckoutButton = styled.button`
    display: flex;
    flex-direction: row;
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

    .icon{
        font-size: 26px;
        margin-right: 10px;
    }
`;