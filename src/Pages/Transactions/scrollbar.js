import React, { Component } from "react";
import { Link } from "react-scroll";

export const Scrollbar = props => {
    return(
        <div className="myscrollbar">
                <Link
                    activeClass="active"
                    to="trans1" // the id of where you want to navigate to
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                >
                    Parte 1
                </Link>
                <Link
                    activeClass="active"
                    to="trans2"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 2
                </Link>
                <Link
                    activeClass="active"
                    to="trans3"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 3
                </Link>
                <Link
                    activeClass="active"
                    to="trans4"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 4
                </Link>     
                <Link
                    activeClass="active"
                    to="trans5"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                >
                    Parte 5
                </Link>                  
        </div>
    )
};

export default Scrollbar;