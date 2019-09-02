/* eslint-disable no-sequences */
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import React, { Component } from "react";

import { Wrapper } from "../../styles";
// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Styles = styled.div` 
  .jumbo {
    background-color:purple
    background-size: cover;  
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    margin-bottom: 28px;
    height:269px;
  width:100%
  }
  .heading{
    margin-left:10px;  
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
  .form{
    width:100%;
    border:1px solid grey;
    padding: 14px 25px;

  }
  .code{
    // #330033
    background-color:black;
    color:white;
    padding: 21px 80px;
    width:100%;

  }
  .code pre {
    margin: 0px !important;
} 
.code p {
  margin: 0px !important;
} 

// BLUE
.token-keyword{ 
  color:#66d9ef;        
}
// GREEN
.token-string{
  color:#a6e22e;          
}
// WHITE
.token-punctuations{
  color:white;
}
// YELLOW
.token-function{
color:#e6db74;  
}
// RED
.token-class{
  color:#f92672;
}
//purple
.token-number{
  color:pink
}
 
  `;
class Forms extends Component {
  render() {
    return (
      <Wrapper>
        <Styles>
          <Jumbo fluid className="jumbo">
            <div className="overlay" />
            <Container className="heading">
              <h1>Forms</h1>
              <p>
                {" "}
                The FormControl component renders a form control with Bootstrap
                styling. The FormGroup component wraps a form control with
                proper spacing,along with support for a label,help text, and
                validation state. To ensure accessibility,set controlId on
                formGroup, and use FormLabel for the label
              </p>
            </Container>
          </Jumbo>
          <div className="fluid-Container">
            <div className="form justify-content-center">
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectMulti">Select Multiple</Label>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Text Area</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
                  <legend>Radio Buttons</legend>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Option one is this
                      and that—be sure to include why it's great
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Option two can be
                      something else and selecting it will deselect option one
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input type="radio" name="radio1" disabled /> Option three
                      is disabled
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Check me out
                  </Label>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </div>
            <div className="code">
            <pre> 
                    <code>
                      <span className ="token-keyword">import</span> 
                      <span className="token-punctuations"> React </span>
                      <span className ="token-keyword"> from</span> ,
                      <span className = "token-string">'react' ;</span>
                    </code>
                    <br/>
                    <code>
                      <span className= "token-keyword">import</span>
                      <span className="token-punctuations"> {'{ Button,Form,FormGroup,Label,Input,FormText}'}  </span>
                      <span className="token-string"> from</span>
                      <span className="token-string"> {' "reactstrap" ; '}</span>
                    </code>
                    <br/>
                    <br/>
                    <code>
                      <span className= "token-keyword">export</span>
                      <span className="token-keyword"> class </span>
                      <span className="token-keyword"> default </span>
                      <span className="token-punctuations"> Example </span>
                      <span className= "token-keyword">extends</span>
                      <span className="token-punctuations"> React.Component</span>
                      <span className="token-punctuations">{' {'}</span>
                    </code>
                    <br/>
                       <span className="token-function"> render()</span>
                       <span className="token-punctuations">{'{'}</span> <br/>
               
                       <span className= "token-keyword">  return </span>
                       <span className= "token-punctuations"> {'('} </span> <br/>
                       <span className="token-punctuations">    {'<'}</span>
                      <span className="token-class">{'Form'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">        {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleEmail</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">Email</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">email</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">email</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleEmail</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">placeholder</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">with a placeholder</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'/>'}</span> <br/>
                       <span className="token-punctuations">      {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>



                      <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                      <span className="token-punctuations">         {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">examplePassword</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">Password</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">password</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">password</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">examplePassword</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">placeholder</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">Password placeholder</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'/>'}</span> <br/>
                       <span className="token-punctuations">      {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>






                      <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                      <span className="token-punctuations">         {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleSelect</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">Select</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">select</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">select</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleSelect</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">           {'<'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-number">1</span> 
                       <span className="token-punctuations">{'</'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">           {'<'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-number">2</span> 
                       <span className="token-punctuations">{'</'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">           {'<'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-number">3</span> 
                       <span className="token-punctuations">{'</'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                        <span className="token-punctuations">         {'</'}</span>
                      <span className="token-class">{'Input'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">      {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>





                      <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">        {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleText</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">Text Area</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">textarea</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">text</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleText</span>
                       <span className="token-punctuations">{'"'}</span>
                
                       <span className="token-punctuations">{'/>'}</span> <br/>
                       <span className="token-punctuations">      {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>



                      
                      <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">        {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleFile</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">File</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">file</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">file</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleFile</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'/>'}</span> <br/>

                         <span className="token-punctuations">        {'<'}</span>
                      <span className="token-class">{'FormText'}</span> 
                      <span className="token-string"> color</span>
                      <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">muted</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">           {"This is some placeholder block-level text for hte above Input"}</span> <br/>
                       
                       <span className="token-punctuations">          {'</'}</span>
                      <span className="token-class">{'FormText'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>

                       <span className="token-punctuations">       {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>


                      <span className="token-punctuations">     {'</'}</span>
                      <span className="token-class">{'Form'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                      <span className="token-punctuations">   {' );'}</span> <br/>
                      
                      <span className="token-punctuations">{' }'}</span>

                  </pre>



              {/* <p>{"import React from react;"}</p>
              <p>
                {
                  " import { Button, Form, FormGroup, Label, Input, FormText } from reactstrap ; "
                }
              </p>
              <p>{"export default class Example extends React.Component {"}</p>
              <p> {"render(){"} </p>
              <p>{"return ("}</p>
              <p> {"<Form>"} </p>
              <p>{"<FormGroup>"}</p>
              <p>{'<Label for = "exampleEmail"> Email </Label>'}</p>
              <p>
                {
                  '<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />'
                }
              </p>
              <p>{" </FormGroup>"}</p>
              <p>{"  <FormGroup>"}</p>
              <p>{' <Label for="examplePassword">Password</Label>'}</p>
              <p>
                {
                  '  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />'
                }
              </p>
              <p>{"  </FormGroup>"}</p>
              <p>{"<FormGroup>"}</p>
              <p>{' <Label for="exampleSelect">Select</Label>'}</p>
              <p>{'<Input type="select" name="select" id="exampleSelect">'}</p>
              <p>{" <option>1</option>"}</p>
              <p>{" <option>2</option>"}</p>
              <p>{" <option>3</option>"}</p>
              <p>{" <option>4</option>"}</p>
              <p>{"</Input"}</p>
              <p>{"</FormGroup>"}</p>
              <p>{"<FormGroup>"}</p>
              <p>{' <Label for="exampleSelectMulti">Select</Label>'}</p>
              <p>
                {
                  '<Input type="select" name="selectMulti" id="exampleSelectMulti">'
                }
              </p>
              <p>{" <option>1</option>"}</p>
              <p>{" <option>2</option>"}</p>
              <p>{" <option>3</option>"}</p>
              <p>{" <option>4</option>"}</p>
              <p>{"</Input"}</p>
              <p>{"</FormGroup>"}</p>
              <p>{"<FormGroup>"}</p>
              <p> {'<Label for="exampleText">Text Area</Label>'}</p>
              <p>
                {" "}
                {' <Input type="textarea" name="text" id="exampleText" />'}
              </p>
              <p>{" </FormGroup>"}</p>
              <p> {"<FormGroup>"}</p>
              <p>{'  <Label for="exampleFile">File</Label>'}</p>
              <p>{'  <Input type="file" name="file" id="exampleFile" />'}</p>
              <p>{'  <FormText color="muted">'}</p>
              <p>
                {
                  " This is some placeholder block-level help text for the above input Its a bit lighter and easily wraps to a new line."
                }
              </p>
              <p>{"</FormText>"}</p>
              <p>{"</FormGroup>"}</p>
              <p>{' <FormGroup tag="fieldset">'}</p>
              <p>{"  <legend>Radio Buttons</legend>"}</p>
              <p>{" <FormGroup check>"}</p>
              <p>{"  <Label check>"}</p>
              <p>{' <Input type="radio" name="radio1" />'}</p>
              <p>
                {" Option one is this and that—be sure to include why it great"}
              </p>
              <p>{" </Label>"}</p>
              <p>{"  </FormGroup>"}</p>
              <p>{" <FormGroup check>"}</p>
              <p>{" <Label check>"}</p>
              <p>{' <Input type="radio" name="radio1" />'}</p>
              <p>
                {
                  " Option two can be something else and selecting it will deselect option one"
                }
              </p>
              <p>{"  </Label>"}</p>
              <p>{" </FormGroup>"}</p>
              <p>{"  <FormGroup check disabled>"}</p>
              <p>{" <Label check>"}</p>
              <p>{'<Input type="radio" name="radio1" disabled />'}</p>
              <p>{"Option three is disabled"}</p>
              <p>{"   </Label>"}</p>
              <p>{"</FormGroup>"}</p>
              <p>{"  <FormGroup check>"}</p>
              <p>{" <Label check>"}</p>
              <p>{' <Input type="checkbox" />'}</p> 
              <p>{"Check me out"}</p>
              <p>{"  </Label>   "}</p>
              <p>{" </FormGroup>"}</p>
              <p>{" <Button>Submit</Button>"}</p>
              <p>{"</Form>"}</p>

              <p>{" ); }"}</p> */}
            </div>
            <div className="form">
              <h1>Form Grid with Form Row Email</h1>
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password placeholder"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleAddress">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    id="exampleAddress"
                    placeholder="1234 Main St"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">Address 2</Label>
                  <Input
                    type="text"
                    name="address2"
                    id="exampleAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </FormGroup>
                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Label for="exampleCity">City</Label>
                      <Input type="text" name="city" id="exampleCity" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">State</Label>
                      <Input type="text" name="state" id="exampleState" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exampleZip">Zip</Label>
                      <Input type="text" name="zip" id="exampleZip" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup check>
                  <Input type="checkbox" name="check" id="exampleCheck" />
                  <Label for="exampleCheck" check>
                    Check me out
                  </Label>
                </FormGroup>
                <Button>Sign in</Button>
              </Form>
            </div>
            <div className="code">
            <pre> 
                    <code>
                      <span className ="token-keyword">Import</span> 
                      <span className="token-punctuations"> React </span>
                      <span className ="token-keyword"> from</span> ,
                      <span className = "token-string">'react' ;</span>
                    </code>
                    <br/>
                    <code>
                      <span className= "token-keyword">import</span>
                      <span className="token-punctuations"> {'{ Button,Form,FormGroup,Label,Input,FormText}'}  </span>
                      <span className="token-string"> from</span>
                      <span className="token-string"> {' "reactstrap" ; '}</span>
                    </code>
                    <br/>
                    <br/>
                    <code>
                      <span className= "token-keyword">export</span>
                      <span className="token-keyword"> class </span>
                      <span className="token-keyword"> default </span>
                      <span className="token-punctuations"> Example </span>
                      <span className= "token-keyword">extends</span>
                      <span className="token-punctuations"> React.Component</span>
                      <span className="token-punctuations">{' {'}</span>
                    </code>
                    <br/>
                       <span className="token-function"> render()</span>
                       <span className="token-punctuations">{'{'}</span> <br/>
               
                       <span className= "token-keyword">  return </span>
                       <span className= "token-punctuations"> {'('} </span> <br/>
                       <span className="token-punctuations">    {'<'}</span>
                      <span className="token-class">{'Form'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">        {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleEmail</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">Email</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">email</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">email</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleEmail</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">placeholder</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">with a placeholder</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'/>'}</span> <br/>
                       <span className="token-punctuations">      {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>



                      <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                      <span className="token-punctuations">         {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">examplePassword</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">Password</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">password</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">password</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">examplePassword</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">placeholder</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">Password placeholder</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'/>'}</span> <br/>
                       <span className="token-punctuations">      {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>






                      <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                      <span className="token-punctuations">         {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleSelect</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">Select</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">select</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">select</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleSelect</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">           {'<'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-number">1</span> 
                       <span className="token-punctuations">{'</'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">           {'<'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-number">2</span> 
                       <span className="token-punctuations">{'</'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">           {'<'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-number">3</span> 
                       <span className="token-punctuations">{'</'}</span> 
                       <span className ="token-class">option</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                        <span className="token-punctuations">         {'</'}</span>
                      <span className="token-class">{'Input'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">      {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>





                      <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">        {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleText</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">Text Area</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">textarea</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">text</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleText</span>
                       <span className="token-punctuations">{'"'}</span>
                
                       <span className="token-punctuations">{'/>'}</span> <br/>
                       <span className="token-punctuations">      {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>



                      
                      <span className="token-punctuations">      {'<'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">        {'<'}</span>
                      <span className="token-class">{'Label'}</span> 
                       <span className="token-string"> for</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleFile</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span>
                       <span className="token-punctuations">File</span>
                       <span className="token-punctuations">{'</'}</span>
                       <span className="token-class">{'Label'}</span> 
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className="token-class">{'Input'}</span> 
                       <span className="token-string"> type</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">file</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">name</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">file</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-string">id</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">exampleFile</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'/>'}</span> <br/>

                         <span className="token-punctuations">        {'<'}</span>
                      <span className="token-class">{'FormText'}</span> 
                      <span className="token-string"> color</span>
                      <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-function">muted</span>
                       <span className="token-punctuations">{'"'}</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">           {"This is some placeholder block-level text for hte above Input"}</span> <br/>
                       
                       <span className="token-punctuations">          {'</'}</span>
                      <span className="token-class">{'FormText'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>

                       <span className="token-punctuations">       {'</'}</span>
                      <span className="token-class">{'FormGroup'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>


                      <span className="token-punctuations">     {'</'}</span>
                      <span className="token-class">{'Form'}</span> 
                      <span className="token-punctuations">{'>'}</span> <br/>
                      <span className="token-punctuations">   {' );'}</span> <br/>
                      
                      <span className="token-punctuations">{' }'}</span>

                  </pre>
                  </div>
           

                  
          </div>
        </Styles>
      </Wrapper>
    );
  }
}
export default Forms;
