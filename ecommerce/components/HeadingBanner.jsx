import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { urlFor } from "../lib/client";
const ColorPrim = "#db7093";
const ColorSec = "whitesmoke";
const ColorTer = "#18191a";
const ColorBg = "#242424";

const Container = styled.div`
  padding: 50px 0;
  background-color: ${ColorBg};
  border-radius: 15px;
  position: relative;
  height: 40vh;
  line-height: 0.9;
  width: 100%;
`;
const Banner = styled.div`
  padding: 20px;
`;
const SmallText = styled.p`
  font-size: 20px;
  margin: 0;
  color: ${ColorSec};
`;
const MidText = styled.h2`
  margin: 0;
  font-size: 40px;
  color: ${ColorPrim};
  text-transform: uppercase;
  padding: 10px 0;
`;
const Image = styled.img`
  position: absolute;
  top: 0%;
  right: 20%;
  height: 350px;
  object-fit: cover;
`;
const LinkContainer = styled.div``;
const Button = styled.button`
  margin: 15px 0;
  padding: 10px;
  background: ${ColorPrim};
  border: none;
  color: ${ColorTer};
  font-weight: 500;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Quicksand',serif;
`;
const Description = styled.div`
  position: absolute;
  right: 10%;
  bottom: 5%;
  line-height: 0.1;
  display: flex;
  flex-direction: column;
  color: ${ColorSec};
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
        <Image src={urlFor(banner.image)} alt="Image Meilleurs ventes" />
        <LinkContainer>
          <Link href={`/product/${banner._id}`}>
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
