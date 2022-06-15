import React from "react";
import styled from "styled-components";
import { client } from "../lib/client";
import { FooterBanner, HeadingBanner, Navbar } from "../components";

const ColorPrim = "#db7093";
const ColorSec = "whitesmoke";

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
        <H2Heading>Meilleurs ventes</H2Heading>
        <PHeading>Voici les meilleurs ventes du mois</PHeading>
      </ProductHeading>
      <ProductsContainer>
        {products?.map((item) => (
          item.name
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
