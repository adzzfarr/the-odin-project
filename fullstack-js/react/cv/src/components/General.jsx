export function General({ generalInfo, onGeneralInfoChange }) {
    return (
        <fieldset>
            <legend>General Information</legend>
            <div className="labelInput">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={generalInfo.name} 
                    onChange={(e) => onGeneralInfoChange('name', e.target.value)} 
                />
            </div>
            <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={generalInfo.email}
                    onChange={(e) => onGeneralInfoChange('email', e.target.value)}    
                />
            </div>
            <div className="labelInput">
                <label htmlFor="number">Phone Number</label>
                <input 
                    type="tel" 
                    id="number" 
                    name="number"
                    value={generalInfo.number}
                    onChange={(e) => onGeneralInfoChange('number', e.target.value)}
                />
            </div>
        </fieldset>
    );
}