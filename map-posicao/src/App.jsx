import React from "react";
import MapPosicao from "./MapPosicao/MapPosicao";
import FormPosicao from "./FormPosicao/FormPosicao";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container fluid style={{ width: "1024px" }} className="mt-5">
      <h2 className="mb-5">Consultar Posição</h2>
      <Row>
        <Col>
          <MapPosicao
            center={[-1.437972, -48.466901]}
            positions={[
              [-1.437972, -48.466901],
              [-1.44, -48.466901],
            ]}
          />
        </Col>
        <Col>
          <FormPosicao />
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
