import React from "react";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Resume } from "../../components/Resume";
import { CardList } from "../../components/CardList";

import { Container, Line } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Form />
        <Resume />
        <Line />
        <CardList />
      </Container>
    </>
  );
}
