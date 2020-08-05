import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100vw;
    min-height: 100vh;
    justify-content: space-between;
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 20px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 5px;
    padding: 10px;
    width: 20vw;
    min-width: 250px;
    height: auto;
    cursor: pointer;
    margin: 20px;
    transition: 0.5s all;
    color: #0009;

    &:hover{
        transition: 0.5s all;
        background-color: #00713C;
        color: #FFF;
    }
`;

export const Divider = styled.hr`
    display: flex;
    width: 80%;
    border-bottom: 1px solid #0003;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const More = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin: 10px;
    cursor: pointer;

    &:hover{
        font-weight: 600;
    }
`;

export const Title = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
`;