import React, { Component } from "react";
import { Link } from "react-scroll";

export const TempNavbar = props => {
    return(
        <div className="navbar">
                <Link
                    activeClass="active"
                    to="main" // the id of where you want to navigate to
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Main
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Contact
                </Link>
        </div>
    )
};

export default TempNavbar;