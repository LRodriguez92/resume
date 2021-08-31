const ExperienceDetail = props => {
    return (
        <div>
            <div>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.position}</p>
                </div>
                <div>
                    <p>{props.location}</p>
                    <p>{props.startDate} to {props.endDate}</p>
                </div>
            </div>
            <ul>
                {props.details.map(detail => {
                    return <li>{detail}</li>
                })}
            </ul>
        </div>
    )
}

export default ExperienceDetail