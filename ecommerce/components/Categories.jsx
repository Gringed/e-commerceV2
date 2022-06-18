import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { urlFor } from "../lib/client";

const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc70";

const Categorie = styled.div`
  cursor: pointer;
  display: flex;
  margin: 20px;
  padding: 80px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-image: url(${(props) => props.back});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${ColorSec};
  transition: all ease-in-out 0.3s;
  color: ${ColorTer};
  box-shadow: 0px 0px 5px -1px ${ColorPrim};
  &:hover {
    transform: scale(1.05);
    background-image: none;
    background: ${ColorPrim};
    opacity: 0.6;
  }
`;
const CategorieTitle = styled.p`
  font-size: 17px;
  text-transform: uppercase;
  padding: 15px;
  background: ${ColorSec};
  border-radius: 15px;
  box-shadow: 0px 0px 5px -1px ${ColorTer};
  font-weight: 800;
`;

const Categories = ({ category }) => {
  return (
    <Link href={`/categorie/${category.name}`}>
      <Categorie back={urlFor(category.image)}>
        <CategorieTitle>{category.name}</CategorieTitle>
      </Categorie>
    </Link>
  );
};

export default Categories;
