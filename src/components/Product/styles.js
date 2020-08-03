import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    width: 90vw;
    border-radius: 5px;
    background-color: #c7ffd6;
    
    &:hover{
        box-shadow: 1px 1px 10px 1px #0003;
        cursor: pointer;
    }
`;

export const ImagemProduct = styled.img`
    display: flex;
    width: 200px;
    margin: 10px;
`;