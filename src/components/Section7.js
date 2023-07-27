import React from "react";
import { Row, Col, Card } from "reactstrap";
import { FiUsers } from "react-icons/fi";
import { MdStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import courseImage from "../res/course_image.jpeg";

const Section7 = () => {
  const courseBought = [
    {
      coursename: "Complete Angular Developer in 2023: Zero to Mastery",
      courserating: "4.4",
      courseuser: "11,598",
      courseprice: "₹649",
      price_strikethrough: "₹3,199",
      courseduration: "27.5 total hours",
      courseupdateOn: "Updated 5/2023",
    },
    {
      coursename: "Complete Angular Developer in 2023: Zero to Mastery",
      courserating: "4.4",
      courseuser: "11,598",
      courseprice: "₹649",
      price_strikethrough: "₹3,199",
      courseduration: "27.5 total hours",
      courseupdateOn: "Updated 5/2023",
    },
    {
      coursename: "Complete Angular Developer in 2023: Zero to Mastery",
      courserating: "4.4",
      courseuser: "11,598",
      courseprice: "₹649",
      price_strikethrough: "₹3,199",
      courseduration: "27.5 total hours",
      courseupdateOn: "Updated 5/2023",
    },
    {
      coursename: "Complete Angular Developer in 2023: Zero to Mastery",
      courserating: "4.4",
      courseuser: "11,598",
      courseprice: "₹649",
      price_strikethrough: "₹3,199",
      courseduration: "27.5 total hours",
      courseupdateOn: "Updated 5/2023",
    },
    {
      coursename: "Complete Angular Developer in 2023: Zero to Mastery",
      courserating: "4.4",
      courseuser: "11,598",
      courseprice: "₹649",
      price_strikethrough: "₹3,199",
      courseduration: "27.5 total hours",
      courseupdateOn: "Updated 5/2023",
    },
  ];

  return (
    <>
      <p className="mt-4 fs-4 fw-bolder">Students also bought</p>
      <div className="mt-3">
        <Row>
          <Col>
            {courseBought.map((course, index) => (
              <Card className="border-0 mb-3">
                <Row>
                  <Col md={1}>
                    <img
                      src={courseImage}
                      alt="course"
                      height={70}
                      width={70}
                    />
                  </Col>
                  <Col md={6} className="">
                    <Row>
                      <p
                        className="mb-1 ms-3 fw-bold"
                        style={{ lineHeight: "20px", fontSize: "16px" }}
                      >
                        {course.coursename}
                      </p>
                    </Row>
                    <Row>
                      <p className="ms-3 mb-1" style={{ fontSize: "14px" }}>
                        <strong>{course.courseduration}</strong> •
                        {course.courseupdateOn}
                      </p>
                    </Row>
                  </Col>
                  <Col md={1} className="pe-0">
                    <p
                      className="fw-bold px-0"
                      style={{ color: "#ffd700", fontSize: "14px" }}
                    >
                      {course.courserating}{" "}
                      <MdStar
                        className="px-0 mb-1"
                        style={{ fontSize: "18px" }}
                      />
                    </p>
                  </Col>
                  <Col md={2} className="text-center px-0 fw-bold">
                    <p style={{ fontSize: "14px" }}>
                      <FiUsers />
                      {course.courseuser}
                    </p>
                  </Col>
                  <Col md={1}>
                    <Row>
                      <p className="mb-1 text-center px-0 fw-bold fs-6">
                        {course.courseprice}
                      </p>
                    </Row>
                    <Row>
                      <p className="text-center px-0 text-muted" style={{fontSize: "14px"}}>
                        <s>{course.price_strikethrough}</s>
                      </p>
                    </Row>
                  </Col>
                  <Col md={1}>
                    <button className="bg-white rounded-circle border-1 p-2">
                      <FaRegHeart
                        className="mb-1 m-1"
                        style={{ fontSize: "18px" }}
                      />
                    </button>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
        </Row>
        <button className="btn rounded-0 border border-1 fw-bolder" style={{width: "100%"}}>show more</button>
      </div>
    </>
  );
};

export default Section7;