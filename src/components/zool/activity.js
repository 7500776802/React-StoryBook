import { Jumbotron as Jumbo, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import React, { Component } from "react";
import { Wrapper } from "../../styles";
// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
const Styles = styled.div`
  .jumbo {
    background-color:purple
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    margin-bottom: 20px;
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
    width:580px;
    
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
  }
  .ab{
    margin-left:-4px;
  }
  .title {
    margin-left:50px;
  }
`;
class Activity extends Component {
  render() {
    return (
      <Wrapper>
        <Styles>
          <Jumbo fluid className="jumbo">
            <div className="overlay" />
            <Container className="heading">
              <h1>Color</h1>
              <p>
                Our color pallete is minimal for a reason.It enables us to bring
                our content to life.We do not color code our products. Dradients
                are a key design feature across PropTypes shape MiQ estate, this
                is How we differentiate our products
              </p>
            </Container>
          </Jumbo>
          <div className = "color_ab" style={{backgroundColor:"#F4F2F4"}}>
          <div className="color">
            <h4 className="head">Primary Color Palette:</h4>
            <br />
            <Row>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#2B0030",
                    color: "white"
                    
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Midnight Blue <span className="title"> #2B0030</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#2B00E6",
                    fontStyle: "normal",
                    color: "white"
                  }}
                > 
                 <Card.Body>
                    <p className="ab">
                      {" "}
                      Ultramarine <span className="title"> #2B00E6</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={4}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#FFFFF"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      White <span className="title"> #FFFFF</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <br />
          <div className="color">
            <h4 className="head">Secondary Color Palette:</h4>
            <br />
            <Row>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#FF2000",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Rusty Red <span className="title"> #FF2000</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#FFCA00",
                    fontStyle: "normal",
                    color: "#79491F"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      USC Gold<span className="title"> #FFCA00</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={4}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#02BA5B",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Go Green<span className="title"> #02BA5B</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#139CB5",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      Pelorous <span className="title"> #139CB5</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#EA00AD",
                    fontStyle: "normal",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Cerise <span className="title"> #EA00AD</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={4}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#2000A8",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Duke Blue <span className="title"> #2000A8</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <br />
          <br />

          <div className="color">
            <h4 className="head">Neutrals:</h4>
            <br />

            <Row>
              <Col xs={5} md={3}>
                <p> Dark</p>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#401944",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Russian Violet <span className="title">
                        {" "}
                        #401944
                      </span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={3}>
                <p> Mid</p>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#BFB2C0",
                    fontStyle: "normal",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Silver<span className="title"> #BFB2C0</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={4}>
                <p> Light</p>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#F4F2F4"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Anti Flash White <span className="title">
                        {" "}
                        #F4F2F4
                      </span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#553359",
                    color: "#BAACBC"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Japanese Violet <span className="title">
                        {" "}
                        #553359
                      </span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#D5CCD6",
                    fontStyle: "normal",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Languid Lavender <span className="title">
                        {" "}
                        #D5CCD6
                      </span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#6A4C6E",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Imperial <span className="title"> #6A4C6E</span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    backgroundColor: "#E9E5EA",
                    fontStyle: "normal",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <p className="ab">
                      {" "}
                      Platinum <span className="title"> #E9E5EA </span>{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <div className="color">
            <h4 className="head">Gradients:</h4>
            <br />
            <Row>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    background:
                      "linear-gradient(to right bottom ,#F20C6B,#FFA100)",
                    color: "white"
                  }}
                >
                <Card.Body>
                    <Card.Title>MiQ Brand </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={3}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    background:
                      "linear-gradient(to right bottom ,#FFE88D,#FFCD0D)",
                    fontStyle: "normal",
                    color: "white"
                  }}
                >
                  <Card.Body>
                    <Card.Title>Studio </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={5} md={4}>
                <Card
                  style={{
                    width: "282px",
                    height: "97px",
                    background:
                      "linear-gradient(to right bottom ,#F054C7,#EB0EB1)"
                  }}
                >
                  <Card.Body>
                    <Card.Title>Rio</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
          </div>
          <br />
          <br />

          <div className="color">
            <h4 className="head">Data:</h4>
            <br />
            <div className="d d-flex">
              <span
                style={{
                  backgroundColor: "#FFD555",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#FFBA00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#FF7E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#FF5800",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#790163",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#5E0152",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#440140",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <br />
            <p style={{ color: "#D7CFD7" , marginLeft: "-1px" }}># of colors</p>
            <div className=" d-flex ">
              1 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FF9E00" ,
                  height: "25px",
                  width: "80px",
                  display: "block"

                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              2 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#D0009C",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              3 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              4 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#950176",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              5 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF7E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#950176",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#790163",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              6 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF7E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#790163",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#440140",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              7 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FFD555",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF7E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#D0009C",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#440140",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              8 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FFD555",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF7E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#D0009C",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#950176",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#440140",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              9 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FFD555",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF7E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#D0009C",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "  #D0009C",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#950176",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#440140",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>

            <br />
            <div className=" d-flex ">
              10 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FFD555",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FFBA00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF7E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF5800",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#D0009C",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#950176",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#440140",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              11 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FFD555",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FFBA00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF7E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF5800",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#D0009C",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#950176",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#440140",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <div className=" d-flex ">
              12 &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  backgroundColor: "#FFD555",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FFBA00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF9E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF7E00",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#FF5800",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F90969",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#D0009C",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#950176",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#B20089",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#440140",
                  height: "25px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
            <br />
            <br />
            <br />
          </div>
          </div>
        </Styles>
      </Wrapper>
    );
  }
}


export default Activity;

// import React, { Component } from "react";
// import logo from "../../cycling.jpeg";
// import {  Container, Row,Col } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../App.css";
// import { Button } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// class Activity extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>MAITRI ADVENTURE CLUB</p>
//           <a
//             className="App-link"
//             href="https://www.maitriadventureclub.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             MAC
//           </a>
//           <p className="subheading">Exploring the village, city and Forest</p>
//           <Container>
//             <Row>
//             <Col xs={6} md={4}>
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src={logo}/>
//                 <Card.Body>
//                   <Card.Title>Card Titkmklghfd</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//               </Col>
//               <Col xs={6} md={4}>
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src={logo}/>
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//               </Col>
//               <Col xs={6} md={4}>
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src={logo}/>
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//               </Col>
//             </Row>
//             <p> Great Inspiration to alls</p>
//           </Container>
//         </header>
//       </div>
//     );
//   }
// }
// export default Activity;
