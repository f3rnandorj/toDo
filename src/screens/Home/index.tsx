import React from "react";
import { Header } from "../../components/Header";
import { Container, Line } from "./styles";
import { Form } from "../../components/Form";
import { Resume } from "../../components/Resume";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Form />
        <Resume />

        <Line />
      </Container>
    </>
  );
}
