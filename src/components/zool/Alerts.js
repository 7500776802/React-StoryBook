import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import React, { Component } from "react";
import { Alert }  from 'reactstrap';

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
  class Alerts extends Component {
      render (){
          return (
<Wrapper>
        <Styles>
          <Jumbo fluid className="jumbo">
            <div className="overlay" />
            <Container className="heading">
              <h1>Alerts</h1>
            </Container>
          </Jumbo>
           <div className = "Alert_container" style={{backgroundColor:"#F4F2F4"}}>
            <div className = "alert"> 
            <h5> Alerts</h5>
            <div>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert color="info">
        This is a info alert — check it out!
      </Alert>
      <Alert color="light">
        This is a light alert — check it out!
      </Alert>
      <Alert color="dark">
        This is a dark alert — check it out!
      </Alert>
    </div>
            </div>
                <div className = "code">
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
                      <span className="token-punctuations"> {'{ Button,ButtonGroup}'}  </span>
                      <span className="token-string"> from</span>
                      <span className="token-string"> {' "reactstrap" ; '}</span>
                    </code>
                    <code>
                      <br/>
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
                       <span className= "token-punctuations">   {'<'}</span>

                       <span className= "token-class">div</span>
                       <span className= "token-punctuations">{'>'}</span> <br/>
                       <span className= "token-punctuations">   {'<'}</span>
                                <span className= "token-class">Alert</span>
                                <span className= "token-string"> color</span>
                       
                       <span className= "token-punctuations">{'='}</span> 
                       <span className= "token-punctuations">{'"'}</span>
                       <span className= "token-function">primary</span> 
                       <span className= "token-punctuations">{'"'}</span> 
                       <span className= "token-punctuations">{'>'}</span> <br/>
                       <span className= "token-punctuations">    This is a primary alert-check it out</span>  <br/>

                       <span className= "token-punctuations">   {'</'}</span> 
                       <span className= "token-class">Alert</span>
                       <span className= "token-punctuations">{'>'}</span> <br/>

                       <span className= "token-punctuations">   {'<'}</span>
                                <span className= "token-class">Alert</span>
                                <span className= "token-string"> color</span>
                       
                       <span className= "token-punctuations">{'='}</span> 
                       <span className= "token-punctuations">{'"'}</span>
                       <span className= "token-function">secondary</span> 
                       <span className= "token-punctuations">{'"'}</span> 
                       <span className= "token-punctuations">{'>'}</span> <br/>
                       <span className= "token-punctuations">    This is a secondary alert-check it out</span>  <br/>

                       <span className= "token-punctuations">   {'</'}</span> 
                       <span className= "token-class">Alert</span>
                       <span className= "token-punctuations">{'>'}</span> <br/>

                       <span className= "token-punctuations">   {'<'}</span>
                                <span className= "token-class">Alert</span>
                                <span className= "token-string"> color</span>
                       
                       <span className= "token-punctuations">{'='}</span> 
                       <span className= "token-punctuations">{'"'}</span>
                       <span className= "token-function">success</span> 
                       <span className= "token-punctuations">{'"'}</span> 
                       <span className= "token-punctuations">{'>'}</span> <br/>
                       <span className= "token-punctuations">    This is a success alert-check it out</span>  <br/>

                       <span className= "token-punctuations">   {'</'}</span> 
                       <span className= "token-class">Alert</span>
                       <span className= "token-punctuations">{'>'}</span> <br/>

                       <span className= "token-punctuations">   {'<'}</span>
                                <span className= "token-class">Alert</span>
                                <span className= "token-string"> color</span>
                       
                       <span className= "token-punctuations">{'='}</span> 
                       <span className= "token-punctuations">{'"'}</span>
                       <span className= "token-function">danger</span> 
                       <span className= "token-punctuations">{'"'}</span> 
                       <span className= "token-punctuations">{'>'}</span> <br/>
                       <span className= "token-punctuations">    This is a danger alert-check it out</span>  <br/>

                       <span className= "token-punctuations">   {'</'}</span> 
                       <span className= "token-class">Alert</span>
                       <span className= "token-punctuations">{'>'}</span> <br/>

                       <span className= "token-punctuations">   {'<'}</span>
                                <span className= "token-class">Alert</span>
                                <span className= "token-string"> color</span>
                       
                       <span className= "token-punctuations">{'='}</span> 
                       <span className= "token-punctuations">{'"'}</span>
                       <span className= "token-function">warning</span> 
                       <span className= "token-punctuations">{'"'}</span> 
                       <span className= "token-punctuations">{'>'}</span> <br/>
                       <span className= "token-punctuations">    This is a warning alert-check it out</span>  <br/>

                       <span className= "token-punctuations">   {'</'}</span> 
                       <span className= "token-class">Alert</span>
                       <span className= "token-punctuations">{'>'}</span> <br/>

                       <span className= "token-punctuations">   {'<'}</span>
                                <span className= "token-class">Alert</span>
                                <span className= "token-string"> color</span>
                       
                       <span className= "token-punctuations">{'='}</span> 
                       <span className= "token-punctuations">{'"'}</span>
                       <span className= "token-function">info</span> 
                       <span className= "token-punctuations">{'"'}</span> 
                       <span className= "token-punctuations">{'>'}</span> <br/>
                       <span className= "token-punctuations">    This is a info alert-check it out</span>  <br/>
                       <span className= "token-punctuations">   {'</'}</span> 
                       <span className= "token-class">Alert</span>
                       <span className= "token-punctuations">{'>'}</span> <br/>

                       <span className="token-punctuations">    {');'}</span> <br/> 
                          <span className="token-punctuations">  {'}'}</span> <br/> 

            </pre>
           </div>
           </div>
          </Styles>
          </Wrapper>
          
          )
      }
  }
  export default Alerts