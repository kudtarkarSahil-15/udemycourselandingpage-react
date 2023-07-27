import React from "react";
import { Col, Row } from "reactstrap";
import { FaGlobe, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { PiSubtitlesFill } from "react-icons/pi";
const Section1 = () => {
  return (
    <>
      <Row
        className="bg-dark mx-0"
        style={{ padding: "20px 100px", width: "100%"}}
      >
        <Col md={8}>
          <Row>
            <Col
              className="fw-bolder"
              style={{ color: "#CEC0FC", fontSize: "14px" }}
            >
              {"Development > Web Development > Angular"}
            </Col>
          </Row>
          <Row>
            <h3 className="text-white fw-bolder mt-2">
              Angular - The Complete Guide (2023 Edition)
            </h3>
            <p className="text-white fs-6 fw-bold">
              Master Angular (formerly "Angular 2") and build awesome, reactive
              web apps with the successor of Angular.js
            </p>
          </Row>
          <Row>
            <Col className="d-flex">
              <p
                className="px-2"
                style={{ width: "85px", backgroundColor: "#ECEB98" }}
              >
                Bestseller
              </p>
              <p className="px-2 text-warning" style={{}}>
                <span className="fs-6">4.6</span>
                <FaStar
                  className="text-warning mb-1"
                  style={{ fontSize: "13px", marginLeft: "2px" }}
                />
                <FaStar
                  className="text-warning mb-1"
                  style={{ fontSize: "13px", marginLeft: "2px" }}
                />
                <FaStar
                  className="text-warning mb-1"
                  style={{ fontSize: "13px", marginLeft: "2px" }}
                />
                <FaStar
                  className="text-warning mb-1"
                  style={{ fontSize: "13px", marginLeft: "2px" }}
                />
                <FaStarHalfAlt
                  className="text-warning mb-1"
                  style={{ fontSize: "13px", marginLeft: "2px" }}
                />
                <span className="fs-6 ms-1" style={{ color: "#CEC0FC" }}>
                  {"(188,171 ratings)"}
                </span>
              </p>
              <p className="text-white fs-6" style={{}}>
                697,167 students
              </p>
            </Col>
          </Row>
          <Row>
            <p className="text-white" style={{ fontSize: "14px" }}>
              Created by{" "}
              <span style={{ color: "#CEC0FC" }}>Maximilian Schwarzmüller</span>
            </p>
          </Row>
          <Row>
            <Col className="d-flex">
              <p className="text-white me-3" style={{ fontSize: "14px" }}>
                <BsExclamationOctagonFill
                  color="white"
                  className="me-1 mb-1 fs-6"
                />
                Last updated 6/2023
              </p>
              <p className="text-white me-3" style={{ fontSize: "14px" }}>
                <FaGlobe color="white" className="me-1 mb-1" />
                English
              </p>
              <p className="text-white me-3" style={{ fontSize: "14px" }}>
                <PiSubtitlesFill color="white" className="me-1 mb-1 fs-5" />
                English [CC], Bulgarian [Auto],
                <span style={{ color: "#CEC0FC" }}>22 more</span>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Section1;
