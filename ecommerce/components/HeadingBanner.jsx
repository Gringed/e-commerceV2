import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { urlFor } from "../lib/client";
const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";

const Container = styled.div`
  padding: 50px 0;
  background-color: ${ColorBg};
  position: relative;
  height: 35vh;
  line-height: 0.9;
  width: 100%;
`;
const Banner = styled.div`
  padding: 25px 50px;
`;
const SmallText = styled.p`
  font-size: 20px;
  margin: 0;
  color: ${ColorTer};
  text-transform: uppercase;
`;
const MidText = styled.h2`
  margin: 0;
  font-size: 50px;
  color: ${ColorPrim};
  text-transform: uppercase;
  padding: 10px 0;
`;
const LargeText = styled.p`
  margin: 0;
  font-size: 70px;
  color: ${ColorSec};
  text-transform: uppercase;
  padding: 10px 0;
  font-weight: bold;
`;
const Image = styled.img`
  position: absolute;
  top: 0%;
  right: 20%;
  height: 100%;
  object-fit: cover;
`;
const LinkContainer = styled.div``;
const Button = styled.button`
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
const Description = styled.div`
  position: absolute;
  right: 10%;
  bottom: 5%;
  line-height: 0.1;
  display: flex;
  flex-direction: column;
  color: ${ColorTer};
  align-items: flex-end;
`;
const Text = styled.p`
  font-size: ${(props) => (props.cat === "titre" ? "30px" : "14px")};
`;

const HeadingBanner = ({banner}) => {
  return (
    <Container>
      <Banner>
        <SmallText>{banner.smallText}</SmallText>
        <MidText>{banner.midText}</MidText>
        <LargeText>{banner.largeText1}</LargeText>
        <Image src={urlFor(banner.image)} alt="Image nouveauté" />
        <LinkContainer>
          <Link href={`/product/${banner.slug.current}`}>
            <Button type="button">{banner.buttonText}</Button>
          </Link>
          <Description>
            <Text cat="titre">Description</Text>
            <Text cat="paraph">{banner.desc}</Text>
          </Description>
        </LinkContainer>
      </Banner>
    </Container>
  );
};

export default HeadingBanner;
