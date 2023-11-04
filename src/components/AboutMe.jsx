import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chrisAboutMe from "../assets/images/christianBresserAboutMe.jpg";

const AboutMe = () => {
  return (
    <Container
      id="link"
      style={{
        borderRadius: "0.5rem",
        paddingTop: "2rem",
      }}
    >
      <Row
        lg={2}
        style={{
          backgroundColor: "#f5ebe0",
        }}
      >
        <Col lg={6}>
          <h1 className="title-section">¿Quien Soy?</h1>
          <img src={chrisAboutMe} alt="" className="img-fluid" />
        </Col>
        <Col
          lg={6}
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              borderRadius: "0.7rem",
              fontSize: "0.9rem",
              color: "black",
            }}
          >
            <h2>Un poco de mi historia</h2>
            <p>
              Hace menos de 4 años estaba a estas horas conduciendo desde
              Alicante hasta Requena donde estudiaba para ser piloto, aquello
              que siempre había querido. En cambio, el entusiasmo era
              inexistente. Me encantaba volar, pero sabía que estaba en el
              camino hacia un estilo de vida que no resonaba conmigo. En
              esencia, se estaba apagando la llama en mi. Por no mencionar el
              pensamiento de depender de mi padre económicamente y ser una carga
              tan grande. Hasta que un día una persona abrió me abrió los
              ojos... me echó gasolina al fuego y despertó en mi una visión, una
              fe y una resilencia de la que llevaba un tiempo desconectado. Esa
              misma visión, fe y resilencia me ha llevado por el camino del
              emprendimiento durante los últimos 3 años y pico, con muchos
              altibajos, muchas experiencias, proyectos y más de 200,000€
              limpios generados DESDE CERO Y YO SOLO, 100,000€ de los cuales en
              2021. De nuevo... LIMPIOS. Las experiencias obviamente son lo que
              me llevo a la tumba, y entre ellas me llevaré la experiencia de
              abundancia que supone ser libre económicamente. Pagar el alquiler,
              pagar 500€/mes en comida, otros 500€/mes en gasolina, otros
              500€/mes en neumaticos o talleres, el alquiler de mi madre y
              muchos otros gastos fijos YA NO SON UNA PREOCUPACIÓN. En todo caso
              mi mayor problema es que no pille la poli haciendo el cabra o que
              el neumático me dura hasta llegar a casa. Llegados a este punto
              puede que te preguntes... ¿qué coño hace este chaval de 22 años
              para ganarse la vida? ¿Cómo empezó? Etc... Y si la curiosidad te
              puede, te invito a escuchar mi primer podcast donde contestaré a
              todas esas preguntas y más.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
