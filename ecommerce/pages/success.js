import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import { useStateContext } from "../context/StateContext";

import { runFireworks } from "../lib/utils";

const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";

const Wrapper = styled.div`

`;
const SuccessDiv = styled.div`
  margin: 160px 0;
  background-color: ${ColorBg};
  padding: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Icon = styled.p`
  color: green;
  font-size: 40px;
`;
const Title = styled.span`
  text-transform: capitalize;
  margin-top: 15px 0px;
  font-weight: 900;
  font-size: 30px;
  text-align: center;
  color: ${ColorTer};
`;
const Message = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 10px;
  margin-top: 30px;
`;
const Email = styled.a`
  margin-left: 5px;
  color: ${ColorPrim};
`;

const Button = styled.button`
  width: 100%;
  max-width: 300px;
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

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0)
    setTotalQuantities(0);
    runFireworks();
  }, [])

  return (
    <Wrapper>
      <SuccessDiv>
        <Icon>
          <BsBagCheckFill />
        </Icon>
        <Title>Merci pour votre commande !</Title>
        <Message>Vérifiez votre boîte mail pour la confirmation</Message>
        <Description>
          Si vous avez la moindre question, contactez
          <Email href="mailto:contact@mooney23.fr">contact@mooney23.fr</Email>
        </Description>
        <Link href="/">
            <Button>
                Continuer les achats
            </Button>
        </Link>
      </SuccessDiv>
    </Wrapper>
  );
};

export default Success;
