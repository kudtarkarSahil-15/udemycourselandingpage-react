import React from "react";
import { BiCheck } from "react-icons/bi";
import { Card, CardTitle, Col, Row } from "reactstrap";

const Section2 = () => {
  return (
    <Card className="px-3 pt-4 rounded-0">
      <CardTitle className="fs-4 fw-bolder">What you'll learn</CardTitle>
      <Row>
        <Col>
          <span className="d-flex">
            <BiCheck className="me-2 fs-2" />
            <p style={{ fontSize: "13px" }}>
              Develop modern, complex, responsive and scalable web applications
              with Angular
            </p>
          </span>
        </Col>
        <Col>
          <span className="d-flex">
            <BiCheck className="fs-2 me-2" />
            <p style={{ fontSize: "13px" }}>
              Fully understand the architecture behind an Angular application
              and how to use it
            </p>
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span className="d-flex">
            <BiCheck className="me-2" style={{fontSize:"45px"}}/>
            <p style={{ fontSize: "13px" }}>
              Use the gained, deep understanding of the Angular fundamentals to
              quickly establish yourself as a frontend developer
            </p>
          </span>
        </Col>
        <Col>
          <span className="d-flex">
            <BiCheck className="me-2" style={{fontSize:"35px"}}/>
            <p style={{ fontSize: "13px" }}>
              Create single-page applications with one of the most modern
              JavaScript frameworks out there
            </p>
          </span>
        </Col>
      </Row>
    </Card>
  );
};

export default Section2;
