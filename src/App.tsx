import React from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./App.css";

function App(): JSX.Element {
  return (
    <Container>
      <Header></Header>
      <Body name="Clarre"></Body>
      <Footer></Footer>
    </Container>
  );
}

export default App;
