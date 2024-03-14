import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import './Cards.css';
import { Card, Button } from 'react-bootstrap';
import ProductPage from '../Products/ProductPage';


function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1>Products Gallery</h1>
      <div className="row">
        {products.map(product => (
            <>
          <div key={product.id} className="col-lg-3 mb-3">
            <Card>
              <Card.Img variant="top" className='imgchange'  src={product.image} />
              <Card.Body>
                <Card.Title className='singleline'>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          
          </div>
       
          </>
        ))}
      </div>
    
    </div>
  );
}

export default Cards;