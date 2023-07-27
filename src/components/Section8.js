import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import reviewer from "../res/author.jpg";
import { MdOutlineThumbDown, MdOutlineThumbUp, MdStar } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const Section8 = () => {
  return (
    <>
      <Container fluid>
        <p className="fs-4 fw-bolder mt-5 mb-4">
          <MdStar
            fontSize={24}
            className="mb-1 me-1"
            style={{ color: "#ffd700" }}
          />
          4.6 course rating • 188K ratings
        </p>
        <Row className="d-flex justify-content-start align-items-center">
          <Col md={6}>
            <Card className="border-0 border-top border-bottom pb-4 pt-2">
              <Row>
                <Col md={2} className="text-start">
                  <img
                    src={reviewer}
                    width={48}
                    height={48}
                    alt="reviewer"
                    className="rounded-circle me-2 mt-3"
                  />
                </Col>
                <Col md={9}>
                  <p className="mt-2 mb-0 fw-bold fs-5">Sourav</p>
                  <Col className="d-flex">
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <p
                      className="text-muted fw-bold"
                      style={{ fontSize: "14px" }}
                    >
                      2 weeks ago
                    </p>
                  </Col>
                </Col>
                <Col md={1}>
                  <BsThreeDotsVertical
                    style={{ fontSize: "20px", marginTop: "25px" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p style={{ fontSize: "16px" }}>
                    One of the best courses that I have come across, was
                    immersed in it from start to end. Great coverage of angular
                    topics and good side project to practice and follow along
                    the course
                  </p>
                </Col>
              </Row>

              <Row>
                <Col className="d-flex">
                  <p className="text-muted me-3" style={{ fontSize: "12px" }}>
                    Helpful?
                  </p>

                  <MdOutlineThumbUp
                    style={{ fontSize: "18px" }}
                    className="me-3"
                  />
                  <MdOutlineThumbDown style={{ fontSize: "18px" }} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="border-0 border-top border-bottom pb-4 pt-2">
              <Row>
                <Col md={2} className="text-start">
                  <img
                    src={reviewer}
                    width={48}
                    height={48}
                    alt="reviewer"
                    className="rounded-circle me-2 mt-3"
                  />
                </Col>
                <Col md={9}>
                  <p className="mt-2 mb-0 fw-bold fs-5">Sourav</p>
                  <Col className="d-flex">
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <MdStar
                      style={{ fontSize: "16px", color: "#ffd700" }}
                      className="me-1 mt-1"
                    />
                    <p
                      className="text-muted fw-bold"
                      style={{ fontSize: "14px" }}
                    >
                      2 weeks ago
                    </p>
                  </Col>
                </Col>
                <Col md={1}>
                  <BsThreeDotsVertical
                    style={{ fontSize: "20px", marginTop: "25px" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p style={{ fontSize: "16px" }}>
                    One of the best courses that I have come across, was
                    immersed in it from start to end. Great coverage of angular
                    topics and good side project to practice and follow along
                    the course
                  </p>
                </Col>
              </Row>

              <Row>
                <Col className="d-flex">
                  <p className="text-muted me-3" style={{ fontSize: "12px" }}>
                    Helpful?
                  </p>

                  <MdOutlineThumbUp
                    style={{ fontSize: "18px" }}
                    className="me-3"
                  />
                  <MdOutlineThumbDown style={{ fontSize: "18px" }} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Section8;
