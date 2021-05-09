import React,{useState, useEffect} from 'react';
import { Delete } from '../Components/Delete/delete'
import {
    useParams,
    Link
  } from "react-router-dom";

export const Show = () => {
    const { id } = useParams()
    const [email, setEmail] = useState([])

    useEffect(() => {
        fetch(`/api/${id}`)
        .then(response => response.json())
        .then(data => setEmail(data))
    }, [id])

    return(
        <div>
            {email.length > 0 && email.map(data => <div key={data.id}>{data.content}</div>)}
            <Delete id={id}/>
            <hr></hr>
            <Link to='/'>Back to emails</Link>
        </div>
    )
}