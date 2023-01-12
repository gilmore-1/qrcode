import { useState } from "react";
import "./App.css";
import { Card, QrImage, Heading, Paragraps } from "./components/Cardstyled";
import qrImage from "./assets/images/image-qr-code.png";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/defaultTheme";
import GlobalStyles from "./components/GlobalSyles";
import { Helmet } from "react-helmet";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Space+Mono:wght@700&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
      </Helmet>
      <Card>
        <QrImage src={qrImage}></QrImage>
        <Heading>Improve your front-end skills by building projects</Heading>
        <Paragraps>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Paragraps>
      </Card>
    </ThemeProvider>
  );
}

export default App;
