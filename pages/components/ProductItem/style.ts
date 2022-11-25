import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 218px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  padding: 0px 14px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    padding: 0px 14px;
    width: 90%;
  }
`;

export const Icon = styled.img`
  margin-right: 14px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0px 14px;
    margin-bottom: 14px;
  }
`;

export const Title = styled.span`
  color: #2c2c2c;
  font-weight: 400;
  font-size: 16px;
`;

export const PriceArea = styled.div``;

export const Price = styled.div`
  color: #fff;
  background-color: #373737;
  padding: 2px 7px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
`;

export const Description = styled.p`
  color: #2c2c2c;
  font-weight: 300;
  font-size: 10px;

  @media (max-width: 768px) {
    padding: 0px 14px;
    margin-bottom: 14px;
  }
`;

export const Button = styled.button`
  width: 218px;
  height: 32px;
  border-radius: 0 0 8px 8px;
  background-color: #0f52ba;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
