import React from 'react';

export const Email = ({ userInput, onEmailChange, onEmailSubmit })=> {
    
    const handleChange = (event) => {
        onEmailChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onEmailSubmit()
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='email' required value={userInput} onChange={handleChange} placeholder='Ejemplo@email.com'></input>
                <input type='submit' value='enviar'></input>
            </form>
        </>)
}