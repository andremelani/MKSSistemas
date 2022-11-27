import React, { useState } from "react";

import Cart from "../Cart/Cart";
import {useSelector } from "react-redux";
import { Container, Icon, Info, Left, Logo, Right } from "./style";


interface Product {
  quantity: string;
}

interface RootState {
  cart: any[]
}


const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => setCartOpen(!cartOpen);

  const cart = useSelector((state:RootState) => state.cart);

  const getItemsCount = () => {
    return cart.reduce(
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
      {cartOpen && <Cart active={setCartOpen} />}
    </Container>
  );
};

export default Navbar;
