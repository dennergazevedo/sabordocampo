import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 350px;
    width: 20vw;
    min-width: 300px;
    background-color: #FFF;
    cursor: pointer;

    @media only screen and (max-width: 730px){
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

export const Foto = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    min-width: 300px;
    height: auto;
`;

export const Subtitle = styled.span`
    display: flex;
    font-size: 12px;
    color: #0006;
`;

export const Title = styled.span`
    display: flex;
    font-size: 14px;
    font-weight: 600;
    color: #0009;
    margin-top: 10px;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        color: #00713C;
    }
`;