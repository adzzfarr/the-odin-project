export function Education({ educationInfo, onEducationInfoChange }) {
    return (
        <fieldset>
            <legend>Education</legend>
            <div className="labelInput">
                <label htmlFor="school">School</label>
                <input 
                    type="text" 
                    id="school" 
                    name="school"
                    value={educationInfo.school}
                    onChange={(e) => onEducationInfoChange('school', e.target.value)} 
                />
            </div>
            <div className="labelInput">
                <label htmlFor="qualification">Qualification</label>
                <input type="text" 
                id="qualification" 
                name="qualification" 
                value={educationInfo.qualification}
                onChange={(e) => onEducationInfoChange('qualification', e.target.value)}
            />
            </div>
            <div className="labelInput">
                <label htmlFor="school_start_date">Start Date</label>
                <input 
                    type="month" 
                    id="school_start_date" 
                    name="school_start_date" 
                    value={educationInfo.school_start_date}
                    onChange={(e) => onEducationInfoChange('school_start_date', e.target.value)}
                />
            </div>
            <div className="labelInput">    
                <label htmlFor="school_end_date">End Date</label>
                <input 
                    type="month" 
                    id="school_end_date" 
                    name="school_end_date" 
                    value={educationInfo.school_end_date}
                    onChange={(e) => onEducationInfoChange('school_end_date', e.target.value)}
                />
            </div>
        </fieldset>
    );
}