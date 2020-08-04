import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

export const FixedSlider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100vw;
    height: auto;
    margin-top: 100px;
    flex-wrap: wrap;
    background-image: linear-gradient(#00713C, #4DA250);

    @media only screen and (max-width: 700px){
        background-image: none;
    }
`;

export const Imagem = styled.img`
    display: flex;
    width: 50%;
    height: auto;
`;

export const TextSlider = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    height: auto;
    min-width: 350px;
    padding: 10px;
    cursor: default;

    @media only screen and (max-width: 700px){
        background-image: linear-gradient(#00713C, #4DA250);
        width: 100%;
    }
`;

export const Subtitle = styled.span`
    display: flex;
    font-size: 18px;
    color: #FFF9;
    margin-bottom: 50px;
    margin-left: 30px;
    cursor: default;

    @media only screen and (max-width: 920px){
        margin-bottom: 20px;
        margin-left: 30px;
        font-size: 14px;
    }
`;

export const Title = styled.span`
    font-size: 30px;
    font-weight: 800;
    color: #FFF;
    margin-left: 30px;
    cursor: default;

    @media only screen and (max-width: 920px){
        font-size: 20px;
    }
`;

export const Text = styled.span`
    display: flex;
    font-size: 14px;
    color: #FFF9;
    margin-top: 30px;
    margin-left: 30px;
    cursor: default;

    @media only screen and (max-width: 920px){
        margin-top: 10px;
        font-size: 12px;
    }
`;

export const ButtonsSlider = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;

    @media only screen and (max-width: 920px){
        margin-top: 20px;
    }
`;

export const ButtonNav = styled.button`
    display: flex;
    padding: 5px 20px 5px 20px;
    border-radius: 100px;
    background-color: #FFF;
    color: #00713C;
    margin-left: 50px;
    font-size: 12px;
    font-weight: 600;

    &:hover{
        background-color: #FFF9;
    }

    @media only screen and (max-width: 920px){
        padding: 5px 10px 5px 10px;
        margin-left: 20px;
    }
`;

export const AboutPlan = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    max-height: 120vh;
    flex-direction: column;
`;

export const ImgPlan = styled.img`
    display: flex;
    max-width: 100vw;
    width: 100vw;
    height: auto;
`;

export const ButtonPlan= styled.button`
    display: flex;
    position: absolute;
    margin-top: -80px;
    padding: 20px 50px 20px 50px;
    border-radius: 100px;
    background-color: #00713C;
    color: #FFF;
    font-size: 20px;
    font-weight: 600;
    transition: 0.5s all;
    z-index: -1;

    &:hover{
        transition: 0.5s all;
        box-shadow: 1px 1px 10px 1px #00713C;
        color: #FFF;
    }

    @media only screen and (max-width: 920px){
        padding: 15px 30px 15px 30px;
        margin-top: -20px;
        font-size: 16px;
    }
`;

export const ProductList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    flex-wrap: wrap;
    height: auto;
    margin-top: 150px;
    margin-bottom: 50px;
`;