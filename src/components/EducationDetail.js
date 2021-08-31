const EducationDetail = props => {
    return (
        <div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.program}</p>
            </div>
            <p>{props.startDate} to {props.endDate}</p>
        </div>
    )
}

export default EducationDetail