import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import CourseComponents from "../components/CourseComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";

export default function Course({ navigation }: RootTabScreenProps<"Course">) {
  const { state, dispatch } = useContext(InputValueContext);

  const Container = styled.View`
    flex: 1;
    margin-top: -14%;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;

  return (
    <Container>
      <CourseComponents />
    </Container>
  );
}
