import { useState } from "react";

export function General() {
    const [inputName, setInputName] = useState('');
    const handleNameChange = (e) => {
        setInputName(e.target.value);
    }

    const [inputEmail, setInputEmail] = useState('');
    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    }

    const [inputNumber, setInputNumber] = useState('');
    const handleNumberChange = (e) => {
        setInputEmail(e.target.value);
    }

    return (
        <fieldset>
            <legend>General Information</legend>
            <div className="labelInput">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={inputName} onChange={handleNameChange} />
            </div>
            <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={inputEmail} onChange={handleEmailChange} />
            </div>
            <div className="labelInput">
                <label htmlFor="number">Phone Number</label>
                <input type="tel" id="number" name="number" value={inputNumber} onChange={handleNumberChange} />
            </div>
        </fieldset>
    );
}