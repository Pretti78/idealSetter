import React, { useState } from "react";
import { Button, Container, Modal, Nav } from "react-bootstrap";
import CookiesModal from "../modals/CookiesModal";
import AvisoLegalModal from "../modals/AvisoLegalModal";
import PoliticasPrivModal from "../modals/PoliticasPrivModal";
import CondicionesModal from "../modals/CondicionesModal";

const NavFooter = () => {
  return (
    <div>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link>
            <CookiesModal />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <AvisoLegalModal />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <PoliticasPrivModal />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <CondicionesModal />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavFooter;
