import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Input from "../../component/UI/Input/Input";
import Header from "../../component/Header/Header";

const Signin = () => {
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
                  <Form style={{ width: "50%" }}>
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

export default Signin;
