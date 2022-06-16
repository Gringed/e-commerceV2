import React from "react";
import styled from "styled-components";
import { client } from "../lib/client";
import { FooterBanner, HeadingBanner, Navbar, Product } from "../components";

const ColorPrim = "#db7093";
const ColorSec = "#18191a";

const ProductHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H2Heading = styled.h2`
  color: ${ColorPrim};
  font-size: 40px;
`;
const PHeading = styled.p`
  color: ${ColorSec};
`;
const Home = ({ products, banner }) => {
  return (
    <>
      <HeadingBanner banner={banner.length && banner[0]}/>
      <ProductHeading>
        <H2Heading>Meilleures ventes</H2Heading>
        <PHeading>Voici les meilleures ventes du mois</PHeading>
      </ProductHeading>
      <ProductsContainer>
        {products?.map((item) => (
          <Product key={item._id} product={item}/>
        ))}
      </ProductsContainer>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  return {
    props: { products, banner },
  };
};

export default Home;
