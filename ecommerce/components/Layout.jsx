import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ColorPrim = "#db7093";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";

const Container = styled.div`
`;
const Header = styled.header``;
const Main = styled.main``;
const FooterContainer = styled.footer``;

const Layout = ({children}) => {
  return (
    <Container>
      <Head>
        <title>Mooney</title>
      </Head>
      <Header>
        <Navbar />
      </Header>
      <Main>
        {children}
      </Main>
      <FooterContainer>
      <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Layout;
