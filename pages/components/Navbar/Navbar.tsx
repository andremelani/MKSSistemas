import React, { useState } from "react";

import Cart from "../Cart/Cart";
import {useSelector } from "react-redux";
import { Container, Icon, Info, Left, Logo, Right } from "./style";

interface Product {
  quantity: string;
}

const Navbar = () => {
  const [cart, setCart] = useState(false);

  const openCart = () => setCart(!cart);

  const quantity = useSelector((state:any) => state.cart);

  const getItemsCount = () => {
    return quantity.reduce(
      (accumulator: number, item: Product) => accumulator + item.quantity,
      0
    );
  };
  return (
    <Container>
      <Left>
        <Logo>
          MKS <Info>Sistemas</Info>
        </Logo>
      </Left>
      <Right onClick={openCart}>
        <Icon src="/images/cart.png" />
        {getItemsCount()}
      </Right>
      {cart && <Cart active={setCart} />}
    </Container>
  );
};

export default Navbar;
