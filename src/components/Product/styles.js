import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    width: auto;
    border-radius: 5px;
    background-color: #c7ffd6;
    
    &:hover{
        box-shadow: 1px 1px 10px 1px #0003;
    }

    @media only screen and (max-width: 500px){
        justify-content: center;
    }

    @media only screen and (max-width: 380px){
        width: 220px;
    }
`;

export const ImagemProduct = styled.img`
    display: flex;
    width: 220px;
    border-radius: 5px;
`;

export const Divider = styled.hr`
    display: flex;
    height: 150px;
    border-left: 1px solid #00713C;
    margin-left: 50px;
    margin-right: 50px;
`;

export const DividerTransp = styled.hr`
    display: flex;
    height: 150px;
    border-left: 1px solid #0000;
    margin-left: 50px;
`;

export const Text = styled.span`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 150px;
    font-size: 12px;
    color: #00713C;
    line-height: 20px;
    
    @media only screen and (max-width: 680px){
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
`;

export const Title = styled.span`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 150px;
    font-size: 18px;
    font-weight: 800;
    color: #00713C;
    line-height: 20px;
    margin-bottom: 10px;
`;

export const Subtitle = styled.span`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 150px;
    font-size: 12px;
    font-weight: 600;
    color: #00713C;
    line-height: 20px;
    margin-bottom: 10px;
`;

export const Button1 = styled.button`
    display: flex;
    justify-content: center;
    padding: 5px 10px 5px 10px;
    border-radius: 100px;
    background-color: #00713C;
    color: #FFF;
    font-size: 12px;
    margin-top: 10px;
    transition: 0.5s all;
    width: 150px;

    &:hover{
        transition: 0.5s all;
        box-shadow: 1px 1px 10px 1px #00713C;
    }
`;

export const Button2 = styled.button`
    display: flex;
    justify-content: center;
    padding: 5px 10px 5px 10px;
    border-radius: 100px;
    background-color: #4DA250;
    color: #FFF;
    font-size: 12px;
    margin-top: 10px;
    transition: 0.5s all;
    width: 150px;

    &:hover{
        transition: 0.5s all;
        box-shadow: 1px 1px 10px 1px #4DA250;
    }
`;