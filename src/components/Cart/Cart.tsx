import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/cartSlice";
import {
  Amount,
  CartItems,
  CloseButton,
  Container,
  Decrement,
  Increment,
  Info,
  Label,
  Photo,
  Price,
  ProductContainer,
  ProductItem,
  ProductName,
  Quantity,
  QuantityAndAmountContainer,
  QuantityContainer,
  RemoveButton,
  Title,
  TotalContainer,
  TotalPrice,
  Confirm,
} from "./style";


const Cart = ({ active }: any) => {
  const cart: any[] = useSelector((state: { cart: any[] }) => state.cart);

  const closeCart = () => {
    active(false);
  };

  const dispatch = useDispatch();

  const handleConfirmBuy = () => {
    Swal.fire({
      icon: "success",
      title: "Parabens",
      text: "Compra efetuada com sucesso!",
    });
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator: number, item: { quantity: number; price: number }) =>
        accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    //@ts-ignore
    <Container cart={active}>
      <Info>
        <Title>Carrinho de compras</Title>
        <CloseButton onClick={closeCart}>X</CloseButton>
      </Info>
      <CartItems>
        {cart.map((product) => {
          return (
            <>
              <ProductItem>
                <ProductContainer key={product?.id}>
                  <Photo src={product?.photo} alt={product?.name} />
                  <ProductName>{product.name}</ProductName>
                  <QuantityAndAmountContainer>
                    <QuantityContainer>
                      <Label>Qtd:</Label>
                      <Amount>
                        <Decrement
                          onClick={() =>
                            dispatch(decrementQuantity(product?.id))
                          }
                        >
                          -
                        </Decrement>
                        <Quantity>{product?.quantity}</Quantity>
                        <Increment
                          onClick={() =>
                            dispatch(incrementQuantity(product?.id))
                          }
                        >
                          +
                        </Increment>
                      </Amount>
                    </QuantityContainer>

                    <Price>R${product?.price * product?.quantity}</Price>
                  </QuantityAndAmountContainer>
                </ProductContainer>
                <RemoveButton
                  onClick={() => dispatch(removeFromCart(product?.id))}
                >
                  x
                </RemoveButton>
              </ProductItem>
            </>
          );
        })}
      </CartItems>

      <TotalContainer>
        Total:
        <TotalPrice>R${getTotalPrice()}</TotalPrice>
      </TotalContainer>
      <Confirm onClick={handleConfirmBuy}>Finalizar Compra</Confirm>
    </Container>
  );
};

export default Cart;
