import React from 'react'
import styled from "styled-components";
import Link from 'next/link';
import { urlFor } from '../lib/client';

const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";

const Container = styled.div`
  
`;
const ProductCard = styled.div`
  
`;
const Image = styled.img`
  
`;

const Product = ({product: {image, name, slug, price}}) => {
  return (
    <Container>
       <Link href={`/product/${slug.current}`}>
          <ProductCard>
            <Image />
          </ProductCard>
       </Link>
    </Container>
  )
}

export default Product
