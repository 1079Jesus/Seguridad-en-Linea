import React, { Component } from "react";
import { Link } from "react-scroll";

export const Scrollbar = props => {
    return(
        <div className="myscrollbar">
                <Link
                    activeClass="active"
                    to="web1" // the id of where you want to navigate to
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 1
                </Link>
                <Link
                    activeClass="active"
                    to="web2"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 2
                </Link>
                <Link
                    activeClass="active"
                    to="web3"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 3
                </Link>
                <Link
                    activeClass="active"
                    to="web4"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                >
                    Parte 4
                </Link>                
                <Link
                    activeClass="active"
                    to="web5"
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