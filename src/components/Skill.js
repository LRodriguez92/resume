const Skill = props => {
    return (
        <div>
            <h3>{props.subject}</h3>
            {props.skills.map((skill, index) => {
                return <p key={index}>{skill}</p>
            })}
        </div>
    )
}

export default Skill