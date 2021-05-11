import React from "react";
import { Link } from "react-scroll";

export const Scrollbar = props => {
    return(
        <div className="myscrollbar">
                <Link
                    activeClass="active"
                    to="two1" // the id of where you want to navigate to
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 1
                </Link>
                <Link
                    activeClass="active"
                    to="two2"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 2
                </Link>
                <Link
                    activeClass="active"
                    to="two3"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Parte 3
                </Link>
                <Link
                    activeClass="active"
                    to="two4"
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