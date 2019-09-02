/* eslint-disable no-sequences */
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import { Button, ButtonGroup,ButtonToolbar,ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem }  from 'reactstrap';
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
  class ButtonGroups extends Component {

    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
render(){
    return (
        <Wrapper>
        <Styles>
          <Jumbo fluid className="jumbo">
            <div className="overlay" />
            <Container className="heading">
              <h1>Button Group</h1>
            </Container>
          </Jumbo>
          <div className="button_container" style={{backgroundColor:"#F4F2F4"}}>
            <div className = "btn">
              <h4> Example </h4>
            <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
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
                       <span className="token-punctuations">      {'<'}</span>
                       <span className= "token-class">ButtonGroup</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">Left</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 

                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">Middle</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">Right</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">      {'<'}</span>
                       <span className= "token-class">ButtonGroup</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 

                       <span className="token-punctuations">     {');'}</span> <br/> 
                       <span className="token-punctuations">    {'}'}</span> <br/> 
                       <span className="token-punctuations">   {'}'}</span> <br/> 

                </pre>
              </div>
              <h3>Button Toolbar</h3>
              <div className = "btn">
              <h5> Example </h5>
              <ButtonToolbar>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
            </div>
<div className ="code">
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
                       <span className="token-punctuations">     {'<'}</span>
                       <span className= "token-class">ButtonToolbar</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">      {'<'}</span>
                       <span className= "token-class">ButtonGroup</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">1</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">2</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">3</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">      {'<'}</span>
                       <span className= "token-class">ButtonGroup</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 

                       <span className="token-punctuations">      {'<'}</span>
                       <span className= "token-class">ButtonGroup</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">4</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">5</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">6</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">      {'<'}</span>
                       <span className= "token-class">ButtonGroup</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">      {'<'}</span>
                       <span className= "token-class">ButtonGroup</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">7</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">8</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">9</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">      {'<'}</span>
                       <span className= "token-class">ButtonGroup</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">     {'<'}</span>
                       <span className= "token-class">ButtonToolbar</span>
                       <span className="token-punctuations">{'>'}</span> <br/> 

                       <span className="token-punctuations">    {');'}</span> <br/> 
                       <span className="token-punctuations">  {'}'}</span> <br/> 
                       <span className="token-punctuations">{'}'}</span> <br/> 

                </pre>
                
</div> 
<h3>Vertical variation</h3>
              <div className = "btn">
              <h5> Example </h5>
              <ButtonGroup vertical>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Dropdown Link</DropdownItem>
      <DropdownItem>Dropdown Link</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>
            </div>
            <div className ="code">
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
                       <span className="token-punctuations">      {'<'}</span>
                       <span className= "token-class">ButtonGroup </span>
                       <span className= "token-string">vertical</span>

                       <span className="token-punctuations">{'>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">1</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'>'}</span> 
                       <span className="token-punctuations">2</span>
                       <span className="token-punctuations">{'<'}</span>
                       <span className= "token-class">Button</span>
                       <span className="token-punctuations">{'/>'}</span> <br/> 
                       <span className="token-punctuations">         {'<'}</span>
                       <span className= "token-class">ButtonDropdown </span>
                       <span className= "token-string">isOpen</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'{'}</span>
                       <span className= "token-keyword">this</span>
                       <span className="token-punctuations">{'.'}</span>
                       <span className= "token-class">state</span>
                       <span className="token-punctuations">{'.'}</span>
                       <span className= "token-class">dropdownOpen</span>
                       <span className="token-punctuations">{'}'} </span>
                       <span className= "token-string">toggle</span>
                       <span className="token-punctuations">{'='}</span>
                       <span className="token-punctuations">{'{'}</span>
                       <span className= "token-keyword">this</span>
                       <span className="token-punctuations">{'.'}</span>
                       <span className= "token-class">toggle</span>
                       <span className="token-punctuations">{'}'}</span>
                       <span className="token-punctuations">{'>'}</span> <br/>
                       <span className="token-punctuations">          {'<'}</span>
                       <span className= "token-class">DropdownToggle </span>
                       <span className= "token-string">caret</span>
                       <span className="token-punctuations">{'>'}</span>
                          <br/>
                          <span className="token-punctuations">         {'<'}</span> 
                          <span className= "token-class">DropdownMenu </span>
                          <span className="token-punctuations">{'>'}</span> <br/>
                          <span className="token-punctuations">            {'<'}</span>
                          <span className= "token-class">DropdownItem </span>
                          <span className="token-punctuations">{'>'}</span>
                          <span className="token-punctuations">Dropdown Link</span>
                          <span className="token-punctuations">{'</'}</span>
                          <span className= "token-class">DropdownItem </span>
                          <span className="token-punctuations">{'</'}</span> <br/> 
                          <span className="token-punctuations">            {'<'}</span>
                          <span className= "token-class">DropdownItem </span>
                          <span className="token-punctuations">{'>'}</span>
                          <span className="token-punctuations">Dropdown Link</span>
                          <span className="token-punctuations">{'</'}</span>
                          <span className= "token-class">DropdownItem </span>
                          <span className="token-punctuations">{'</'}</span> <br/> 
                          <span className="token-punctuations">       {'</'}</span> 
                          <span className= "token-class">DropdownMenu </span>
                          <span className="token-punctuations">{'>'}</span> <br/>
                          <span className="token-punctuations">     {'</'}</span> 
                          <span className= "token-class">ButtonDropdown </span>
                          <span className="token-punctuations">{'>'}</span> <br/>
                          <span className="token-punctuations">   {'</'}</span> 
                          <span className= "token-class">ButtonGroup </span>
                          <span className="token-punctuations">{'>'}</span> <br/>

                                          
                          <span className="token-punctuations">    {');'}</span> <br/> 
                          <span className="token-punctuations">  {'}'}</span> <br/> 
                          <span className="token-punctuations">{'}'}</span> <br/> 

                </pre>
                </div> 
          </div>
          </Styles>
          </Wrapper>
          
          
    )
}
  }
  export default ButtonGroups;