import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    // Implement your add to cart functionality here
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} style={{maxWidth:"200px",maxHeight:"200px"}}/>
        </div>
        <div className="col-lg-6">
          <h2>Details</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;