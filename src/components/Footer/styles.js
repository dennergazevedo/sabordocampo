import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;
    color: #FFF;
    width: 100vw;
    padding-right: 50px;

    @media only screen and (max-width: 680px){
        justify-content: center;
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    display: flex;
    height: 70px;
    width: auto;
    margin: 50px;
`;

export const Contato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Phone = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`;

export const Social = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
    font-size: 34px;
`;

export const Divider = styled.hr`
    display: flex;
    height: 150px;
    border-left: 1px solid #FFF;
    margin-left: 50px;
    margin-right: 50px;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Sac = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-style: italic;
    margin-bottom: 20px;
`;

export const SacLink = styled.div`
    display: flex;
    font-size: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 5px;
`;

export const TextLink = styled.span`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DividerLink = styled.hr`
    display: flex;
    width: 150px;
    border-bottom: 0.5px solid #FFF5;
    margin-top: 5px;
    margin-bottom: 15px;
`;