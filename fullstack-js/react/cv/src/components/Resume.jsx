import '../styles/Resume.css'

export function Resume({ generalInfo, educationInfo, practicalInfo }) {
    return (
        <div className="resume">
            <div className="personal">
                <h1>{generalInfo.name}</h1>
                <h1>{generalInfo.email}</h1>
                <h1>{generalInfo.number}</h1>
            </div>
            <div className="divider"></div>
            <div className="education">
                <h1>Education</h1>
                <div>
                    <h2>{educationInfo.school}</h2>
                    <h3>{educationInfo.qualification}</h3>
                    <h3>{getFormattedDuration(educationInfo.school_start_date, educationInfo.school_end_date)}</h3>
                </div>
            </div>
            <div className="divider"></div>
            <div className="experience">
                <h1>Experience</h1>
                <div>
                    <h2>{practicalInfo.company}</h2>
                    <h3>{practicalInfo.position}</h3>
                    <h3>{getFormattedDuration(practicalInfo.job_start_date, practicalInfo.job_end_date)}</h3>
                    <span>{practicalInfo.description}</span>
                </div>
            </div>
        </div>
    )

    function getFormattedDuration(startDate, endDate) {
        if (!startDate) {
            return null;
        }

        const options = {
            month: 'short',
            year: 'numeric',
        }

        const startDateObject = new Date(`${startDate}-01`);
        const formattedStartDate = new Intl.DateTimeFormat('en-US', options).format(startDateObject);
        if (!endDate) {
            return `${formattedStartDate} - Present`;
        }

        const endDateObject = new Date(`${endDate}-01`);
        const formattedEndDate = new Intl.DateTimeFormat('en-US', options).format(endDateObject);
        return `${formattedStartDate} - ${formattedEndDate}`;
    }
}