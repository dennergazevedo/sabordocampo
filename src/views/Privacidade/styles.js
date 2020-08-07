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
    flex-direction: column;
    width: 80%;
    min-width: 350px;
    justify-content: center;
    align-items: flex-start;
    margin-top: 150px;
    margin-bottom: 50px;

    span{
        font-size: 12px;
        color: #0009;
        margin-top: 15px;
        text-align: justify;
    }
`;

export const Title = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 600;
`;

export const Subtitle = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
`;