import Title from "./Title"
import EducationDetail from "./EducationDetail"


const EducationContainer = () => {
    return (
        <div className="education-container">
            <Title title="Education"/>
            <EducationDetail 
                name="General Assembly"
                program="Software Engineering Immersive"
                startDate="Sept. 2018"
                endDate="Jan. 2019"
            />
            <EducationDetail 
                name="Per Scholas"
                program="Fundamentals of Web Development"
                startDate="Aug. 2018"
                endDate="Sept. 2018"
            />
            <EducationDetail 
                name="Code Tank"
                program="Full Stack Development"
                startDate="Apr. 2016"
                endDate="Jul. 2016"
            />
        </div>
    )
}

export default EducationContainer