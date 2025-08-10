export function Resume({ generalInfo, educationInfo, practicalInfo }) {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <h2>{educationInfo.school_start_date}</h2>
        </div>
    )
}