import React, { useRef } from "react";
import Link from "next/link";
import { BsPlus, BsDash, BsArrowLeft, BsShop } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import styled from "styled-components";

const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";

const Wrapper = styled.div`
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  /* will-change: transform; */
  transition: all 1s ease-in-out;
`;

const Container = styled.div`
  height: 100vh;
  width: 600px;
  background-color: white;
  float: right;
  padding: 40px 10px;
  position: relative;
  user-select: none;
`;
const ArrowLeft = BsArrowLeft;
const IconArrowLeft = styled(ArrowLeft)`
  cursor: pointer;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  gap: 2px;
  margin-left: 10px;
  border: none;
  background-color: transparent;
`;

const Span = styled.span`
  margin-left: 10px;
  ${(props) => props.name === "cart-num-items" && { color: "red" }};
`;
const EmptyCart = styled.div`
  margin: 40px;
  color: ${ColorTer};
  display: flex;
  height: 50vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > p {
    font-weight: 600;
    font-size: 20px;
  }
`;

const ButtonEmpty = styled.button`
  width: 220px;
  padding: 10px 20px;
  border: 1px solid ${ColorPrim};
  font-size: 18px;
  font-weight: 500;
  background-color: ${ColorSec};
  color: ${ColorPrim};
  cursor: pointer;
  transition: all 0.5s ease;
  font-family: "Quicksand", sans-serif;
  &:hover {
    transform: scale(1.1, 1.1);
    color: ${ColorSec};
    background: ${ColorPrim};
    border: 1px solid ${ColorPrim};
  }
`;

const ProductContainer = styled.div`
  margin-top: 15px;
  overflow: auto;
  max-height: 70vh;
  padding: 20px 10px;
`;
const Product = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
`;
const CartProductImg = styled.img`
  width: 200px;
  height: 140px;
  border-radius: 15px;
  background-color: #ebebeb;
  object-fit: contain;
`;
const ItemDesc = styled.div`
  width: 100%;
`;
const FlexTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextItem = styled.p`
  font-size: 20px;
  color: ${ColorTer};
  margin: 0;
  font-weight: bold;
  ${(props) => props.name === "title" && { fontSize: "25px" }};
`;

const FlexBottom = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const QuantityDesc = styled.p`
  margin: 0;
  & > .less,
  .plus {
    color: ${ColorTer};
    font-size: 16px;
    padding: 10px 15px 8px 15px;
    cursor: pointer;
    border: 1px solid ${ColorTer};
    transition: all 0.2s ease-in-out;
    &:hover {
      background: ${ColorPrim};
      color: ${ColorSec};
      border: 1px solid ${ColorPrim};
    }
  }
  & > .num {
    padding: 10px 15px 8px 15px;
    border-top: 1px solid ${ColorPrim};
    border-bottom: 1px solid ${ColorPrim};
    font-size: 16px;
    user-select: none;
  }
`;

const RemoveItem = styled.button`
  font-size: 25px;
  color: red;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
`;
const CartBottom = styled.div`
  position: absolute;
  bottom: 40px;
  width: 90%;
  padding: 50px 20px;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 17px;
  color: ${ColorTer};
`;
const BtnContainer = styled.div`
  width: 400px;
  margin: auto;
`;
const Btn = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  border: 1px solid ${ColorPrim};
  font-size: 18px;
  font-weight: 500;
  background-color: ${ColorPrim};
  color: ${ColorSec};
  text-transform: uppercase;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.5s ease;
  font-family: "Quicksand", sans-serif;
  &:hover {
    transform: scale(1.1, 1.1);
    color: ${ColorSec};
    background: ${ColorPrim};
    border: 1px solid ${ColorPrim};
  }
`;

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove
  } = useStateContext();
  return (
    <Wrapper ref={cartRef}>
      <Container>
        <Button>
          <IconArrowLeft onClick={() => setShowCart(false)} />
          <Span name="heading">Votre panier</Span>
          <Span name="cart-num-items">
            ({totalQuantities} article{totalQuantities > 1 && "s"})
          </Span>
        </Button>
        {cartItems.length < 1 && (
          <EmptyCart>
            <BsShop size={150} color={ColorPrim} />
            <p>Votre panier est vide</p>

            <ButtonEmpty name="empty" onClick={() => setShowCart(false)}>
              Continuer les achats
            </ButtonEmpty>
          </EmptyCart>
        )}
        <ProductContainer>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <Product key={item._id}>
                {console.log(item)}
                <CartProductImg src={urlFor(item?.image[0])} />
                <ItemDesc>
                  <FlexTop>
                    <TextItem name="title">{item.name}</TextItem>
                    <TextItem name="price">{item.price}€</TextItem>
                  </FlexTop>
                  <TextItem name="size">{item.oneSize}</TextItem>
                  <FlexBottom>
                    <QuantityDesc>
                      <span
                        className="less"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        <BsDash />
                      </span>
                      <span className="num">{item.quantity}</span>
                      <span
                        className="plus"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        <BsPlus />
                      </span>
                    </QuantityDesc>
                    <RemoveItem onClick={() => onRemove(item._id)}>
                      <TiDeleteOutline />
                    </RemoveItem>
                  </FlexBottom>
                </ItemDesc>
              </Product>
            ))}
        </ProductContainer>
        {cartItems.length >= 1 && (
          <CartBottom>
            <Total>
              <p>Sous-Total</p>
              <p>{totalPrice} €</p>
            </Total>
            <BtnContainer>
              <Btn>Payer avec Stripe</Btn>
            </BtnContainer>
          </CartBottom>
        )}
      </Container>
    </Wrapper>
  );
};

export default Cart;
