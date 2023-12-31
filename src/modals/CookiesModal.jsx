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
            Política de Cookies Esta política de cookies fue actualizada por
            última vez el mayo 31, 2023 y se aplica a los ciudadanos y
            residentes legales permanentes del Espacio Económico Europeo y Suiza
            1. Introducción Nuestra web: https://idealsetter.com/ (en adelante:
            «la web») utiliza cookies y otras tecnologías relacionadas (para
            mayor comodidad, todas las tecnologías se denominan «cookies»). Las
            cookies también son colocadas por terceros a los que hemos
            contratado. En el siguiente documento te informamos sobre el uso de
            cookies en nuestra web. 2. ¿Qué son las cookies? Una cookie es un
            pequeño archivo que se envía junto con las páginas de esta web y que
            tu navegador almacena en el disco duro de su ordenador u otro
            dispositivo. La información almacenada puede ser devuelta a nuestros
            servidores o a los servidores de terceros apropiados durante una
            visita posterior. 3. ¿Qué son los scripts? Un script es un fragmento
            de código de programa que se utiliza para hacer que nuestra web
            funcione correctamente y de forma interactiva. Este código se
            ejecuta en nuestro servidor o en tu dispositivo. 4. ¿Qué es una
            baliza web? Una baliza web (o una etiqueta de píxel) es una pequeña
            e invisible pieza de texto o imagen en una web que se utiliza para
            monitorear el tráfico en una web. Para ello, se almacenan varios
            datos sobre usted mediante estas balizas web. 5. Cookies 5.1 Cookies
            técnicas o funcionales Algunas cookies aseguran que ciertas partes
            de la web funcionen correctamente y que tus preferencias de usuario
            sigan recordándose. Al colocar cookies funcionales, te facilitamos
            la visita a nuestra web. De esta manera, no necesitas introducir
            repetidamente la misma información cuando visitas nuestra web y, por
            ejemplo, los artículos permanecen en tu cesta de la compra hasta que
            hayas pagado. Podemos colocar estas cookies sin tu consentimiento.
            5.2 Cookies de estadísticas Utilizamos cookies estadísticas para
            optimizar la experiencia de la web para nuestros usuarios. Con estas
            cookies estadísticas obtenemos información sobre el uso de nuestra
            web. Te pedimos tu permiso para colocar cookies de estadísticas. 5.3
            Cookies publicitarias En esta web utilizamos cookies publicitarias,
            lo que nos permite personalizar los anuncios para ti, y nosotros (y
            terceros) obtenemos información sobre los resultados de la campaña.
            Esto sucede en base a un perfil que creamos con tus clic y
            navegación dentro y fuera de la "web". Con estas cookies tú, como
            visitante de la web, estás vinculado a un ID único, por lo que no
            verás el mismo anuncio más de una vez, por ejemplo. 5.4 Cookies de
            marketing/seguimiento Las cookies de marketing/seguimiento son
            cookies, o cualquier otra forma de almacenamiento local, usadas para
            crear perfiles de usuario para mostrar publicidad o para hacer el
            seguimiento del usuario en esta web o en varias webs con fines de
            marketing similares. Debido a que estas cookies están marcadas como
            cookies de seguimiento, te pedimos tu permiso para colocarlas. 5.5
            Redes sociales En nuestra web hemos incluido contenido de WhatsApp
            para promover páginas web (p.ej.: «Me gusta», «Pinear») o compartir
            (p.ej.: «tuitear») en redes sociales como WhatsApp. Este contenido
            está incrustado con código derivado de WhatsApp y guarda cookies.
            Este contenido podría procesar cierta información para anuncios
            personalizados. Por favor lea la política de privacidad de estas
            redes sociales (que puede cambiar frecuentemente) para saber que
            hacen con sus datos (personales) que procesan usando estas cookies.
            Los datos que reciben son anonimizados lo máximo posible. WhatsApp
            está ubicado en los Estados Unidos. 6. Consentimiento Cuando visites
            nuestra web por primera vez, te mostraremos una ventana emergente
            con una explicación sobre las cookies. Tan pronto como hagas clic en
            «Guardar», aceptas que usemos las categorías de cookies y plugins
            que has seleccionado en la ventana emergente, tal y como se describe
            en esta política de cookies. Puedes desactivar el uso de cookies a
            través de tu navegador, pero, por favor, ten en cuenta que nuestra
            web puede dejar de funcionar correctamente. 7.
            Activación/desactivación y borrado de cookies Puedes utilizar tu
            navegador de Internet para eliminar las cookies de forma automática
            o manual. También puedes especificar que ciertas cookies no pueden
            ser colocadas. Otra opción es cambiar los ajustes de tu navegador de
            Internet para que recibas un mensaje cada vez que se coloca una
            cookie. Para obtener más información sobre estas opciones, consulta
            las instrucciones de la sección «Ayuda» de tu navegador. Ten en
            cuenta que nuestra web puede no funcionar correctamente si todas las
            cookies están desactivadas. Si borras las cookies de tu navegador,
            se volverán a colocar después de tu consentimiento cuando vuelvas a
            visitar nuestras webs. 8. Tus derechos con respecto a los datos
            personales Tienes los siguientes derechos con respecto a tus datos
            personales: Tiene derecho a saber por qué se necesitan tus datos
            personales, qué sucederá con ellos y durante cuánto tiempo se
            conservarán.Derecho de acceso: tienes derecho a acceder a tus datos
            personales que conocemos.Derecho de rectificación: tienes derecho a
            completar, rectificar, borrar o bloquear tus datos personales cuando
            lo desees. Si nos das tu consentimiento para procesar tus datos,
            tienes derecho a revocar dicho consentimiento y a que se eliminen
            tus datos personales.Derecho de cesión de tus datos: tienes derecho
            a solicitar todos tus datos personales al responsable del
            tratamiento y a transferirlos íntegramente a otro responsable del
            tratamiento.Derecho de oposición: puedes oponerte al tratamiento de
            tus datos. Nosotros cumplimos con esto, a menos que existan motivos
            justificados para el procesamiento. Para ejercer estos derechos, por
            favor, contacta con nosotros. Por favor, consulta los detalles de
            contacto en la parte inferior de esta política de cookies. Si tienes
            alguna queja sobre cómo gestionamos tus datos, nos gustaría que nos
            la hicieras saber, pero también tienes derecho a enviar una queja a
            la autoridad supervisora (la autoridad de protección de datos). 9.
            Datos de contacto Para preguntas y/o comentarios sobre nuestra
            política de cookies y esta declaración, por favor, contacta con
            nosotros usando los siguientes datos de contacto: Correo
            electrónico: info@idealsetter.com
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const CookiesModal = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {" "}
      <a onClick={() => setModalShow(true)}>cookies</a>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default CookiesModal;
