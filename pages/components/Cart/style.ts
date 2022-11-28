import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 486px;
  right: ${(props?: any) => (props.cart ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  @media (max-width: 768px) {
    width: 90%;
    animation: 0s;

  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 486px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 22px 0 47px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 27px;
  color: #fff;
  width: 50%;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
`;

export const Confirm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  height: 90px;
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CartItems = styled.div`
  padding: 10px 30px;
  height: 100%;
  overflow: auto;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 95px;
  margin-bottom: 28px;
  background-color: #ffffff;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 220px;
  }
`;
export const Photo = styled.img`

  height: 100%;
  object-fit: cover;
  padding: 10px 0 10px 8px;
  @media (max-width: 768px) {
    height: 50%;

  }
`;
export const ProductName = styled.p`
  flex: 2;
  font-weight: 400;
  font-size: 13px;
  text-align: left;
  color: #2c2c2c;
  padding: 0 10px;
  @media (max-width: 468ox) {
    font-size: 22px;
    padding: 0 0px;
    text-align: center;
    background-color: red;
    width: 100%;

  }
`;
export const QuantityContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;

    flex: 0;
    margin-right: 20px;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Amount = styled.div`
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;

  @media (max-width: 768px) {
    width: 100px;
    height: 34px;
  }
`;

export const Decrement = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Quantity = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #000000;
  padding: 0 5px;
  border-right: 0.3px solid #bfbfbf;
  border-left: 0.3px solid #bfbfbf;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Increment = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Price = styled.span`
  flex: 1;
  font-weight: 700;
  font-size: 14px;
  color: #000;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 22px;
    background-color: #373737;
    border-radius: 8px;
    color: #fff;
    flex: 0;
    padding: 5px 10px;

  }
`;

export const ProductItem = styled.div`
  display: flex;
`;

export const RemoveButton = styled.button`
  height: 18px;
  width: 18px;
  color: #fff;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  margin-left: -10px;
  margin-top: -5px;
  cursor: pointer;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 32px 44px 32px;
  color: #fff;
  font-weight: 700;
  font-size: 28px;

  @media (max-width: 768px) {

    padding: 10px 32px 10px 32px;
  }
`;

export const QuantityAndAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  @media (max-width: 768px) {
    width: 100%;

  }
`;

export const TotalPrice = styled.span``;