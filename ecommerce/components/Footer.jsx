import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { urlFor } from "../lib/client";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMap,
  BsPhone,
  BsTwitter,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";

const Container = styled.div`
  display: flex;
  background: ${ColorBg};
  flex-wrap: wrap;
  padding: 0 50px;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.h1`
  color: ${ColorTer};
  border-bottom: 5px solid ${ColorPrim};
  text-transform: uppercase;
`;

const Description = styled.p`
  color: ${ColorTer};
  margin: 20px 0;
  text-align: justify;
`;

const LinkMentions = styled.span`
  text-decoration: none;
  color: ${ColorPrim};
  font-weight: bold;
  padding: 5px 0;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${ColorTer};
    transition: width 500ms ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #${(props) => props.color};
  color: ${ColorSec};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  color: ${ColorTer};
  border-bottom: 5px solid ${ColorPrim};
  text-transform: uppercase;
  margin: 30px 0 30px 0;
`;
const List = styled.ul`
  margin: 20px 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  color: ${ColorTer};
`;
const ListItem = styled.li`
  margin: 0 35px 10px 0;
  cursor: pointer;
  padding: 0 0 5px 0;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${ColorPrim};
    transition: width 500ms ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContactItem = styled.div`
  display: flex;
  margin: 20px 0 5px 0;
  align-items: center;
  color: ${ColorTer};
`;

const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  
    return (
      <Container>
        <Left>
          <Logo>Mooney</Logo>
          <Description>
            Retrouve nous sur les réseaux sociaux afin de ne manquer aucune
            actualités ©Copyright <br />{" "}
            <Link href={"/terms"}>
              <LinkMentions>Mentions Légales</LinkMentions>
            </Link>
          </Description>
          <SocialContainer>
            <SocialIcon color="3b5998">
              <BsFacebook />
            </SocialIcon>
            <SocialIcon color="e4405f">
              <BsInstagram />
            </SocialIcon>
            <SocialIcon color="00acee">
              <BsTwitter />
            </SocialIcon>
            <SocialIcon color="0e76a8">
              <BsLinkedin />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Liens utiles</Title>
          <List>
            <ListItem>Accueil</ListItem>
            <ListItem>Panier</ListItem>
            <ListItem>Nouveautés</ListItem>
            <ListItem>Favoris</ListItem>
            <ListItem>Mon compte</ListItem>
            <ListItem>Conditions d'utilisations</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <BsMap style={{ marginRight: "10px" }} /> 23 rue du nombre, Jim Carrey
            171962
          </ContactItem>
          <ContactItem>
            <BsPhone style={{ marginRight: "10px" }} /> +33 6 66 66 66 66
          </ContactItem>
          <ContactItem>
            <HiOutlineMail style={{ marginRight: "10px" }} /> contact@mooney23.fr
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };


export default Footer
