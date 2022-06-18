import React from "react";
import styled from "styled-components";
import { client } from "../lib/client";
import {
  Categories,
  Footer,
  HeadingBanner,
  Navbar,
  Product,
} from "../components";

const ColorPrim = "#db7093";
const ColorSec = "#18191a";
const ContainerCategory = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ProductHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 90px;
`;
const H2Heading = styled.h2`
  color: ${ColorPrim};
  font-size: 40px;
`;
const PHeading = styled.p`
  color: ${ColorSec};
`;
const Home = ({ products, banner, cat }) => {
  return (
    <>
      <HeadingBanner banner={banner.length && banner[0]} />
      <ContainerCategory>
      {cat?.map((item) => (
        <Categories key={item._id} category={item}/>
      ))
      }
      </ContainerCategory>
      <ProductHeading>
        <H2Heading>Derniers articles</H2Heading>
        <PHeading>Voici les derniers articles ajoutés</PHeading>
      </ProductHeading>
      {/* FAIRE LA PAGE DE CHAQUE CATEGORIE RELIE A LA DB */}
      <ProductsContainer>
        {products?.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </ProductsContainer>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  const catQuery = '*[_type == "category"]';
  const cat = await client.fetch(catQuery);

  return {
    props: { products, banner, cat },
  };
};

export default Home;
