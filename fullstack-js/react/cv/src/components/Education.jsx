export function Education() {
    return (
        <fieldset>
            <legend>Education</legend>
            <div className="labelInput">
                <label htmlFor="school">School</label>
                <input type="text" id="school" name="school" />
            </div>
            <div className="labelInput">
                <label htmlFor="qualification">Qualification</label>
                <input type="email" id="qualification" name="qualification" />
            </div>
            <div className="labelInput">
                <label htmlFor="start_date">Start Date</label>
                <input type="month" id="start_date" name="start_date" />
            </div>
            <div className="labelInput">    
                <label htmlFor="end_date">End Date</label>
                <input type="month" id="end_date" name="end_date" />
            </div>
        </fieldset>
    );
}