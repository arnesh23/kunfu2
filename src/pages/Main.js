import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"
import Resize from "../components/Resize"


class Main extends Component{
    random = () => Math.floor(Math.random()*12)
    
    state = {
        score: -1,
        topScore: 0,
        clickedImage: "",
        listofImages: []
    }

    onClick = event => {
        event.preventDefault();

        const { name, alt } = event.target;

        this.setState({
            [name]: alt,
            listofImages: [...this.state.listofImages, alt]
          })  
        }

        changeScores = () => {
        var val = this.Match()
        this.scores(val)
        }

        scores = (val) => {
         if(val)
         {/*
             if(this.state.topScore === 0){
             this.state.topScore = this.state.score
             }
             else if (this.state.score > this.state.topScore){
                 this.state.topScore = this.state.score
             }
             this.state.score = 0;
             this.state.clickedImage = "";
             this.state.listofImages = [];
             
         }
        else
            this.state.score++
            */
        }
    }

        
        Match = () => {
            for(let i = 0; i < this.state.listofImages.length-1 ; i++)
                if(this.state.listofImages[i] === this.state.clickedImage){
                    return true;   
            }
        }
    

render() {
  return (
    <Container fluid>
    {this.changeScores()}
      <Row>
        <Col size="md-4">
            <h3> <a href = "/" value = "pic"><strong>Clicky Game</strong></a></h3>  
        </Col>
        <Col size="md-4">
            <h3> <strong>Click an Image to begin! </strong></h3>  
        </Col>
        <Col size="md-4">
            <h3> <strong>Score: {this.state.score} Top Score: {this.state.topScore} </strong></h3>  
        </Col>
      </Row>
      <Row>
          <Col size = "md-12">
          <Jumbotron height = "200">
              <h2> Clicky Game!</h2>
              <h3> Click on an image to earn points, but don't click on any more than once!</h3>
          </Jumbotron>
          </Col>
     </Row>
     <Jumbotron height="500">
        <Row>
        <Col size="md-3">
        <Resize  num = {this.random()} onClick={this.onClick}></Resize>  
        </Col> 
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}> </Resize>  
        </Col> 
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>  </Resize>  
        </Col> 
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>  </Resize>  
        </Col> 
     </Row>
     <Row>
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>  </Resize>  
        </Col> 
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>  </Resize>  
        </Col> 
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>  </Resize>  
        </Col> 
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>   </Resize>  
        </Col> 
     </Row>
     <Row>
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>  </Resize>  
        </Col> 
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>  </Resize> 
        </Col> 
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>  </Resize>  
        </Col> 
        <Col size="md-3">
        <Resize num = {this.random()} onClick={this.onClick}>  </Resize>  
        </Col> 
     </Row>
     </Jumbotron>
    </Container>
  );
}
}

export default Main;



