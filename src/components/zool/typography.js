import { Jumbotron as Jumbo, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
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
  p{
   font-size:15px;
    margin-left:10vh
    width:400px;
    
  }

  .color {
    margin-left: 120px;
  }
  .head {
    color: #2b0030;
    font-size: 18px;
  }
  h1{
    margin-left:45px;
    margin-bottom:21px
  }
  .ab{
    margin-left:-129px;
  }
  .title {
    margin-left:50px;
  }
  .type{
      border:1px solid white;
      background-color:white;
       width:700px;
     margin-left:233px
     padding: 18px 4px 8px 0px;
  
  }
  p {
      color:#2B0030
  }
  .typo {
    background-color: #F4F2F4;
    margin-top: -23px;
    padding: 56px 86px;
  }
  .sa{
      color:white;
  }
  .row{
    margin-left: 90px;
  }
  hr{
      width:130vh;
      margtin-left:-21px
  }
  .mainline{
      margin-left:-50vh;
  }

`;
class Typogrpahy extends Component {
  render() {
    return (
      <Wrapper>
        <Styles>
          <Jumbo fluid className="jumbo">
            <div className="overlay" />
            <Container className="heading">
              <h1>Typography</h1>
              <p className="sa">
                We use System fonts for all MiQ,This ensures that the UI is
                optimised to be highly legible,performs well, and creates a
                smooth transiting when moving between MiQ products
              </p>
            </Container>
          </Jumbo>

          <div className="typo">
            <div className="fnt d-flex  ">
              <p>Font stack :</p>
              <p>
                {" "}
                We use sans-serif fonts across our product suite.The only
                exception is when you want to display code ,then you should
                defer to monospace fonts.
              </p>
            </div>
            <div className="serif">
              <p>Sans-serif</p>
            </div>
            <div className="xs={5} md={3}">
              <Row className="row">
                <Col xs={5} md={5}>
                  {" "}
                  <p>OS</p>
                </Col>
                <Col xs={5} md={5}>
                  <p>Font family </p>
                </Col>
              </Row>
              <hr />
              <div>
                <Row>
                  <Col xs={5} md={5}>
                    <p> Windows </p>
                  </Col>
                  <Col xs={5} md={5}>
                    <p> Segoe UI </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5} md={5}>
                    <p> MacOS & iOS</p>
                  </Col>
                  <Col xs={5} md={5}>
                    <p> SF Pro Text </p>
                    <p> SF Pro Display </p>
                    <p> SF UI Text (deprecated)</p>
                    <p> SF UI Display (deprecated)</p>
                    <p> Helvetica Neue (fallback)</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5} md={5}>
                    <p> Chraome OS & Android </p>
                  </Col>
                  <Col xs={5} md={5}>
                    <p> Roboto </p>
                    <p> Noto Sans (fallback) </p>
                    <p> Droid Sans (fallback) </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5} md={5}>
                    <p> Ubuntu </p>
                  </Col>
                  <Col xs={5} md={5}>
                    <p> Ubuntu </p>
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <br />
            <div className="type justify-content-md-center">
              <p>
                {" "}
                font-family: -apple-system, BlindMacSystemFont,'Segoe UI',
                'Roboto', 'Helvetica Neue',sans-serif:
              </p>
            </div>
            <br />
            <div className="serif">
              <p>Monospaced</p>
              <div className="xs={5} md={3}">
                <Row>
                  <Col xs={5} md={5}>
                    <p> OS </p>
                  </Col>
                  <Col xs={5} md={5}>
                    <p> Font family </p>
                  </Col>
                </Row>
              </div>
              <hr />
              <div>
                <Row>
                  <Col xs={5} md={5}>
                    <p>Windows</p>
                  </Col>
                  <Col xs={5} md={5}>
                    <p> Segoe UI Mono </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5} md={5}>
                    <p>MacOS & iOS</p>
                  </Col>
                  <Col xs={5} md={5}>
                    <p> SF Mono </p>
                    <p> Menlo (fallback) </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5} md={5}>
                    <p> Chraome OS & Android </p>
                  </Col>
                  <Col xs={5} md={5}>
                    <p> Roboto </p>

                    <p> Roboto Mono </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5} md={5}>
                    <p>Ubuntu </p>
                  </Col>
                  <Col xs={5} md={5}>
                    <p> Ubuntu Mono</p>
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <div className="type">
              <p>
                {" "}
                font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono",Menlo,
                Courier,monospace
              </p>
            </div>
            <br />
            <br />

            <div className="weight d-flex">
              <p>Weight:</p>
              <div className="ab">
                <h1 style={{ color: "#2B0030" }}> Medium</h1>
                <h1 style={{ color: "#2B0030" }}>Regular</h1>
              </div>
            </div>
            <br />

            <div className="Type_styles d-flex">
              <p>Type Styles</p>
            </div>
            <div className="mainline justify-content-md-left">
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  <p
                    className="a"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                      height: "30px",
                      width: "30px",
                      padding: "6px 6px",
                      color: "#2B0030"
                    }}
                  >
                    {" "}
                    h1{" "}
                  </p>
                </Col>
                <Col md="auto">
                  <h2 style={{ width: "50", height: "70px", color: "#2B0030" }}>
                    {" "}
                    Header One
                  </h2>
                </Col>
                <Col xs lg="2">
                  <p>h1</p>
                  <p> Font-size:36px</p>
                  <p> font-weight:500/Median </p>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  <p
                    className="a"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                      height: "30px",
                      width: "30px",
                      padding: "6px 6px",
                      color: "#2B0030"
                    }}
                  >
                    {" "}
                    h2{" "}
                  </p>
                </Col>
                <Col md="auto">
                  <h2 style={{ width: "50", height: "70px", color: "#2B0030" }}>
                    {" "}
                    Header Two
                  </h2>
                </Col>
                <Col xs lg="2">
                  <p>h2</p>
                  <p> Font-size:32px</p>
                  <p> font-weight:500/Median </p>
                </Col>
              </Row>
              <br />
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  <p
                    className="a"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                      height: "30px",
                      width: "30px",
                      padding: "6px 6px",
                      color: "#2B0030"
                    }}
                  >
                    {" "}
                    h3{" "}
                  </p>
                </Col>
                <Col md="auto">
                  <h3 style={{ width: "50", height: "70px", color: "#2B0030" }}>
                    {" "}
                    Header Three
                  </h3>
                </Col>
                <Col xs lg="2">
                  <p>h3</p>
                  <p> Font-size:28px</p>
                  <p> font-weight:500/Median </p>
                </Col>
              </Row>
              <br />
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  <p
                    className="a"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                      height: "30px",
                      width: "30px",
                      padding: "6px 6px",
                      color: "#2B0030"
                    }}
                  >
                    {" "}
                    h4{" "}
                  </p>
                </Col>
                <Col md="auto">
                  <h3 style={{ width: "50", height: "70px", color: "#2B0030" }}>
                    {" "}
                    Header Four
                  </h3>
                </Col>
                <Col xs lg="2">
                  <p>h4</p>
                  <p> Font-size:24px</p>
                  <p> font-weight:500/Median </p>
                </Col>
              </Row>
              <br />{" "}
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  <p
                    className="a"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                      height: "30px",
                      width: "30px",
                      padding: "6px 6px",
                      color: "#2B0030"
                    }}
                  >
                    {" "}
                    h5{" "}
                  </p>
                </Col>
                <Col md="auto">
                  <h3 style={{ width: "50", height: "70px", color: "#2B0030" }}>
                    {" "}
                    Header Five
                  </h3>
                </Col>
                <Col xs lg="2">
                  <p>h5</p>
                  <p> Font-size:20px</p>
                  <p> font-weight:500/Median </p>
                </Col>
              </Row>
              <br />
              <div className="" heading>
                <Row className="justify-content-md-center">
                  <Col xs lg="2">
                    <p
                      className="a"
                      style={{
                        border: "1px solid white",
                        backgroundColor: "white",
                        height: "30px",
                        width: "30px",
                        padding: "6px 6px",
                        color: "#2B0030"
                      }}
                    >
                      {" "}
                      h6{" "}
                    </p>
                  </Col>
                  <Col md="auto">
                    <h3
                      style={{ width: "50", height: "70px", color: "#2B0030" }}
                    >
                      {" "}
                      Header Six
                    </h3>
                  </Col>
                  <Col xs lg="2">
                    <p>h6</p>
                    <p> Font-size:16px</p>
                    <p> font-weight:500/Median </p>
                  </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                  <Col xs lg="2">
                    <p
                      className="a"
                      style={{
                        border: "1px solid white",
                        backgroundColor: "white",
                        height: "30px",
                        width: "30px",
                        padding: "6px 6px",
                        color: "#2B0030"
                      }}
                    >
                      {" "}
                      p{" "}
                    </p>
                  </Col>
                  <Col md="auto">
                    <h3
                      style={{ width: "50", height: "70px", color: "#2B0030" }}
                    >
                      {" "}
                      Paragraph
                    </h3>
                  </Col>
                  <Col xs lg="2">
                    <p>p</p>
                    <p> Font-size:14px</p>
                    <p> Line-height:20 </p>
                  </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                  <Col xs lg="2">
                    <p
                      className="a"
                      style={{
                        border: "1px solid white",
                        backgroundColor: "white",
                        height: "30px",
                        width: "40px",
                        padding: "6px 7px",
                        color: "blue"
                      }}
                    >
                      {" "}
                      Link{" "}
                    </p>
                  </Col>
                  <Col md="auto">
                    <h3
                      style={{ width: "60", height: "70px", color: "#2B0030" }}
                    >
                      Link{" "}
                    </h3>
                  </Col>
                  <Col xs lg="2">
                    <p>link</p>
                    <p> Font-size:14px</p>
                    <p> font-weight:400/Median </p>
                    <p>
                      {" "}
                      Links use color Primary-2 and are not underlined except on
                      hover.{" "}
                    </p>
                  </Col>
                </Row>
                <br />
              </div>
            </div>
          </div>
        </Styles>
      </Wrapper>
    );
  }
}

export default Typogrpahy;
