import React from "react";
import { Card, Col, Row } from "reactstrap";
import author from "../res/author.jpg";
import { FaStar } from "react-icons/fa";
import { MdOutlineThumbDown, MdOutlineThumbUp } from "react-icons/md";
const Section6 = () => {
  return (
    <>
      <Card className="mt-4 rounded-0">
        <Row className="p-3">
          <Col>
            <h4 className="fw-bolder">Featured Review</h4>
          </Col>
          <Row>
            <Col md={3}>
              <Row>
                <Col className="pe-0">
                  <img
                    src={author}
                    alt="author"
                    className="rounded-circle"
                    width={70}
                    height={70}
                  />
                </Col>
                <Col className="ps-0">
                  <p className="mb-0 fw-bold">Jason W.</p>
                  <p className="mb-0" style={{fontSize:"14px"}}>35 courses</p>
                  <p className="mb-0" style={{fontSize: "14px"}}>9 reviews</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FaStar className="text-warning me-1" />
                  <FaStar className="text-warning me-1" />
                  <FaStar className="text-warning me-1" />
                  <FaStar className="text-warning me-1" />
                  <FaStar className="text-warning me-1" />
                </Col>
              </Row>
            </Col>
          </Row>
          <p className="mt-2 mb-3" style={{ fontSize: "14px" }}>
            Max is a fantastic instructor, providing in depth explanations of
            concepts to help you learn. I appreciate that in most instances he
            provides a starting and ending package to at first give you a boost,
            and then to allow you to compare or troubleshoot your own work
            against his. Take the time to not only dive into his lessons, but
            explore on your own. You will grasp the concepts he teaches quickly!
          </p>
          <p className="" style={{ fontSize: "12px" }}>
            Was this review helpful?
          </p>
          <Row>
            <Col>
              <button className="btn btn-outline-dark rounded-circle border-1 me-3"><MdOutlineThumbUp className="fs-5 mb-1" /></button>
              <button className="btn btn-outline-dark rounded-circle border-1 me-3"><MdOutlineThumbDown className="fs-5 mb-1" /></button>
              <span>Report</span>
            </Col>
          </Row>
        </Row>
      </Card>
    </>
  );
};

export default Section6;
