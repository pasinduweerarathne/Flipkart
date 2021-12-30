import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../component/Header/Header";
import Input from "../../component/UI/Input/Input";

const Signup = () => {
   return (
      <>
         <Header />
         <Container>
            <Row style={{ marginTop: "50px" }}>
               <Col
                  style={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                  }}
               >
                  <Form style={{ width: "75%" }}>
                     <Row>
                        <Col md={6}>
                           <Input
                              label="First Name"
                              placeholder="First Name"
                              value=""
                              type="text"
                              onChange={() => {}}
                           />
                        </Col>
                        <Col md={6}>
                           <Input
                              label="Last Name"
                              placeholder="Last Name"
                              value=""
                              type="text"
                              onChange={() => {}}
                           />
                        </Col>
                     </Row>
                     <Input
                        label="Email"
                        placeholder="Email"
                        value=""
                        type="email"
                        onChange={() => {}}
                     />

                     <Input
                        label="Password"
                        placeholder="Password"
                        value=""
                        type="password"
                        onChange={() => {}}
                     />

                     <Button variant="primary" type="submit">
                        Submit
                     </Button>
                  </Form>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Signup;
