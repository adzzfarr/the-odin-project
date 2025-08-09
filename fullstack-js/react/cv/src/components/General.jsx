import { useState } from "react";

export function General() {

    return (
        <fieldset>
            <legend>General Information</legend>
            <div className="labelInput">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
            </div>
            <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className="labelInput">
                <label htmlFor="number">Phone Number</label>
                <input type="tel" id="number" name="number" />
            </div>
        </fieldset>
    );
}