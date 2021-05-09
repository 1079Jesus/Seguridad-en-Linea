import React from 'react';
import {Link} from "react-router-dom";
import {useTransition, animated} from 'react-spring';

export const Card = ({ listOfEmails })=> {

    const transition = useTransition(listOfEmails, listOfEmails => listOfEmails.id, {
        from: {
            opacaity: 1,
            width: '4%',
            marginLeft: -100,
            marginRight: 100
        },
        enter: {
            opacaity: 0,
            width: '100%',
            padding: '5px 0',
            marginLeft: 0,
            marginRight: 0
        }
    })

    return transition.map(({ item, key, props }) => (
        <animated.ul key={item.id} style={props}>
            <li>
                <Link to={`${item.id}`}>{item.content}</Link>
            </li>
        </animated.ul>
    ))
    /*return(
        <>
            {listOfEmails.map(email => {
                return(
                    <ul key={email.id}>
                        <li>
                            <Link to={`${email.id}`}>{email.content}</Link>
                        </li>
                    </ul>
                )
            })}
        </>
    )*/
}