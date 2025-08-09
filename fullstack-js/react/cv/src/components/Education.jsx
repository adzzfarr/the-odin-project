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
                <input type="text" id="qualification" name="qualification" />
            </div>
            <div className="labelInput">
                <label htmlFor="school_start_date">Start Date</label>
                <input type="month" id="school_start_date" name="school_start_date" />
            </div>
            <div className="labelInput">    
                <label htmlFor="school_end_date">End Date</label>
                <input type="month" id="school_end_date" name="school_end_date" />
            </div>
        </fieldset>
    );
}