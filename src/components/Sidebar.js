import Title from "./Title"
import Skill from "./Skill"

const Sidebar = () => {
    return (
        <div  className="sidebar-container">
            <h1>Leonardo <br/> Rodriguez</h1>
            <h2>Software Engineer</h2>

            <div>
                <Title title="Contact"/>
                <p>CodedByLeo@gmail.com</p>
                <a href="https://www.linkedin.com/in/leonardo-rodriguez/">LinkedIn</a>
                <br/>
                <a href="https://github.com/LRodriguez92">Github</a>
            </div>

            <div>
                <Title title="Skills"/>
                <Skill 
                    subject="Front End Development"
                    skills={["Javascript", "React", "React Native", "HTML", "CSS", "SCSS"]}
                />
                <Skill 
                    subject="Back End Development"
                    skills={["Node.js", "Express.js", "PostgreSQL", "Sequelize", "SQL", "RESTful API", "MongoDB", "Mongoose", "Python", "Django"]}
                />
                <Skill 
                    subject="Game Development"
                    skills={["Unity Engine", "C#"]}
                />
                <Skill 
                    subject="Other"
                    skills={["Git", "Github"]}
                />
            </div>

            <div>
                <Title title="Interests"/>
                <p>Blockchain Development</p>
                <p>Fullstack Development</p>
                <p>Mobile Development</p>
                <p>Game Development</p>
            </div>
        </div>
    )
}

export default Sidebar