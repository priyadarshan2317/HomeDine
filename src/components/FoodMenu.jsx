import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import bimg from '../images/breakfast img.jpg';
import limg from '../images/lunch img.jpg';
import dimg from '../images/dinner img.jpg';
import nbimg from '../images/nbimg.jpg';
import nlimg from '../images/nlimg.jpg';
import ndimg from '../images/ndimg.jpg';
import "../styles/FoodMenu.css";
import { Link } from 'react-router-dom';
const FoodMenu = () => {
  return (
    <div className="food-menu">
      <div>
        <h3>Veg</h3>
      </div>
      <Container>
        <Row>
          <Col>
            <Card className="card">
            <Link to='/vb'><Card.Img variant="top" src={bimg} className="card-img-top" /></Link>
              <Card.Body>
                <Card.Title className="card-title">Breakfast</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
            <Link to='/vl'><Card.Img variant="top" src={limg} className="card-img-top" /></Link>
              <Card.Body>
              <Card.Title className="card-title">Lunch</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <Link to='/vd'><Card.Img variant="top" src={dimg} className="card-img-top" /></Link>
              <Card.Body>
                <Card.Title className="card-title">Dinner</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <div>
        <h3>NON-VEG</h3>
      </div>
      <Container>
        <Row>
          <Col>
            <Card className="card">
              <Link to='/nb'><Card.Img variant="top" src={nbimg} className="card-img-top" /></Link>
              <Card.Body>
                <Card.Title className="card-title">Breakfast</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
            <Link to='/nl'><Card.Img variant="top" src={nlimg} className="card-img-top" /></Link>
              <Card.Body>
                <Card.Title className="card-title">Lunch</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
            <Link to='/nd'> <Card.Img variant="top" src={ndimg} className="card-img-top" /></Link>
              <Card.Body>
                <Card.Title className="card-title">Dinner</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FoodMenu;
