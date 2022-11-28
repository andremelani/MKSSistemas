import styled from "styled-components";

export const Container = styled.div`
  background-color: #0f52ba;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 65px;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 48px;
  }
`;
export const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Logo = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 40px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
  }
`;

export const Info = styled.span`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  @media (max-width: 768px) {
    height: 16px;
  }
`;

export const Right = styled.div`
  height: 45px;
  width: 90px;
  border-radius: 8px;
  background-color: #fff;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 26px;
    width: 52px;
    font-size: 12px;
  }
`;

export const Icon = styled.img`
  margin-right: 16px;
  margin-left: -10px;

  @media (max-width: 768px) {
    width: 12px;
    margin-right: 10px;
    margin-left: -5px;
  }
`;
