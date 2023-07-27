import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import {
  MdOutlineAssignment,
  MdOutlineClosedCaption,
  MdOutlineInsertDriveFile,
  MdOutlineOndemandVideo,
  MdSmartphone,
} from "react-icons/md";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { IoTrophyOutline } from "react-icons/io5";

//logos
import nasdaqLogo  from "../res/logo/nasdaqLogo.png"
import volkswagonLogo  from "../res/logo/volkswagonLogo.png"
import boxLogo from "../res/logo/boxLogo.png"
import netappLogo  from "../res/logo/netappLogo.png"
import eventbriteLogo  from "../res/logo/eventbriteLogo.png"

const Section3 = () => {
  return (
    <>
      <Card className="mt-5 border-white">
        <CardTitle className="fs-4 fw-bolder">This course includes:</CardTitle>
        <Row>
          <Col>
            <p className="mb-1"><MdOutlineOndemandVideo fontSize={20} className="fw-bold me-2"/>36 hours on-demand video</p>
            <p className="mb-1"><MdOutlineAssignment fontSize={20} className="fw-bold me-2"/>Assignments</p>
            <p className="mb-1"><MdOutlineInsertDriveFile fontSize={20} className="fw-bold me-2"/>47 articles</p>
            <p className="mb-1"><HiOutlineFolderDownload fontSize={20} className="fw-bold me-2"/>179 downloadable resources</p>
          </Col>
          <Col>
            <p className="mb-1"><MdSmartphone fontSize={20} className="fw-bold me-2"/>Access on mobile and TV</p>
            <p className="mb-1"><MdOutlineClosedCaption fontSize={20} className="fw-bold me-2"/>Closed captions</p>
            <p className="mb-1"><IoTrophyOutline fontSize={20} className="fw-bold me-2"/>Certificate of completion</p>
          </Col>
        </Row>
      </Card>

      <Card className="mt-5 rounded-0">
        <CardBody className="px-3">
            <CardTitle className="fw-bold">Top companies offer this course to their employees</CardTitle>
            <p className="text-muted" style={{fontSize: "15px"}}>This course was selected for our collection of top-rated courses trusted by businesses worldwide.<span className="" style={{color: "blue"}}> Learn more</span></p>
            <Col className="d-flex">
                <img src={nasdaqLogo} alt="logo1"width={100} height={35} className="me-5 ms-1"/>
                <img src={volkswagonLogo} alt="logo2" width={100} height={35} className="me-5"/>
                <img src={boxLogo} alt="logo3" width={100} height={35} className="me-5"/>
                <img src={netappLogo} alt="logo4" width={100} height={35} className="me-5"/>
                <img src={eventbriteLogo} alt="logo5" width={100} height={35}/>
            </Col>
        </CardBody>
      </Card>
    </>
  );
};

export default Section3;
