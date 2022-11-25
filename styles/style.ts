import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 116px 250px;
  
  @media (max-width: 768px) {
    padding: 18px 62px;
  }
`;