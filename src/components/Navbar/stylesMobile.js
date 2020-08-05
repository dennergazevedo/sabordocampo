import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100px;
    background-color: #FFF;
    box-shadow: 1px 1px 10px 1px #0003;
    flex-direction: row;
    z-index: 10;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 30px;
    font-size: 24px;
    color: #0007;
`;

export const MenuToggle = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #0003;
    width: 100vw;
    height: 100vh;
    transition: 0.5s all;
    z-index: 11;
`;

export const MenuOpen = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding: 20px;
    left: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    background-color: #FFF;
    box-shadow: 1px 1px 10px 1px #0003;
    transition: 0.5s all;
`;

export const Divider = styled.hr`
    display: flex;
    width: 80%;
    border-bottom: 1px solid #0003;
    margin: 10px;
`;

export const Exit = styled(motion.div)`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #0003;
    width: calc(100vw - 300px);
    height: 100vh;
`;

export const Logomarca = styled.img`
    height: 50px;
    width: auto;
    margin: 30px;
`;

export const ItemMenu = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    height: 50px;
    font-size: 12px;
    color: #0007;
    font-weight: 600;

    &:hover{
        cursor: pointer;
        color: #0009;
    }
`;

export const Superior = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Inferior = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 50px;
`;

export const SignIn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 40px;
    border: 1px solid #0005;
    border-radius: 5px;
    color: #0007;
    background-color: #FFF;
    font-size: 12px;
    font-weight: 600;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        background-color: #0007;
        color: #FFF;
    }
`;