export function Practical({ practicalInfo, onPracticalInfoChange }) {
    return (
        <fieldset>
            <legend>Experience</legend>
            <div className="labelInput">
                <label htmlFor="company">Company</label>
                <input 
                    type="text" 
                    id="company" 
                    name="company"
                    value={practicalInfo.company}
                    onChange={(e) => onPracticalInfoChange('company', e.target.value)}
                />
            </div>
            <div className="labelInput">
                <label htmlFor="position">Position</label>
                <input 
                    type="text" 
                    id="position" 
                    name="position" 
                    value={practicalInfo.position}
                    onChange={(e) => onPracticalInfoChange('position', e.target.value)}
                />
            </div>
            <div className="labelInput">
                <label htmlFor="description">Description</label>
                <textarea 
                    type="text" 
                    id="description" 
                    name="description"
                    value={practicalInfo.description}
                    onChange={(e) => onPracticalInfoChange('description', e.target.value)}
                ></textarea>
            </div>
            <div className="labelInput">
                <label htmlFor="job_start_date">Start Date</label>
                <input 
                    type="month" 
                    id="job_start_date" 
                    name="job_start_date" 
                    value={practicalInfo.job_start_date}
                    onChange={(e) => onPracticalInfoChange('job_start_date', e.target.value)}
                />
            </div>
            <div className="labelInput">    
                <label htmlFor="job_end_date">End Date</label>
                <input 
                    type="month" 
                    id="job_end_date" 
                    name="job_end_date" 
                    value={practicalInfo.job_end_date}
                    onChange={(e) => onPracticalInfoChange('job_end_date', e.target.value)}
                />
            </div>
        </fieldset>
    );
}