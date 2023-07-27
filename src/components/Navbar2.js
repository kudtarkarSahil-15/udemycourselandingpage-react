import React from "react";
import { FaStar } from "react-icons/fa";
import { Col, Nav, NavItem, Navbar, Row } from "reactstrap";

const Navbar2 = () => {
  return (
    <>
      <Navbar className="bg-dark border-bottom d-flex justify-content-between px-3 pt-2 pb-0 fixed-top" style={{zIndex: "1000"}}>
        <Nav className="d-flex align-items-center">
          <NavItem>
            <Row>
              <Col>
                <Row>
                  <p className="text-white fw-bolder mb-2">
                    Angular - The Complete Guide (2023 Edition)
                  </p>
                </Row>
                <Row className="mt-2">
                    <div className="d-flex align-items-center" style={{height: "15px"}}>
                      <p
                        className="px-1 fw-bold pb-0"
                        style={{
                          width: "65px",
                          height: "20px",
                          backgroundColor: "#ECEB98",
                          fontSize: "12px", 
                        }}
                      >
                        Bestseller
                      </p>
                      <p className="px-2" style={{ color: "#ffd700" }}>
                        <span style={{ fontSize: "14px" }}>4.6</span>
                        <FaStar
                          className="mb-2"
                          style={{
                            fontSize: "12px",
                            marginLeft: "2px",
                            color: "#ffd700",
                          }}
                        />
                        <span
                          className="ms-1 text-decoration-underline"
                          style={{ color: "#CEC0FC", fontSize: "14px" }}
                        >
                          {"(188,171 ratings)"}
                        </span>
                      </p>
                      <p className="text-white" style={{ fontSize: "14px" }}>
                        697,167 students
                      </p>
                    </div>
                </Row>
              </Col>
            </Row>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navbar2;
