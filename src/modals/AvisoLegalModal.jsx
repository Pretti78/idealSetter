import React, { useState } from "react";
import { Button, Container, Modal, Nav } from "react-bootstrap";
import iDealSetter from "../assets/images/iDealSetter.png";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img src={iDealSetter} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <p>
            Aviso Legal En cumplimiento de la Ley 34/2002, de 11 de julio, de
            Servicios de la Sociedad de la Información y Comercio Electrónico
            (LSSI CE), informamos a los usuarios de los datos de la entidad o
            persona propietaria de esta página web: Nombre Comercial:
            IDealCloser OÜ Responsable-Denominación Social y Domicilio Social
            Harju maakond, Tallinn 5, Lasnamãe linnaosa, 11415 Lõõtsa, Estonia
            Email de contacto: info@idealsetter.com Registro de Tratamientos
            conforme al RGPD: Clientes/Proveedores, Listas de Correo, Empleados
            y Usuarios Web. Nombre de dominio (sitio web):
            https://idealsetter.com/ IDealCloser OÜ, responsable del sitio web,
            pone a disposición de los Usuarios la presente información al objeto
            de regular el uso de la página que el mismo pone a disposición del
            público. Toda persona que acceda a este sitio web asume el papel de
            Usuario, comprometiéndose a la observancia y cumplimiento riguroso
            de las condiciones aquí dispuestas, así como a cualesquiera otra
            disposición legal que fuera de aplicación. «Instituto Webinar se
            reserva el derecho a modificar cualquier tipo de información que
            pudiera aparecer en el sitio web, sin que exista obligación de
            preavisar o poner en conocimiento de los usuarios dichas
            obligaciones, entendiéndose como suficiente la publicación en el
            sitio web. PROTECCIÓN DE DATOS Toda la información relativa a la
            política de protección de datos de «Instituto Webinar se encuentra
            en nuestra “Política de Privacidad”. PROPIEDAD INTELECTUAL El sitio
            web, incluyendo a título enunciativo pero no limitativo su
            programación, edición, compilación y demás elementos necesarios para
            su funcionamiento, los diseños, logotipos, texto y/o gráficos son
            propiedad de IDealCloser OÜ o, en su caso, dispone de licencia o
            autorización expresa por parte de los autores. Todos los contenidos
            del sitio web se encuentran debidamente protegidos por la normativa
            de propiedad intelectual e industrial (artículos 8 y 32.1, párrafo
            segundo, de la Ley de Propiedad Intelectual), así como inscritos en
            los registros públicos correspondientes, y no se permite la
            reproducción y/o publicación, total o parcial, del sitio web, ni su
            tratamiento informático, su distribución, difusión, modificación o
            transformación, sin el permiso previo y por escrito del mismo.
            IDealCloser OÜ velará por el cumplimiento de las anteriores
            condiciones, así como por la debida utilización de los contenidos
            presentados en sus páginas web, ejercitando todas las acciones
            civiles y penales que le correspondan en el caso de infracción o
            incumplimiento de estos derechos por parte del usuario. Los diseños,
            logotipos, texto y/o gráficos ajenos a IDealCloser OÜ y que pudieran
            aparecer en el sitio web, pertenecen a sus respectivos propietarios,
            siendo ellos mismos responsables de cualquier posible controversia
            que pudiera suscitarse respecto a los mismos. En todo caso,
            IDealCloser OÜ cuenta con la autorización expresa y previa por parte
            de los mismos. IDealCloser OÜ reconoce a favor de sus titulares los
            correspondientes derechos de propiedad industrial e intelectual, no
            implicando su sola mención o aparición en el sitio web la existencia
            de derechos o responsabilidad alguna del Responsable sobre los
            mismos, como tampoco respaldo, patrocinio o recomendación por parte
            del mismo. LEY APLICABLE Y JURISDICCIÓN La relación entre
            Responsable y Usuario se rige en todos y cada uno de sus extremos
            por la ley española, a la que se someten expresamente las partes. El
            idioma de redacción e interpretación de este aviso legal es el
            español. Para la resolución de todas las controversias o cuestiones
            relacionadas con el presente sitio web o de las actividades en él
            desarrolladas, IDealCloser OÜ y Usuario acuerdan someterse a los
            Juzgados y Tribunales de Estonia.
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const AvisoLegalModal = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {" "}
      <a onClick={() => setModalShow(true)}>Aviso Legal</a>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default AvisoLegalModal;
