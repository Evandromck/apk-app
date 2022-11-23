import React from "react";
import styled from "styled-components/native";
import AppLogo from "./Applogo";
import EmerjLogo from "./EmerjLogo";

const HeaderContainer = styled.View`
  width: 100%;
  height: 12%; 
  align-items: center;
  flex-direction: row;
  background: #1e2d3e;
  border-bottom-width: 8px;
  border-bottom-color: #b8977e;
  margin-top: -150%;  
  z-index: 1;
`;
const ConatinerLogo = styled.View`
  width: 100%;    
  height: 15%;   
  margin-top: 78%;
  margin-left: -5%;
`;

const ConatinerEmerjLogo = styled.View`
  width: 110%;    
  height: 100%;   
  margin-top: 5%;
  margin-left: 5%;
`;


export default function Header() {
  return (
    <HeaderContainer>
      <ConatinerEmerjLogo>
      <EmerjLogo />
      </ConatinerEmerjLogo>
    

      <ConatinerLogo>
       <AppLogo />  
      </ConatinerLogo>    
    </HeaderContainer>
  );
}
