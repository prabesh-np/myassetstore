import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductScreen = () => {
   let { id } = useParams();
   const [product, setProduct] = useState({});

   useEffect(() => {
      const fetchProduct = async () => {
         const { data } = await axios.get(`/api/products/${id}`);
         setProduct(data);
      };
      fetchProduct();
   }, []);

   // const product = products.find((product) => product._id === id);
   return (
      <>
         <Link className='btn btn-light my-3' to='/'>
            Back
         </Link>

         <Row>
            <Col md={6}>
               <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
               <ListGroup variant='flush'>
                  <ListGroup.Item>
                     <h3>{product.name}</h3>
                  </ListGroup.Item>
               </ListGroup>

               <ListGroup.Item>
                  <strong>Price:</strong> Rs.{product.price}
               </ListGroup.Item>
               <ListGroup.Item>
                  <strong>Description:</strong> {product.description}
               </ListGroup.Item>
            </Col>

            <Col md={3}>
               <Card>
                  <ListGroup variant='flush'>
                     <ListGroup.Item>
                        <Row>
                           <Col>Price:</Col>
                           <Col>
                              <strong>Rs.{product.price}</strong>
                           </Col>
                        </Row>
                     </ListGroup.Item>

                     <ListGroup.Item>
                        <Row>
                           <Col>Status:</Col>
                           <Col>
                              {product.countInStock > 0
                                 ? "In Stock"
                                 : "Out of Stock"}
                           </Col>
                        </Row>
                     </ListGroup.Item>

                     <ListGroup.Item>
                        <Button
                           className='btn-block'
                           type='button'
                           disabled={product.countInStock === 0}
                        >
                           Add to Cart
                        </Button>
                     </ListGroup.Item>
                  </ListGroup>
               </Card>
            </Col>
         </Row>
      </>
   );
};

export default ProductScreen;
