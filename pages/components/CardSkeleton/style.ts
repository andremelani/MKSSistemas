import styled from "styled-components";

export const PrincipalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const ProductImage = styled.div`
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    padding: 0px 14px;
    width: 90%;
  }
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
