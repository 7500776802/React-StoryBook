import React from "react";
import { storiesOf } from "@storybook/react";
import { Wrapper, Form } from "../../styles";
import { action } from "@storybook/addon-actions"
import boatImage from "../../assets/boatImage.jpg";
import {Jumbotron as Jumbo,Container} from 'react-bootstrap'
import styled from "styled-components";
import HorizontalInputField from "./index";
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
storiesOf("MAC", module).add(
  "Form",
  () => (
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
      <Form>
        <HorizontalInputField
          id="email-input-field"
          name="email"
          label="Email:"
          onChange={action("item changed")}
        />
         <HorizontalInputField
          id="password-input-field"
          name="password"
          label="Password:"
          onChange={action ("item Changed")}
        />
        <HorizontalInputField
          id="password-confirmation-input-field"
          name="password_confirmation"
          label="Confirm Password:"
          onChange={action ("item changed")}
        />
        <HorizontalInputField
          id="phone-input-field"
          name="phone"
          
          label="Phone:"
          onChange={action ("item changed")}
        />
      </Form>
    </Wrapper>
  )
);