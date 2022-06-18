import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { urlFor } from "../lib/client";

const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";

const Container = styled.div`
`;
const ProductCard = styled.div`
  cursor: pointer;
  transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s;
  color: ${ColorTer};
  margin: 0 10px;
  &:hover {
    transform: scale(1.05);
  }
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  background: ${ColorBg};
  border-radius: 20px;
  box-shadow: inset 0px 0px 4px -1px ${ColorSec};
`;
const ProductName = styled.p`
  margin: 2px 0;
  font-weight: 500;
  font-size: 17px;
`;
const ProductPrice = styled.p`
  margin: 5px 0;
  font-weight: bold;
  font-size: 20px;
`;

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <Container>
      <Link href={`/product/${slug.current}`}>
        <ProductCard>
          <Image src={urlFor(image && image[0])} />
          <ProductName>{name}</ProductName>
          <ProductPrice>{price}€</ProductPrice>
        </ProductCard>
      </Link>
    </Container>
  );
};

export default Product;
