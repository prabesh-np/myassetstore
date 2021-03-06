import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(listProducts());
   }, [dispatch]);

   const products = [];

   return (
      <>
         <h1>Latest Products</h1>
         <Row>
            {products.map((product) => (
               <Col sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
               </Col>
            ))}
         </Row>
      </>
   );
};

export default HomeScreen;
