import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { client, urlFor } from "../../lib/client";
import { BsPlus, BsDash, BsFillStarFill, BsStar } from "react-icons/bs";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";

const Container = styled.div`
  display: flex;
  gap: 40px;
  margin: 40px;
  margin-top: 60px;
`;
const BlocImages = styled.div``;
const ContainerImage = styled.div`
  border-radius: 15px;
  background-color: ${ColorBg};
  width: 400px;
  height: 400px;
  cursor: pointer;
`;
const ImageGrande = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ImageSmallSelected = styled.img`
  border-radius: 8px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  background-color: ${ColorPrim};
  transition: all 0.3s ease-in-out;
`;
const ImageSmall = styled.img`
  border-radius: 8px;
  background-color: ${ColorBg};
  width: 70px;
  height: 70px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
const ContainerSmallImages = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
`;
const ProductDetailsDesc = styled.div``;

const Name = styled.h1`
  color: ${ColorTer};
  margin: 0;
`;

const Review = styled.div`
  color: ${ColorPrim};
  margin-top: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
`;
const Span = styled.span`
  color: ${ColorTer};
`;

const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;
const ColorsTitle = styled.div`
  flex: 1;
  font-size: 20px;
`;
const Colors = styled.div`
  margin: 0 0 0 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;
const SizeTitle = styled.div`
  flex: 1;
  font-size: 20px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid ${ColorTer};
  font-family: "Quicksand", sans-serif;
`;

const Size = styled.option`
  padding: 10px;
  border-radius: 50%;
`;

const Price = styled.p`
  color: ${ColorTer};
  font-size: 35px;
  font-weight: 800;
  margin: 0;
`;
const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > h3 {
    color: ${ColorTer};
  }
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

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  user-select: none;
`;
const AddToCart = styled.button`
  width: 220px;
  padding: 10px 20px;
  border: 1px solid ${ColorPrim};
  margin-top: 40px;
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
  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
  }
`;
const BuyNow = styled.button`
  width: 220px;
  padding: 10px 20px;
  background-color: ${ColorPrim};
  color: ${ColorSec};
  border: none;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1, 1.1);
    color: ${ColorSec};
    background: ${ColorPrim};
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
  }
`;
const Details = styled.div`
  color: ${ColorTer};
  display: flex;
  flex-direction: column;
  margin: 40px;
  margin-bottom: 60px;
`;
const Hr = styled.hr`
  border: 1px solid ${ColorBg};
`;
const AlsoLike = styled.div`
  text-align: center;
  margin: 50px 0;
  & > h2 {
    color: ${ColorTer};
  }
`;

const Marquee = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  overflow-x: hidden;
`;
const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;
const MayLikeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 15s linear infinite;
  width: 180%;
  &:hover {
    animation-play-state: paused;
  }
`;
const Track = styled.div`
  display: flex;
`;

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, colors, size } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, setSize, onAdd, oneSize, setShowCart } =
    useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };
  return (
    <>
      <Container>
        <BlocImages>
          <ContainerImage>
            <ImageGrande src={urlFor(image && image[index])} />
          </ContainerImage>
          <ContainerSmallImages>
            {image?.map((item, i) =>
              i === index ? (
                <ImageSmallSelected
                  src={urlFor(item)}
                  key={item._key}
                  onMouseEnter={() => setIndex(i)}
                />
              ) : (
                <ImageSmall
                  src={urlFor(item)}
                  key={item._key}
                  onMouseEnter={() => setIndex(i)}
                />
              )
            )}
          </ContainerSmallImages>
        </BlocImages>
        <ProductDetailsDesc>
          <Name>{name}</Name>
          <Review>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsStar />
            <Span>(20)</Span>
          </Review>
          <ColorsContainer>
            <ColorsTitle>Couleurs</ColorsTitle>
            {colors?.map((color) => (
              <Colors key={color._key} color={color.hex} />
            ))}
          </ColorsContainer>
          <SizeContainer>
            <SizeTitle>Taille</SizeTitle>
            <Select defaultValue={"choix"} onChange={setSize}>
              <option disabled value="choix">
                Choisir une taille
              </option>
              {size?.map((item, i) => (
                <Size value={item} key={i}>
                  {item}
                </Size>
              ))}
            </Select>
          </SizeContainer>
          <Price>{price}€</Price>
          <Quantity>
            <h3>Quantité :</h3>
            <QuantityDesc>
              <span className="less" onClick={decQty}>
                <BsDash />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <BsPlus />
              </span>
            </QuantityDesc>
          </Quantity>
          <Buttons>
            {!oneSize ? (
              <AddToCart disabled onClick={() => onAdd(product, qty, oneSize)}>
                Ajouter au panier
              </AddToCart>
            ) : (
              <AddToCart onClick={() => onAdd(product, qty, oneSize)}>
                Ajouter au panier
              </AddToCart>
            )}
            {!oneSize ? (
              <BuyNow onClick={handleBuyNow} disabled>
                Acheter maintenant
              </BuyNow>
            ) : (
              <BuyNow onClick={handleBuyNow}>Acheter maintenant</BuyNow>
            )}
          </Buttons>
        </ProductDetailsDesc>
      </Container>
      <Details>
        <b style={{ color: ColorTer }}>Description :</b> {details}
      </Details>
      <Hr />
      <AlsoLike>
        <h2>Vous aimeriez peut être . . .</h2>
        <Marquee>
          <MayLikeContainer>
            <Track>
              {products?.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </Track>
          </MayLikeContainer>
        </Marquee>
      </AlsoLike>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug{
            current
        }
    }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
