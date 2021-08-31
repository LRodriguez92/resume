import Title from "./Title"
import ExperienceDetail from "./ExperienceDetail"

const ExperienceContainer = () => {
    return (
        <div>
            <Title title="Experience"/>
            
            <div>
                <ExperienceDetail 
                    name="General Assembly"
                    position="Software Engineering Instructional Lead"
                    location="New York, NY"
                    startDate="Jun. 2019"
                    endDate="Current"
                    details={["Preparing and delivering lessons on the fundamentals of software engineering.", "Supporting students with planning, writing code and debugging full stack applications.", "Providing constructive feedback and mentoring students in their rapid development of technical skills.", "Collaborating with several companies to upskill and reskill employees."]}
                />
                <ExperienceDetail 
                    name="Per Scholas"
                    position="Software Engineering Teacher Assistant"
                    location="Bronx, NY"
                    startDate="May. 2019"
                    endDate="Sept. 2019"
                    details={["Collaborated with instructors to form a software engineering curriculum.", "Created lessons and assignments using Repl.it.", "Created automated tests for grading assignments.", "Integrated course materials to Per Scholas Canvas platform."]}
                />
                <ExperienceDetail 
                    name="General Assembly"
                    position="Software Engineering Instructional Associate"
                    location="New York, NY"
                    startDate="Feb. 2019"
                    endDate="May 2019"
                    details={["Supported lead instructors with delivering lessons on the fundamentals of software engineering.", "Supported students with planning, writing and debugging code within full stack applications.", "Inspected student homework and provided constructive feedback."]}
                />
                <ExperienceDetail 
                    name="Tokr"
                    position="Software Engineer"
                    location="New York, NY"
                    startDate="Feb. 2016"
                    endDate="Aug. 2017"
                    details={["Collaborated with developers and designers to plan and prototype mobile app.", "Supported designers with deploying landing page and launching email marketing campaigns.", "Monitored online presence of company's brand and engaged with users, strengthening user relationships."]}
                />
            </div>

        </div>
    )
}

export default ExperienceContainer