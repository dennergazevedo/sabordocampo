import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100vw;
    height: auto;
    justify-content: center;
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 100px;
    margin-bottom: 50px;
`;

export const Banner = styled.img`
    display: flex;
    width: 100%;
    height: auto;
`;

export const Title = styled.span`
    cursor: default;
    font-size: 34px;
    font-weight: 600;
    color: #000;
    margin-top: 40px;
    width: 90%;
    text-align: center;

    @media only screen and (max-width: 700px){
        font-size: 30px;
    }
`;

export const Subtitle = styled.span`
    cursor: default;
    font-size: 20px;
    color: #0007;
    margin: 16px;
    width: 90%;
    text-align: center;

    @media only screen and (max-width: 700px){
        font-size: 15px;
    }
`;

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;
