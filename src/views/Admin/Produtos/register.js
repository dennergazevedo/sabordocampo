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
    flex-wrap: wrap;
    flex-direction: row;
    width: 40vw;
    min-width: 350px;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    margin-bottom: 20px;
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px #0003;
    padding: 30px;
`;

export const CircleInput = styled.img`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    box-shadow: 0px 0px 20px 0px #0005;
`;

export const Imagem = styled.div.attrs(props => ({}))`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 30vw;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;

    @media only screen and (max-width: 600px) {
        width: 90%;
        margin-left: 0;
    }

    input[type="file"]{
        display: none;
    }

    #profileImg{
        display: flex;
        position: abosolute;
        flex-direction: column;
        justify-content: center;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        cursor: pointer;
        z-index: 12;
    }

    #profileImg:hover{
        transition: 0.5s all;
        background-color: #0005;
    }

    #profileImg::-webkit-file-upload-button{
        visibility: hidden;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1px;
    width: 90%;
    height: auto;
`;

export const Label = styled.label`
    font-size: 12px;
    color: #0009;
    align-self: flex-start;
    margin-top: 10px;
`;

export const Input = styled.input`
    display: flex;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: #F5F5F5;
    border: 1px solid #909090;
    color: #0009;
    font-size: 12px;
    padding: 5px 5px 5px 20px;
    margin-top: 5px;
`;

export const InputText = styled.textarea`
    display: flex;
    width: 100%;
    height: 100px;
    border-radius: 5px;
    background-color: #F5F5F5;
    border: 1px solid #909090;
    color: #0009;
    font-size: 12px;
    padding: 5px 5px 5px 20px;
    margin-top: 5px;
`;

export const Register = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    color: #FFF;
    background-color: #00713C;
    border: none;
    padding: 10px;
    transition: 0.5s all;
    margin: 20px;

    &:hover{
        transition: 0.5s all;
        background-color: #004f2a;
    }
`;

export const Back = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    color: #E54;
    background-color: #FFF;
    border: 1px solid #E54;
    padding: 10px;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        background-color: #E54;
        color: #FFF;
    }
`;