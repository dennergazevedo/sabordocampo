import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100vw;
    height: auto;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: auto;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const Banner = styled.img`
    display: flex;
    width: 100%;
    height: auto;
    margin-top: 100px;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 300px;
    justify-content: center;
    align-items: center;
    padding: 20px;

    span{
        margin-top: 20px;
        text-align: justify;
        line-height: 30px;
    }

    img{
        width: 100%;
    }
`;

export const DivMap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
`;