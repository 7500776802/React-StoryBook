import { Jumbotron as Jumbo, Container} from "react-bootstrap";
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
      color:#2B0030

  }
  
  .typo {
    background-color: #F4F2F4;
    margin-top: -23px;
    padding: 56px 86px;

  }
  .grid{
    width: 658px;
    margin-left: 114px;
}
.grido{
    margin-left:30vh
}
hr{
    width:91vh;
    margtin-left:-21px
    background-color:#EA00AD;
}.dsa{
    text-align:right
}
  }
  `;
class Grid extends Component {
  render() {
    return (
      <Wrapper>
        <Styles>
          <Jumbo fluid className="jumbo">
            <div className="overlay" />
            <Container className="heading">
              <h1>Grid</h1>
              <p className="sa">
                A grid system provides the foundation for harmony and
                consistency between our elements
              </p>
            </Container>
          </Jumbo>
          <div className="typo">
            <div className="d-flex">
              <p> Desktop:</p>
              <p className="grid">
                Desktop uses a <b>24px </b> gutter between each column.Desktop
                has a maximum container width of <b> 1200px </b>,this is to
                ensure everything is coherent and legible on monitors of all
                sizes
              </p>
            </div>
            <br />

            <div className=" d-flex  grido">
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "80px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />{" "}
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "20px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#EF82D2",
                  height: "150px",
                  width: "60px",
                  display: "block"
                }}
              />
              <span
                style={{
                  backgroundColor: "#F2D9EC",
                  height: "150px",
                  width: "80px",
                  display: "block"
                }}
              />
            </div>
           <div><hr/><p style={{textAlign:"center" , color:"pink"}}> 1200px </p> 
           <p className="dsa"> Please note:Diagram not to scale </p> </div>
          </div>
        </Styles>
      </Wrapper>
    );
  }
}
export default Grid;
