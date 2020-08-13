import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px){
        width: 100%;
    }
`;

export const Success = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 24px;
    color: #00713C;
    font-weight: 600;
    margin-bottom: 50px;
    width: 80%;
    text-align: center;
`;

export const Redirect = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #00713C;
    margin-top: 50px;
`;

export const Logomarca = styled.img`
    display: flex;
    margin-bottom: 50px;
    width: 30%;
    height: auto;
    min-width: 250px;
`;