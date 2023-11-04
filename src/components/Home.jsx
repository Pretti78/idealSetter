import React from "react";
import { Carousel, Image } from "react-bootstrap";
import carruselUno from "../assets/images/iDealSetterCarrusel.jpg";
import chrisCarrusel from "../assets/images/christianBresserCarrusel.jpg";
import carruselDos from "../assets/images/iDealSetterCarruselDos.jpg";

const Home = () => {
  return (
    <div id="home">
      <Carousel fade>
        <Carousel.Item>
          <Image
            src={carruselUno}
            className="d-block w-60"
            style={{
              height: "80vh",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3 style={{ textShadow: "2px 2px 3px white" }}>
              Desbloquea la habilidad
            </h3>
            <p style={{ textShadow: "2px 2px 3px black" }}>
              con la que ganarás más de 2000€ al mes, en menos de 90 días,
              simplemente abriendo conversaciones desde tu móvil...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={chrisCarrusel}
            className="d-block w-60"
            style={{
              height: "80vh",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption style={{ textShadow: "1px 1px 2px white" }}>
            <h3>
              We train & manage sales teams for experts we believe in - 🇪🇸 & 🇺🇸
            </h3>
            <p>+$5m collected in 3 years</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={carruselDos}
            className="d-block w-60"
            style={{
              height: "80vh",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption style={{ textShadow: "1px 1px 2px white" }}>
            <h3>Domina tu vida, domina la energía... en todas sus formas.</h3>
            <p>Vive la vida según tu diseño.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
