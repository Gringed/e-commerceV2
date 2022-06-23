import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { BiShoppingBag } from "react-icons/bi";
import {Cart} from './';
import { useStateContext } from "../context/StateContext";

const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 50px;
  align-items: center;
`;
const Logo = styled.p`
  font-family: "Righteous", sans-serif;
  font-size: 50px;
  padding: 0;
  margin: 20px 0;
  transition: transform 0.4s ease;
  &:hover{
    transform: scale(1.1);
  }
`;
const CartPart = styled.div`
  
`;
const Button = styled.button`
  font-size: 30px;
  color: ${ColorTer};
  cursor: pointer;
  position: relative;
  transition: transform 0.4s ease;
  border: none;
  background-color: transparent;
  &:hover{
    transform: scale(1.1);
  }
`;
const Span = styled.span`
  position: absolute;
  right: -8px;
  top: -5px;
  font-size: 14px;
  color: ${ColorSec};
  background-color: #f02d34;
  width: 18px;
  height: 18px;
  padding: 2px;
  border-radius: 50%;
  text-align: center;
  font-weight: 600;
`;

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <Container>
      <Logo>
        <Link href="/">Mooney</Link>
      </Logo>
      <CartPart>
        <Button onClick={() => setShowCart(showCart ? false : true)}>
          <BiShoppingBag />
          <Span>{totalQuantities}</Span>
        </Button>
        {showCart && <Cart />}
      </CartPart>
    </Container>
  );
};

export default Navbar;
