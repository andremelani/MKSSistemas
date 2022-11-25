import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { PrincipalContainer, Container, ProductImage, Info } from "./style";



const CardSkeleton = () => {
  return (
    <PrincipalContainer>
      <Container>
        <ProductImage>
          <Skeleton height={120}  style={{ margin: "20px 0px" }} />
          <Skeleton count={4} height={30} />
        </ProductImage>
        <Info>
          <Skeleton />
        </Info>
      </Container>
      <Container>
        <ProductImage>
          <Skeleton height={120}  style={{ margin: "20px 0px" }} />
          <Skeleton count={4} height={30} />
        </ProductImage>
        <Info>
          <Skeleton />
        </Info>
      </Container>
      <Container>
        <ProductImage>
          <Skeleton height={120}  style={{ margin: "20px 0px" }} />
          <Skeleton count={4} height={30} />
        </ProductImage>
        <Info>
          <Skeleton />
        </Info>
      </Container>
      <Container>
        <ProductImage>
          <Skeleton height={120} style={{ margin: "20px 0px" }} />
          <Skeleton count={4} height={30} />
        </ProductImage>
        <Info>
          <Skeleton />
        </Info>
      </Container>
      <Container>
        <ProductImage>
          <Skeleton height={120} style={{ margin: "20px 0px" }} />
          <Skeleton count={4} height={30} />
        </ProductImage>
        <Info>
          <Skeleton />
        </Info>
      </Container>
      <Container>
        <ProductImage>
          <Skeleton height={120}  style={{ margin: "20px 0px" }} />
          <Skeleton count={4} height={30} />
        </ProductImage>
        <Info>
          <Skeleton />
        </Info>
      </Container>
      <Container>
        <ProductImage>
          <Skeleton height={120}  style={{ margin: "20px 0px" }} />
          <Skeleton count={4} height={30} />
        </ProductImage>
        <Info>
          <Skeleton />
        </Info>
      </Container>
      <Container>
        <ProductImage>
          <Skeleton height={120}  style={{ margin: "20px 0px" }} />
          <Skeleton count={4} height={30} />
        </ProductImage>
        <Info>
          <Skeleton />
        </Info>
      </Container>
    </PrincipalContainer>
  );
};

export default CardSkeleton;
