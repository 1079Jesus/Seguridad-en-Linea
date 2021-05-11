import React from "react";
import { Link } from "react-scroll";

export const Scrollbar = props => {
    return(
        <div className="myscrollbar">
                <Link
                    activeClass="active"
                    to="phishing1" // the id of where you want to navigate to
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 1
                </Link>
                <Link
                    activeClass="active"
                    to="phishing2a"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                >
                    Parte 2a
                </Link>
                <Link
                    activeClass="active"
                    to="phishing2b"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 2b
                </Link>
                <Link
                    activeClass="active"
                    to="phishing2c"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 2c
                </Link>
                <Link
                    activeClass="active"
                    to="phishing2d"
                    spy={true}
                    smooth={true}
                    offset={-110}
                    duration={500}
                >
                    Parte 2d
                </Link>
                <Link
                    activeClass="active"
                    to="phishing2e"
                    spy={true}
                    smooth={true}
                    offset={-110}
                    duration={500}
                >
                    Parte 2e
                </Link>
                <Link
                    activeClass="active"
                    to="phishing3"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 3
                </Link>
                <Link
                    activeClass="active"
                    to="phishing4"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 4
                </Link>                
        </div>
    )
};

export default Scrollbar;