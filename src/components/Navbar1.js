import React from "react";
import { Nav, NavItem, NavbarBrand, Navbar } from "reactstrap";

import { GrCart, GrLanguage } from "react-icons/gr";
import search from "../res/search.png";

const NavbarComponent = () => {
  return (
 
    <Navbar className="bg-white border-bottom d-flex justify-content-between px-3 py-2">
      <Nav className="d-flex align-items-center">
        <NavbarBrand>
          <img
            src="https://logos-download.com/wp-content/uploads/2016/06/Udemy_full_Logo_2021.svg"
            alt="logo"
            width={90}
          />
        </NavbarBrand>

        <NavItem
          className="text-dark fw-medium"
          style={{ fontSize: "14px", marginLeft: "20px" }}
        >
          Categories
        </NavItem>

        <NavItem style={{ marginLeft: "20px" }}>
              <input
                type="text"
                className="rounded-pill py-2 border-1 border-dark"
                placeholder="Search for anything"
                style={{
                    paddingLeft: "40px", /* Adjust the padding to make space for the icon */
                         // Set the text color to dark gray (#333)
                    backgroundImage: `url(${search})`,
                    backgroundSize: "20px", /* Adjust the size of the icon */
                    backgroundPosition: "5px center", /* Adjust the position of the icon */
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#F7F9FA",
                    width: "450px",
                }}
              />

        </NavItem>

        <NavItem
          className="text-dark fw-medium"
          style={{ fontSize: "14px", marginLeft: "20px" }}
        >
          Udemy Business
        </NavItem>

        <NavItem
          className="text-dark fw-medium"
          style={{ fontSize: "14px", marginLeft: "20px" }}
        >
          Teach on Udemy
        </NavItem>
      </Nav>

      <Nav className="d-flex align-items-center">
        <NavItem
          className="text-dark fw-medium"
          style={{ fontSize: "16px", marginRight: "20px" }}
        >
          <GrCart className="fs-4" />
        </NavItem>

        <NavItem
          style={{ fontSize: "16px", marginRight: "10px" }}
        >
          <button className="btn btn-white text-dark fw-bolder border-dark rounded-0 py-2"><span style={{fontSize: "14px"}}>Log in</span></button>
        </NavItem>

        <NavItem
          style={{ fontSize: "16px", marginRight: "10px" }}
        >
          <button className="btn btn-dark text-white fw-bolder border-dark rounded-0 py-2"><span style={{fontSize: "14px"}}>Sign up</span></button>
        </NavItem>

        <NavItem
          style={{ marginRight: "15px" }}
        >
          <button className="btn btn-white border-dark rounded-0">
            <GrLanguage className="fs-5 my-1" />
          </button>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
