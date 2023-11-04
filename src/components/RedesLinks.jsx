import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import instagramUno from "../assets/images/imageInstagram.png";
import instagramDos from "../assets/images/imageInstagramDos.png";
import instagramTres from "../assets/images/imageInstagramTres.png";

const RedesLinks = () => {
  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Row lg={3}>
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={instagramUno} />
            <Card.Body>
              <Card.Title>Los negocios no son mi vida…</Card.Title>
              <Card.Text>
                Son un juego entre mi ego y mi consciencia para vivir más libre…
                Lo que me da la vida a mi y a cualquier otra persona… Es el
                amor.
              </Card.Text>
              <a
                href="https://www.instagram.com/reel/CyrRI2MOAyh/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <Button variant="primary">Ver</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={instagramDos} />
            <Card.Body>
              <Card.Title>El dinero es valor…</Card.Title>
              <Card.Text>
                Si he podido lograr los resultados que he logrado a mis 24 años…
                Es por el nivel de consciencia que he adquirido y que he logrado
                manifestar… asi de simple.
              </Card.Text>
              <a
                href="https://www.instagram.com/reel/CoFEkyeDHjz/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <Button variant="primary">Ver</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={instagramTres} />
            <Card.Body>
              <Card.Title>
                Una vez vendes algo en lo que realmente crees…
              </Card.Title>
              <Card.Text>
                Es mucho más facil… Porque subconscientemente lo estás
                comunicado con tanta seguridad y confianza…
              </Card.Text>
              <a
                href="https://www.instagram.com/reel/CnU4PweBFok/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <Button variant="primary">Ver</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RedesLinks;
