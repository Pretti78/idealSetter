import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Form>
        <Card>
          <Card.Header>Unete a la Comunidad</Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Cuentanos un poco de ti y porque quieres unirte
              </Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>
            <Button variant="primary">Enviar</Button>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
};

export default Contact;
