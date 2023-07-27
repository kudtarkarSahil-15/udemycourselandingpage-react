import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import Section1 from "./components/Section1";
import PriceCardComponent1 from "./components/PriceCardComponent1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import PriceCardComponent2 from "./components/PriceCardComponent2";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";

const MainComponent = () => {
  const [showPriceCard, setPriceCard] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and decide whether to show or hide the navbar
      const scrollY = window.scrollY;
      const showThreshold = 200; // Adjust this value to set when the navbar should hide
      setPriceCard(scrollY < showThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Row>
        <Row className="pe-0">
          <Col md={12} className="p-0">
            <Section1 />
          </Col>
        </Row>
        <Row style={{ margin: "40px 0px 0px 70px", width: "90%"}}>
          <Col md={8}>
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
          </Col>
        {/* </Row> */}

        <Col md={4}>
          {showPriceCard ? <PriceCardComponent1 /> : <PriceCardComponent2 />}
        </Col>
        </Row>
      </Row>
    </>
  );
};

export default MainComponent;
