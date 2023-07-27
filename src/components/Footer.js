import React from "react";
import { Col, Row } from "reactstrap";
import { MdLanguage } from "react-icons/md";

//logos
import nasdaqLogo from "../res/logo/nasdaqLogo.png";
import volkswagonLogo from "../res/logo/volkswagonLogo.png";
import boxLogo from "../res/logo/boxLogo.png";
import netappLogo from "../res/logo/netappLogo.png";
import eventbriteLogo from "../res/logo/eventbriteLogo.png";
import udemyLogo from "../res/logo/udemyLogo.png";

const Footer = () => {
  return (
    <>
      <div className="mt-5 p-5 bg-dark" id="footer">
        <Row>
          <Col md={6}>
            <p className="text-white fw-bolder" style={{ fontSize: "18px" }}>
              Top companies choose{" "}
              <span style={{ color: "#A435F0" }}>Udemy Business</span> to build
              in-demand career skills.
            </p>
          </Col>
          <Col md={6} className="d-flex">
            <img
              src={nasdaqLogo}
              alt="logo1"
              width={100}
              height={45}
              className="me-3 ms-1"
            />
            <img
              src={volkswagonLogo}
              alt="logo2"
              width={100}
              height={45}
              className="me-3"
            />
            <img
              src={boxLogo}
              alt="logo3"
              width={100}
              height={45}
              className="me-3"
            />
            <img
              src={netappLogo}
              alt="logo4"
              width={100}
              height={45}
              className="me-3"
            />
            <img src={eventbriteLogo} alt="logo5" width={100} height={45} />
          </Col>
          <hr></hr>
        </Row>

        <Row>
          <Col md={9}>
            <Row>
              <Col md={4}>
                <li className="text-white list-unstyled">Udemy Business</li>
                <li className="text-white list-unstyled">Teach on Udemy</li>
                <li className="text-white list-unstyled">Get the app</li>
                <li className="text-white list-unstyled">About us</li>
                <li className="text-white list-unstyled">Contact us</li>
              </Col>
              <Col md={4}>
                <li className="text-white list-unstyled">Careers</li>
                <li className="text-white list-unstyled">Blog</li>
                <li className="text-white list-unstyled">Help and Support</li>
                <li className="text-white list-unstyled">Affiliate</li>
                <li className="text-white list-unstyled">Investors</li>
              </Col>
              <Col md={4}>
                <li className="text-white list-unstyled">Terms</li>
                <li className="text-white list-unstyled">Privacy policy</li>
                <li className="text-white list-unstyled">Cookie setting</li>
                <li className="text-white list-unstyled">Sitemap</li>
                <li className="text-white list-unstyled">
                  Accessibility statement
                </li>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="text-end">
            <button className="btn border border-1 rounded-0 text-white px-4">
              <MdLanguage fontSize={18} className="mb-1 me-1" />
              English
            </button>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6} className="text-start">
          <img src={udemyLogo} alt="logo5" width={110} height={50} />
          </Col>
          <Col md={6} className="text-end">
            <p className="text-white" style={{fontSize: "14px"}}>© 2023 Udemy, Inc.</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
