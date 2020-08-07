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
    width: 70%;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 20px;

    @media only screen and (max-width: 600px){
        width: 90%;
    }
`;

export const Title = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    color: #0009;
`;

export const Subtitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #0007;
    margin-top: 10px;
`;

export const ListOrders = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: auto;
    margin-top: 50px;

    @media only screen and (max-width: 600px){
        width: 100%;
    }
`;

export const Back = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #0009;
    cursor: pointer;
    transition: 0.5s all;
    font-size: 14px;
    margin-top: 50px;
    margin-bottom: 20px;

    &hover{
        transition: 0.5s all;
        color: #000;
    }
`;

export const PaginationControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  margin-top: 40px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    padding: 10px;
  }
`;