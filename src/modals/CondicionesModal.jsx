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
            Términos y Condiciones En esta web se detallan los servicios
            ofrecidos por IDealCloser OÜ. Su uso implica la aceptación de las
            siguientes condiciones, declinando realizar cualquier reclamación
            sobre las mismas. Este sitio web contiene textos elaborados con
            fines meramente informativos o divulgativos, que pueden no reflejar
            el estado actual de la legislación o la jurisprudencia, y que se
            refieren a situaciones generales, por lo que su contenido no debe
            ser aplicado necesariamente por el Usuario a casos concretos. a) El
            uso de esta web está dirigido a personas mayores de edad. Los
            menores de esta edad no están autorizados a utilizar esta web. b)
            IDealCloser OÜ podrá modificar el contenido de la web, sus servicios
            y productos, tarifas, garantías, etc., en cualquier momento y sin
            previo aviso. c) IDealCloser OÜ puede poner a disposición del
            usuario enlaces u otros elementos que permiten el acceso hacia otros
            sitios web pertenecientes a terceros. No comercializamos los
            productos y servicios de dichas páginas enlazadas, ni asumimos
            ningún tipo de responsabilidad sobre las mismas, ni sobre la
            información contenida en ellas, ni su veracidad o licitud, ni de
            cualesquiera efectos que pudieran derivarse. En todo caso,
            IDealCloser OÜ manifiesta que procederá a la retirada inmediata de
            cualquier contenido que pudiera contravenir la legislación nacional
            o internacional, la moral o el orden público, procediendo a la
            retirada inmediata de la redirección a dicho sitio web, poniendo en
            conocimiento de las autoridades competentes el contenido en
            cuestión. d) Los precios indicados en la web, de haberlos, serán
            válidos salvo error tipográfico, y susceptibles de cambios sin
            previo aviso. e) No es necesario registrarse en la web, ni facilitar
            ningún tipo de dato personal, para navegar por la misma. f)
            IDealCloser OÜ no puede garantizar el funcionamiento ininterrumpido
            o totalmente libre de errores de esta web. Por tanto, no nos hacemos
            responsables de ningún daño causado por el uso de este sitio. g)
            IDealCloser OÜ ofrece sus servicios y productos de manera
            indefinida, pudiendo, no obstante, suspender la prestación de los
            mismos, unilateralmente y sin previo aviso. h) IDealCloser OÜ no se
            hará responsable de los daños y perjuicios, propios o a terceros,
            producidos por un mal uso de esta web por parte del Usuario. i) El
            Usuario se compromete a no utilizar esta web ni los servicios
            ofrecidos en ella para la realización de actividades contrarias a la
            ley, al orden público o a estas condiciones. El Usuario que actúe
            contra la imagen, buen nombre o reputación de “Instituto Webinar”,
            así como quien utilice ilícita o fraudulentamente los diseños, logos
            o contenidos de la web y/o atente en cualquier forma contra los
            derechos de propiedad intelectual e industrial de la web o de los
            contenidos y servicios de la misma, será responsable frente a
            “Instituto Webinar” de su actuación. j) IDealCloser OÜ no se
            responsabiliza de los virus que tengan su origen en una transmisión
            telemática infiltrados por terceros generados con la finalidad de
            obtener resultados negativos para un sistema informático. k)
            IDealCloser OÜ no se hace responsable de la información y contenidos
            almacenados, a título enunciativo pero no limitativo, en foros,
            chats, generadores de blogs, comentarios, redes sociales o
            cualesquiera otro medio que permita a terceros publicar contenidos.
            No obstante y en cumplimiento de lo dispuesto en el art. 11 y 16 de
            la LSSI-CE, IDealCloser OÜ se pone a disposición de todos los
            usuarios, autoridades y fuerzas de seguridad, y colaborando de forma
            activa en la retirada o en su caso bloqueo de todos aquellos
            contenidos que pudieran afectar o contravenir la legislación
            nacional, o internacional, derechos de terceros o la moral y el
            orden público. En caso de que el Usuario considere que existe en el
            sitio web algún contenido que pudiera ser susceptible de esta
            clasificación, se ruega lo notifique de forma inmediata al
            administrador del sitio web. l) Este sitio web ha sido revisado y
            probado para que funcione correctamente. En principio, puede
            garantizarse el correcto funcionamiento los 365 días del año, 24
            horas al día. No obstante, IDealCloser OÜ no descarta la posibilidad
            de que existan ciertos errores de programación, o que acontezcan
            causas de fuerza mayor, catástrofes naturales, huelgas, o
            circunstancias semejantes que hagan imposible el acceso temporal a
            la página web. m) El contenido de los artículos publicados en este
            sitio web no puede ser considerado, en ningún caso, sustitutivo de
            asesoramiento legal. Si fuera el caso, el Usuario no debe actuar
            sobre la base de la información contenida en este sitio web sin
            recurrir previamente al correspondiente asesoramiento profesional.
            n) IDealCloser OÜ ser reserva el derecho a denegar o retirar el
            acceso a la web y/o los servicios ofrecidos sin necesidad de
            advertencia previa, a instancia propia o de un tercero, a aquellos
            Usuarios que incumplan nuestras Condiciones de Uso. 1. Condiciones
            legales para la compra en Instituto Webinar Las presentes
            Condiciones legales de contratación, regulan el uso de la tienda
            online https://idealsetter.com/, de la que es responsable legal:
            Nombre Comercial: IDealCloser OÜ Responsable-Denominación Social y
            Domicilio Social Harju maakond, Tallinn 5, Lasnamãe linnaosa, 11415
            Lõõtsa, Estonia Email de contacto: info@idealsetter.com Estas
            Condiciones serán aceptadas por las partes sin reservas, y podrán
            ser modificadas en cualquier momento y sin previo aviso, por lo que
            será responsabilidad del Usuario leerlas cada vez que realice una
            compra, ya que, las condiciones vigentes en el momento de
            celebración del contrato, serán las que le resulten aplicables. 2.
            Normativa aplicable El presente contrato electrónico se celebra bajo
            la normativa Española y en concreto bajo el régimen legal impuesto
            por la Ley 34/2002 de Servicios de la Sociedad de la Información y
            el Comercio Electrónico (LSSICE) y la Ley General 03/2014 para la
            Defensa de los Consumidores y Usuarios (LGDCU). El contrato
            electrónico no será archivado por un tercero y el idioma para su
            conclusión es el castellano. Las presentes condiciones generales
            podrán ser guardadas y reproducidas en cualquier momento por el
            usuario que realice una compra mediante las opciones de su navegador
            de internet, y deben ser aceptadas antes de proceder al pago de la
            contratación. 3. Cuenta de Usuario y Corrección de Errores Para
            poder realizar compras online en esta tienda es necesario el
            registro mediante la creación de una “Cuenta de Usuario”. Podrá
            registrarse en cualquier momento pinchando en el enlace
            correspondiente, o bien durante el proceso de compra. Una vez
            registrado, el Usuario recibirá un correo confirmando que el proceso
            se ha realizado con éxito y un recordatorio de los datos de acceso.
            Desde la cuenta podrás realizar compras, comprobar el historial de
            pedidos, cambiar la contraseña, modificar los datos personales,
            modificar la dirección de facturación, realizar comentarios, y otros
            trámites o gestiones relacionadas con tus compras. Además, en
            cualquier momento, podrás acceder a tu cuenta privada para comprobar
            tu información personal y direcciones y, en caso de que fuera
            necesario, corregir los errores que puedan haber existido en la
            introducción de los datos o actualizar los mismos. Las dirección de
            facturación también podrá corregirse o actualizarse a lo largo del
            proceso de compra. Podrás darte de baja en cualquier momento,
            enviando un correo electrónico, desde la dirección que se quiere dar
            de baja, a info@idealsetter.com, lo que conllevará la cancelación de
            sus datos de carácter personal. La creación y cancelación de una
            cuenta de usuario se regirá por lo establecido en la Política de
            Privacidad. 4. Proceso de Compra Comprar en IDealCloser OÜ es fácil
            y sencillo, solo tienes que seguir los siguientes pasos: 1)
            Seleccionar los servicios que desees adquirir de entre los ofrecidos
            por IDealCloser OÜ. Clicando en cada servicio, se accede a su ficha,
            que incluye una descripción detallada con la información,
            características principales y precio. Si necesitas saber más no
            dudes, en preguntarnos. 2) Una vez seleccionado el/los servicios que
            desees contratar, deberás pulsar el botón “Comprar”, quedando
            incorporado el servicio a tu carrito de la compra. Si lo deseas,
            podrá seguir añadiendo más servicio al carrito, o proceder
            directamente al pago. 3) Concluida la selección de servicios,
            aparecerá un resumen. Finalmente, para continuar, deberás pulsar el
            botón “Realizar Pedido”. 4) Como hemos indicado en apartados
            anteriores, al finalizar tu compra, deberás registrarte, indicando
            tus datos. En tus próximas compras no tendrás que introducirlos de
            nuevo, pues quedarán almacenados en tu Cuenta de Usuario. 5) Por
            último, deberás elegir el medio de pago de entre los ofrecidos por
            IDealCloser OÜ 6) Una vez finalizado el proceso de contratación, te
            enviaremos un correo electrónico en el que se detallarán los datos
            de la misma, así como justificante de compra o factura. Si no
            recibes este correo en 24 horas, o si aprecias cualquier error en
            los datos introducidos, ponte en contacto con nosotros 5. Formas de
            pago Dispone de diversas modalidades de pago para facilitarte la
            contratación: Transferencia bancaria, Tarjeta de credito o debito,
            Paypal entre otras pasarelas de pago como Stripe (donde IDealCloser
            OÜ nunca recoge ni manipula ningún dato del cliente relativo a su
            número de tarjeta. Todos los datos son tratados directamente por las
            paserlas) 6. Precios, impuestos, tasas y aranceles Los precios están
            expresados en Euros, y son válidos salvo error tipográfico. En el
            caso de que se produzca un error manifiesto en la fijación del
            precio que aparezca en la ficha de servicio, prevalecerá el precio
            establecido para dicho servicio en el email informativo que te
            proporcionaremos cuando detectemos el error. El PVP para cualquier
            cliente no incluye IVA. El precio indicado en cada servicio es el
            precio final del mismo para los envíos a estas CCAA. IDealCloser OÜ
            no será responsable de los gastos de importación e impuestos (ISPI,
            IGIC), o tasas, de ser el caso. 7. Devoluciones En IDealCloser OÜ
            deseamos la satisfacción con tu contratación. Por ello, te
            facilitamos la opción de cancelar la misma (desistimiento). El
            ejercicio de este derecho de desistimiento tendrá que realizarse en
            un plazo máximo de 14 días naturales a partir de la contratación.
            Deberás notificarnos, a través del correo info@idealsetter.com, tu
            decisión de desistir de la compra efectuada. No se admitirá el
            ejercicio del derecho de desistimiento sobre la adquisición de
            productos o servicios digitales que hayan podido ser usados por el
            Usuario, algo que queda registrado directamente en la plataforma.
            Para poder ejercer este derecho, el servicio no debe haberse
            iniciado. De haberse iniciado, IDealCloser OÜ se reserva el derecho
            a la no devolución del dinero. El reembolso del importe de la compra
            se efectuará una vez haya sido comprobado el estado de la
            contratación, a través del mismo medio de pago utilizado en la
            compra y, en todo caso, en un máximo de 30 días naturales desde la
            recepción fehaciente de la solicitud de desistimiento. 8. Resolución
            de conflictos Como así la exige la nueva normativa europea,
            informamos a los usuarios de la existencia de una plataforma europea
            de resolución de litigios para contrataciones online. Así, para la
            resolución de litigios en materia de consumo (conforme al Art. 14.1
            del Reglamento (UE) 524/2013), la Comisión Europea facilita una
            plataforma de resolución de litigios en línea que se encuentra
            disponible en el siguiente enlace:
            https://webgate.ec.europa.eu/odr/main/?event=main.home.show&lng=ES
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const CondicionesModal = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {" "}
      <a onClick={() => setModalShow(true)}>Condiciones</a>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default CondicionesModal;
