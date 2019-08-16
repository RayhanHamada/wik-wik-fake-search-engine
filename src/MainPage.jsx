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
      <Nav
        className="justify-content-end"
        style={{ backgroundColor: "white", marginBottom: "13%" }}
      >
        {["Wmail", "Images", "More"].map(val => (
          <Nav.Link style={{ color: "#454545", marginLeft: "20px" }}>
            {val}
          </Nav.Link>
        ))}
      </Nav>
      <Col style={{ textAlign: "center" }}>
        <Row style={{ textAlign: "center", paddingLeft: "42%" }}>
          <a
            href="https://wikwiksearchengine.herokuapp.com"
            style={{ textDecoration: "none" }}
          >
            <h1
              style={{
                fontSize: 70,
                boxShadow: "0 8px 6px -6px black",
                color: "black"
              }}
            >
              Wik Wik
            </h1>
          </a>
          <p style={{ color: "orangered", fontSize: 20 }}>Search Engine</p>
        </Row>
          <center>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Cari Skuy !"
              style={{
                width: "50%",
                border: "2px solid black",
                textAlign: "center",
                marginTop: "1%"
              }}
              id="search"
            />
          </center>
        <center>
          <Button
            variant="outline-secondary"
            style={{ marginTop: "1%", width: "25%" }}
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
        <p style={{ color: "#bbbbbb", marginLeft: "10%" }}>
          By Mocchapine | Rayhan Hamada
        </p>
        <i
          class="fab fa-github fa-2x"
          onClick={() =>
            (window.location.href = "https://github.com/RayhanHamada/wik-wik-search-engine")
          }
          style={{ marginLeft: "10%" }}
        />
      </footer>
    </div>
  );
}
