import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const FormPosicao = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Row>
          <Col xs lg="4">
            <Form.Label>Identificação</Form.Label>
            <Form.Control type="text" value="Veículo Policial" readOnly />
          </Col>
          <Col md lg="4">
            <Form.Label>Data Início</Form.Label>
            <Form.Control type="date" readOnly />
          </Col>
          <Col md lg="4">
            <Form.Label>Data Fim</Form.Label>
            <Form.Control type="date" readOnly />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Situação</Form.Label>
        <Form.Control type="text" value="ta lascado" readOnly />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Dispositivo</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Selecione o dispositivo</option>
          <option value="1">Carro</option>
          <option value="2">Moto</option>
          <option value="3">Bicicreta</option>
        </Form.Select>
      </Form.Group>
    </>
  );
};

export default FormPosicao;
