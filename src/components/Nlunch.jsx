import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { addToCart, deleteFromCart } from '../Store/CartSlice/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Nlunch.css';
import Nonl from '../product/Nonl';
const Nlunch = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch();
  
  const addCart = (item) => {
      dispatch(addToCart(item))
      alert("Item added successfully")
  }
  
  const deleteCart = (item) => {
      dispatch(deleteFromCart(item))
      alert("Item removed successfully")
  }
  return (
    <div id="veg-breakfast">
    <Container id="food-container">
      <Row id="food-row-1">
      {
              Nonl.map((item)=>(
        <Col id="col-breakfast-1" key={item.id}>
          <Card id="card-breakfast-1" style={{ width: '22rem' }}>
            <Card.Img id="img-breakfast-1" variant="top" src={item.img} />
            <Card.Body id="body-breakfast-1">
              <Card.Title id="title-breakfast-1">{item.title}</Card.Title>
              <Card.Text id="text-breakfast-1">
              {cartProducts.find(items => items.id === item.id)?
          <button type="button" onClick={()=>{deleteCart(item)}}>Remove from Cart</button>
          :<button type="button" onClick={()=>{addCart(item)}}>Add To Cart</button>
          }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
              ))}
      </Row>
    </Container>
  </div>
  )
}

export default Nlunch
