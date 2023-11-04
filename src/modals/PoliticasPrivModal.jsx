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
            Política de Privacidad IDealCloser OÜ se encuentra profundamente
            comprometido con el cumplimiento de la normativa española de
            protección de datos de carácter personal, y garantiza el
            cumplimiento íntegro de las obligaciones dispuestas, así como la
            implementación de las medidas de seguridad dispuestas en el art. 9
            de la Ley 15/1999, de Protección de Datos de Carácter Personal
            (LOPD) y su Reglamento de Desarrollo, así como para el cumplimiento
            del Reglamento General de Protección de Datos (RGPD) (UE) 2016/679.
            De conformidad con estas normativas, informamos que la utilización
            de nuestra página web puede requerir que se faciliten ciertos datos
            personales a través de formularios de registro o contacto, o
            mediante el envío de emails, y que éstos serán objeto de tratamiento
            por “IDealCloser OÜ” Nombre Comercial: IDealCloser OÜ
            Responsable-Denominación Social y Domicilio Social Harju maakond,
            Tallinn 5, Lasnamãe linnaosa, 11415 Lõõtsa, Estonia Email de
            contacto: info@idealsetter.com IDealCloser OÜ, como Responsable del
            Tratamiento, tiene el deber de informar a los usuarios de su sitio
            web acerca de la recogida de datos de carácter personal que pueden
            llevarse a cabo, bien sea mediante el envío de correo electrónico o
            al cumplimentar los formularios incluidos en el sitio web. Se
            obtendrán únicamente los datos precisos para poder realizar el
            servicio contratado, o para poder responder adecuadamente a la
            petición de información realizada por el Usuario. Formularios de
            contacto/email Finalidad: Dar contestación a su solicitud de
            información realizada a través de nuestro/s formulario/s de
            contacto. Legitimación: La base jurídica que legitima este
            tratamiento es el consentimiento del Usuario, que podrá revocar en
            cualquier momento. Cesión de datos: Los datos personales serán
            tratados a través de servidores gestionados por GoHighLevel, que
            tendrá la consideración de Encargado del Tratamiento. Además,
            Nuestro prestador de servicios de correo electrónico, a través de
            los cuales se realizarán las comunicaciones, es Google LLC, a través
            de Google Suite. Formularios de alta en lista de correo (newsletter)
            Finalidad: Envío de comunicaciones comerciales de interés para el
            Usuario. Tal y como establece la LSSICE, IDealCloser OÜ se
            compromete a no remitir comunicaciones comerciales sin
            identificarlas como tales. A estos efectos, no será considerada como
            comunicación comercial la información enviada a los clientes para el
            mantenimiento de la relación contractual existente. Legitimación: La
            base jurídica que legitima este tratamiento es el consentimiento del
            Usuario, que podrá revocar en cualquier momento. Cesión de datos:
            Los datos personales serán tratados a través de servidores
            gestionados por Active Campaign, que tendrá la consideración de
            Encargado del Tratamiento. Formularios de registro/alta de cliente
            Finalidades: Gestionar su alta de Usuario en nuestra página
            web.Gestionar las compras realizadas en nuestra página
            web.Proporcionar información acerca de la tramitación y el estado de
            las compras.Registro histórico de las compras realizadas en nuestra
            página web.Envío de comunicaciones vía email y/o teléfono, con el
            fin de informar al Usuario de posibles incidencias, errores,
            problemas y/o estado de los pedidos. Legitimación: La base jurídica
            que legitima este tratamiento es la ejecución de un contrato. Cesión
            de datos: IDealCloser OÜ no cederá ni comunicará a ningún tercero
            tus datos, excepto en los casos legalmente previstos o cuando la
            prestación de un servicio implique la necesidad de una relación
            contractual con un Encargado de Tratamiento. Así, el Usuario acepta
            que algunos de los datos personales recabados sean facilitados a
            estos Encargados del Tratamiento (plataformas de pago, gestoría,
            intermediarios, etc.), cuando sea necesario para la efectiva
            realización del servicio contratado. El usuario acepta también que
            alguno de los servicios puedan ser, total o parcialmente,
            subcontratados a otras personas o empresas, que tendrán la
            consideración de Encargados del Tratamiento, con los que se ha
            convenido el correspondiente contrato de confidencialidad, o
            adherido a sus políticas de privacidad, establecidas en sus
            respectivas páginas web. El usuario podrá negarse a la cesión de tus
            datos a los Encargados del Tratamiento, mediante petición escrita,
            por cualquiera de los medios anteriormente referenciados. Además, en
            aquellos casos en que sea necesario, los datos de Clientes podrán
            ser cedidos a determinados organismos, en cumplimiento una
            obligación legal: Agencia Tributaria Española, entidades bancarias,
            Inspección de Trabajo, etc. MEDIDAS DE SEGURIDAD Se informa a los
            usuarios de que, en IDealCloser OÜ, se han adoptado las medidas
            técnicas y organizativas conforme a lo dispuesto en la normativa de
            protección de datos. Los datos personales que se recogen en los
            formularios son objeto de tratamiento, únicamente, por parte del
            personal de IDealCloser OÜ o de los Encargados del Tratamiento aquí
            establecidos. Se han adoptado las medidas de seguridad adecuadas a
            los datos que se facilitan y, además, se han instalado todos los
            medios y medidas técnicas a su alcance para evitar la pérdida, mal
            uso, alteración, acceso no autorizado y robo de los datos que nos
            facilitan. El Sitio Web de IDealCloser OÜ cuenta, además con un
            cifrado SSL, que permite al Usuario el envío seguro de sus datos
            personales a través de los formularios de contacto del sitio web.
            VERACIDAD DE LOS DATOS El Usuario manifiesta que todos los datos
            facilitados por él son ciertos y correctos y se compromete a
            mantenerlos actualizados. El usuario responderá de la veracidad de
            sus datos y será el único responsable de cuantos conflictos o
            litigios pudieran resultar por la falsedad de los mismos. Es
            importante que, para que podamos mantener los datos personales
            actualizados, el usuario informe a «Instituto Webinar» siempre que
            haya habido alguna modificación en los mismos. EJERCICIO DE DERECHOS
            La LOPD y el RGPD conceden a los interesados la posibilidad de
            ejercer una serie de derechos relacionados con el tratamiento de sus
            datos personales. Para ello, el usuario deberá dirigirse, aportando
            documentación que acredite su identidad (DNI o pasaporte), mediante
            correo electrónico a info@idealsetter.com, o bien mediante
            comunicación escrita a la dirección que aparece en nuestro Aviso
            Legal. Dicha comunicación deberá reflejar la siguiente información:
            nombre y apellidos del Usuario, la petición de solicitud, el
            domicilio y los datos acreditativos. El ejercicio de derechos deberá
            ser realizado por el propio Usuario. No obstante, podrán ser
            ejecutados por una persona autorizada como representante legal del
            Usuario, aportándose la documentación que acredite dicha
            representación. El usuario podrá solicitar el ejercicio de los
            derechos siguientes: Derecho a solicitar el acceso a los datos
            personales. Derecho a solicitar su rectificación (en caso de que
            sean incorrectos) o supresión. Derecho a solicitar la limitación de
            su tratamiento, en cuyo caso únicamente serán conservados por
            IDealCloser OÜ para el ejercicio o la defensa de reclamaciones.
            Derecho a oponerse al tratamiento: IDealCloser OÜ dejará de tratar
            sus datos, salvo que por motivos legítimos o el ejercicio o la
            defensa de posibles reclamaciones se tengan que seguir tratando.
            Derecho a la portabilidad de los datos: en caso de que quiera que
            sus datos sean tratados por otra empresa, IDealCloser OÜ le
            facilitará la portabilidad de sus datos en formato exportable. En el
            caso de que se haya otorgado el consentimiento para alguna finalidad
            específica, el usuario tiene derecho a retirar el consentimiento en
            cualquier momento, sin que ello afecte a la licitud del tratamiento
            basado en el consentimiento previo a su retirada. Si un usuario
            considera que hay un problema con la forma en que IDealCloser OÜ
            está manejando sus datos, puede dirigir sus reclamaciones al
            Responsable de Seguridad o a la autoridad de protección de datos que
            corresponda, siendo la Agencia Española de Protección de Datos la
            indicada en el caso de España. CONSERVACIÓN DE LOS DATOS Los datos
            de carácter personal de los Usuarios que usen el formulario de
            contacto o de alta en el boletín serán tratados durante el tiempo
            estrictamente necesario para atender a la solicitud de información,
            o hasta que se revoque el consentimiento otorgado. Por su parte, los
            datos de carácter personal del Cliente serán tratados hasta que
            finalice la relación contractual. El período de conservación de los
            datos personales será el mínimo necesario, pudiendo mantenerse hasta
            4 años: Ley sobre Infracciones y Sanciones en el Orden Social
            (obligaciones en materia de afiliación, altas, bajas, cotización,
            pago de salarios…); Arts. 66 y sig. Ley General Tributaria (libros
            de contabilidad…) 5 años: Art. 1964 Código Civil (acciones
            personales sin plazo especial) 6 años: Art. 30 Código de Comercio
            (libros de contabilidad, facturas…) 10 años: Art. 25 Ley de
            Prevención del Blanqueo de Capitales y Financiación del Terrorismo.
            Sin plazo: datos desagregados y anonimizados. En el caso de que se
            traten datos de candidatos (C.V.), «Instituto Webinar» podrá
            mantener almacenado su currículo un máximo de dos años para
            incorporarlo a futuras convocatorias, a menos que el candidato se
            manifieste en contrario. TRANSFERENCIAS INTERNACIONALES DE DATOS
            IDealCloser OÜ utiliza los servicios de mailing de
            https://www.activecampaign.com/. El usuario acepta expresamente y de
            forma inequívoca su consentimiento para el tratamiento de sus datos
            y para la transferencia internacional de los mismos a esta/s
            empresa/s prestadora/s de servicios. CONFIDENCIALIDAD La información
            suministrada por el cliente tendrá, en todo caso, la consideración
            de confidencial, sin que pueda ser utilizada para otros fines
            distintos a los aquí descritos. «Instituto Webinar» se obliga a no
            divulgar ni revelar información sobre las pretensiones del Usuario,
            los motivos del asesoramiento solicitado o la duración de su
            relación con éste. VALIDEZ Esta política de privacidad y de
            protección de datos ha sido redactada por EXPERTOS LOPD®, empresa de
            RGPD, a día 14 de febrero de 2019, y podrá variar en función de los
            cambios de normativa y jurisprudencia que se vayan produciendo,
            siendo responsabilidad del titular de los datos la lectura del
            documento actualizado, en orden a conocer sus derechos y
            obligaciones al respecto en cada momento.
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const PoliticasPrivModal = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {" "}
      <a onClick={() => setModalShow(true)}>Privacidad</a>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default PoliticasPrivModal;
