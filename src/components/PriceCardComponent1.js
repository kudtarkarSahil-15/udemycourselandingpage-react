import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import courseImage from "../res/course_image.jpeg";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAlarm } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";

const PriceCardComponent1 = () => {
  const [marginTop, setMarginTop] = useState("102px");

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and decide whether to show or hide the navbar
      const scrollTop = window.scrollY;
      if (scrollTop > 40) {
        setMarginTop("40px");
      } else {
        setMarginTop("102px");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Container
        className="bg-white border position-absolute top-0 start-50 shadow"
        style={{ width: "350px", marginLeft: "225px", marginTop }}
      >
        <Col>
          <Row>
            <img src={courseImage} alt="course" className="p-0" width={340} />
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ height: "250px", position: "absolute" }}
            >
              <button className="btn rounded-circle bg-white"><BsFillPlayFill fontSize={48} /></button>
              <p className="text-white fw-bold mt-4">Preview this course</p>
            </div>
          </Row>

          <Row className="text-center">
            <Col className="p-0">
              <div className="py-2 bg-white text-dark fw-bold border-dark border-bottom border-3">
                Personel
              </div>
            </Col>
            <Col className="p-0">
              <div className="py-2 bg-white fw-bold text-muted">Teams</div>
            </Col>
          </Row>

          <Row className="px-3">
            <Col>
              <Row>
                <p className="mb-1">
                  <FaRupeeSign className="mb-2 fs-5" />
                  <span className="fs-4 fw-bolder me-2">649</span>{" "}
                  <span className="me-2">
                    <s>₹3,199</s>
                  </span>
                  <span className="" style={{ fontSize: "18px" }}>
                    80% off
                  </span>
                </p>
              </Row>
              <Row>
                <p className="text-danger mb-1" style={{ fontSize: "14px" }}>
                  <MdOutlineAlarm className="text-danger fs-5 mb-1" />
                  <strong> 1 day</strong> left at this price!
                </p>
              </Row>

              <div className="text-center">
                <button
                  style={{
                    backgroundColor: "#A435F0",
                    color: "white",
                    padding: "10px 75px",
                  }}
                  className="fs-6 fw-bold border-0 mb-3"
                >
                  Buy this course
                </button>
                <p className="text-muted mb-2" style={{ fontSize: "14px" }}>
                  30-Day Money-Back Guarantee
                </p>
                <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
                  Full Lifetime Access
                </p>
              </div>

              <Col className="d-flex">
                <p
                  className="fw-bolder me-4 mb-1 text-decoration-underline"
                  style={{ fontSize: "14px" }}
                >
                  Share
                </p>
                <p
                  className="fw-bolder me-4 mb-1 text-decoration-underline"
                  style={{ fontSize: "14px" }}
                >
                  Gift this course
                </p>
                <p
                  className="fw-bolder text mb-1 text-decoration-underline"
                  style={{ fontSize: "14px" }}
                >
                  Apply Coupon
                </p>
              </Col>

              <Col className="d-flex text-center my-1">
                <hr className="col-5 me-2" /> or <hr className="col-5 ms-2" />
              </Col>
              <p
                className="fw-bolder"
                style={{
                  fontSize: "22px",
                  fontFamily: "serif",
                  lineHeight: "25px",
                }}
              >
                Subscribe to Udemy's top courses
              </p>
              <p style={{ fontSize: "14px", fontWeight: "500" }}>
                Get this course, plus 8,000+ of our top-rated courses, with
                Personal Plan.{" "}
                <span className="text-primary text-decoration-underline fw-bold">
                  Learn more
                </span>
              </p>

              <div className="text-center">
                <button
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px 75px",
                  }}
                  className="fs-6 fw-bold border-1 mb-1"
                >
                  Start subscription
                </button>
                <p className="text-muted mb-2" style={{ fontSize: "14px" }}>
                  Starting at ₹750 per month
                </p>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Cancel anytime
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default PriceCardComponent1;
