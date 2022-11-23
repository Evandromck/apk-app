import React from "react";
import styled from "styled-components/native";
import PointsReportComponents from "../components/PointsReportComponents";

export default function PointsReport() {
  const Container = styled.SafeAreaView`
    height: 100%;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;

  return (
    <Container>
      <PointsReportComponents />
    </Container>
  );
}
