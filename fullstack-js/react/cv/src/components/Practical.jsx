export function Practical() {
    return (
        <fieldset>
            <legend>Experience</legend>
            <div className="labelInput">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" />
            </div>
            <div className="labelInput">
                <label htmlFor="position">Position</label>
                <input type="text" id="position" name="position" />
            </div>
            <div className="labelInput">
                <label htmlFor="responsibilities">Responsibilities</label>
                <textarea type="text" id="responsibilities" name="responsibilities"></textarea>
            </div>
            <div className="labelInput">
                <label htmlFor="job_start_date">Start Date</label>
                <input type="month" id="job_start_date" name="job_start_date" />
            </div>
            <div className="labelInput">    
                <label htmlFor="job_end_date">End Date</label>
                <input type="month" id="job_end_date" name="job_end_date" />
            </div>
        </fieldset>
    );
}