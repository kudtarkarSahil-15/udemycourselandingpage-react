import React, { useState } from "react";
import {
  MdOutlineInsertDriveFile,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { ImCircleDown, ImCircleUp } from "react-icons/im";
import { Card, CardBody, Col, Collapse, Row } from "reactstrap";

const CustomAccordion = ({ title, contentItems, timeline1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <Card className="rounded-0">
        <CardBody
          onClick={toggleAccordion}
          className=""
          style={{
            cursor: "pointer",
            backgroundColor: "#F7F9FA",
            padding: "14px 20px",
          }}
        >
          <Row>
            <Col md={9}>
              {!isOpen ? (
                <MdOutlineKeyboardArrowDown className="fs-4 me-1" />
              ) : (
                <MdOutlineKeyboardArrowUp className="fs-4 me-1" />
              )}
              <span className="fs-6 fw-bolder">{title}</span>
            </Col>
            <Col md={3}>
              <p className="text-end mb-0" style={{ fontSize: "14px" }}>
                {timeline1}
              </p>
            </Col>
          </Row>
        </CardBody>

        <Collapse isOpen={isOpen}>
          {contentItems.map((contentItem, index) => (
            <Card key={index} className="border-0">
              <CardBody
                onClick={toggleAccordion2}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#FFF",
                  padding: "10px 20px",
                }}
              >
                {contentItem.preview === "Preview" ? (
                  <Row>
                    <Col md={9}>
                      <MdOutlineOndemandVideo className="me-2"/>
                      <span
                        className="text-decoration-underline fw-medium"
                        style={{ fontSize: "14px", color: "blue" }}
                      >
                        {contentItem.content1 ||
                          contentItem.content2 ||
                          contentItem.content3}
                      </span>
                      {!isOpen2 ? (
                        <ImCircleDown
                          className="fs-6 ms-1"
                          style={{ color: "grey" }}
                        />
                      ) : (
                        <ImCircleUp
                          className="fs-6 ms-1"
                          style={{ color: "grey" }}
                        />
                      )}
                    </Col>
                    <Col md={2}>
                      <p className="text-end mb-0 text-decoration-underline" style={{ fontSize: "14px", color: "blue"}}>
                        {contentItem.preview}
                      </p>
                    </Col>
                    <Col md={1}>
                      <p className="text-end mb-0" style={{ fontSize: "14px" }}>
                        {contentItem.duration}
                      </p>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col md={9}>
                      <span
                        className=""
                        style={{ fontSize: "14px",}}
                      >
                        <MdOutlineInsertDriveFile />{" "}
                        {contentItem.content1 ||
                          contentItem.content2 ||
                          contentItem.content3}
                      </span>
                      {!isOpen2 ? (
                        <ImCircleDown
                          className="fs-6 ms-1"
                          style={{ color: "grey" }}
                        />
                      ) : (
                        <ImCircleUp
                          className="fs-6 ms-1"
                          style={{ color: "grey" }}
                        />
                      )}
                    </Col>
                    <Col md={2}>
                      <p className="text-end mb-0" style={{ fontSize: "14px" }}>
                        {contentItem.preview}
                      </p>
                    </Col>
                    <Col md={1}>
                      <p className="text-end mb-0" style={{ fontSize: "14px" }}>
                        {contentItem.duration}
                      </p>
                    </Col>
                  </Row>
                )}
              </CardBody>
              <Collapse isOpen={isOpen2}>
                {/* Here, use isOpen instead of isOpen2 */}
                <CardBody className="py-1">
                  <p className="text-muted mb-0 ps-3" style={{fontSize: "14px"}}>{contentItem.desc}</p>
                </CardBody>
              </Collapse>
            </Card>
          ))}
        </Collapse>
      </Card>
    </>
  );
};

export default CustomAccordion;
