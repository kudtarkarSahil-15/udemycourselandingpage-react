import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAlarm } from "react-icons/md";
import { Col, Container, Row } from "reactstrap";

const PriceCardComponent2 = () => {

    const [fixedTop, setFixedTop] = useState(true)

    // Calculate the footer position when the component mounts
    useEffect(() => {
      const footerElement = document.getElementById('footer');
      const handleScroll = () => {
        if (footerElement) {
          // Get the distance from the top of the document to the top of the footer
          const footerTop = footerElement.getBoundingClientRect().top;
          // Get the bottom position of the PriceCardComponent2
          const priceCardBottom = 600
          // Set fixedTop to null when the PriceCardComponent2 reaches the footer
          setFixedTop(priceCardBottom < footerTop);
        }
      };
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
      return () => {
        // Clean up the scroll event listener when the component unmounts
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
      <Container className={fixedTop ? "bg-white border fixed-top shadow" : "bg-white border"}
        style={{ width: "350px", marginRight: "58px", marginTop: "20px"}}
      >
        <Col>
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
                <p className="text-danger mb-1" style={{fontSize: "14px"}}>
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
                <p className="fw-bolder me-4 mb-1 text-decoration-underline" style={{fontSize: "14px"}}>
                  Share
                </p>
                <p className="fw-bolder me-4 mb-1 text-decoration-underline" style={{fontSize: "14px"}}>
                  Gift this course
                </p>
                <p className="fw-bolder text mb-1 text-decoration-underline" style={{fontSize: "14px"}}>
                  Apply Coupon
                </p>
              </Col>

              <Col className="d-flex text-center my-1">
                <hr className="col-5 me-2" /> or <hr className="col-5 ms-2" />
              </Col>
              <p className="fw-bolder" style={{fontSize: "22px",fontFamily: "serif", lineHeight: "25px"}}>Subscribe to Udemy's top courses</p>
              <p style={{ fontSize: "14px", fontWeight: "500"}}>
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

export default PriceCardComponent2;
