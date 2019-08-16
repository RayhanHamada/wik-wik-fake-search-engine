import React from "react";
import "./MainPage.css";
import {
  Col,
  Row,
  Button,
  Container,
  Form,
  Navbar,
  Nav
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function MainPage() {
  return (
    <div>
      <Nav className="justify-content-end" id="mainNav">
        {["Wmail", "Images", "More"].map(val => (
          <Nav.Link className="mainNavLink">{val}</Nav.Link>
        ))}
      </Nav>
      <Col id="mainCol">
        <Row id="mainRow">
          <a id="linkToWikWik" href="https://wikwiksearchengine.herokuapp.com">
            <h1 id="wikWikH1" style={{fontSize: 70}}>Wik Wik</h1>
          </a>
          <p id="SEpar">Search Engine</p>
        </Row>
        <center>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Cari Skuy !"
            id="search"
          />
        </center>
        <center>
          <Button
            variant="outline-secondary"
            onClick={() => {
              let queries = $("#search")
                .val()
                .replace(" ", "+");
              window.location.href = `https://www.google.com/search?q=${queries}`;
            }}
            id="buttonE"
            block
          >
            Kuy !
          </Button>
        </center>
      </Col>
      <footer>
        <p id="parAuthor">By Mocchapine | Rayhan Hamada</p>
        <i
          class="fab fa-github fa-2x"
          id="gitIcon"
          onClick={() =>
            (window.location.href =
              "https://github.com/RayhanHamada/wik-wik-search-engine")
          }
        />
      </footer>
    </div>
  );
}
