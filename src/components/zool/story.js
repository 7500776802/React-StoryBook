import boatImage from "../../assets/boatImage.jpg";
import {Jumbotron as Jumbo,Container} from 'react-bootstrap'
import styled from "styled-components";
import React from "react";
import { storiesOf } from "@storybook/react";
import { Wrapper} from "../../styles";
const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    margin-bottom: 20px;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

storiesOf("zool", module) 
.add("evets" , () => (
    <Wrapper>
    <Styles>
     <Jumbo fluid className="jumbo">
       <div className="overlay" />
       <Container>
         <h1>Welcome</h1>
         <p>Adventure</p>
       </Container>
     </Jumbo>
   </Styles>
   </Wrapper>

))
.add("Adventure", ()=> (
  <Wrapper>
  <Styles>
   <Jumbo fluid className="jumbo">
     <div className="overlay" />
     <Container>
       <h1>Welcome</h1>
       <p>Adventure</p>
     </Container>
   </Jumbo>
 </Styles>
 </Wrapper>
));