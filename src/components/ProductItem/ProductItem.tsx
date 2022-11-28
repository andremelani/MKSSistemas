import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import {
  Container,
  ProductImage,
  Info,
  Title,
  PriceArea,
  Price,
  Description,
  Button,
  Icon,
} from "./style";




const ProductItem = ({ item }: any) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item }));
  };
  return (
    <Container>
      <ProductImage src={item?.photo} alt={item?.name} />
      <Info>
        <Title>{item?.name}</Title>
        <PriceArea>
          <Price>R${parseInt(item?.price).toFixed(0)}</Price>
        </PriceArea>
      </Info>
      <Description>{item?.description}</Description>
      <Button onClick={handleAddToCart}>
        <Icon src="/images/shopping-bag.png" />
        COMPRAR
      </Button>
    </Container>
  );
};

export default ProductItem;
