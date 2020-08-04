import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100px;
    background-color: #FFF;
    box-shadow: 1px 1px 10px 1px #0003;
    overflow-y: hidden;
`;

export const Logomarca = styled.img`
    width: auto;
    height: 55px;
    margin: 30px;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    color: #909090;
    margin: 30px;
    justify-content: center;
    align-items: center;
`;

export const ItemIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #FFF;
    border-radius: 50%;
    border: 1px solid #0003;
    color: #0003;
    transition: 0.5s all;
    cursor: pointer;
    margin: 15px;
    font-size: 16px;
    
    &:hover{
        background-color: #00713C;
        color: #FFF;
        transition: 0.5s all;
        border: 1px solid #00713C;
    }
`;

export const ItemText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #0007;
    transition: 0.5s all;
    cursor: pointer;
    margin: 15px;
    font-size: 14px;
    font-weight: 600;
    
    &:hover{
        color: #00713C;
        transition: 0.5s all;
    }
`;