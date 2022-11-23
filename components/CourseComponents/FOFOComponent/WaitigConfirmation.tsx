import React, { useState } from "react";
import styled from "styled-components/native";

const BackgroundContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 30%;
  background:#FFFFFF;
`
const ImageCourses = styled.Image`
  width:100%;
  height:250%;
  margin-top:10%;
  margin-left:-110%;
  border-radius: 15px;
`
const ImageCourses2 = styled.Image`
  width:100%;
  height:250%;
  margin-top:10%;
  margin-left:10%;
  border-radius: 15px;
`


export default function WaitigConfirmationComponents() {
  return (
    <>
     <BackgroundContainer>
        <ImageCourses source={require("../../../assets/images/fofo.jpg")} />
        <ImageCourses2 source={require("../../../assets/images/fofo.jpg")} />
        
     </BackgroundContainer>
    </>
  );
}
