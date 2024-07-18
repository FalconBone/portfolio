import ProjectBlock from './ProjectBlock/ProjectBlock'
import classes from './Projects.module.scss'

const Projects = () => {

    const projectsData = [
        {
            img: 'путь к картинке 1',
            text: 'какой-то текст 1'
        },
        {
            img: 'путь к картинке 2',
            text: 'какой-то текст 2'
        },
        {
            img: 'путь к картинке 3',
            text: 'какой-то текст 3'
        }
    ]

    return (
        <div className={classes.container}>
            {projectsData.map(project => <ProjectBlock img={project.img} text={project.text}/>)}
        </div>
    )
}

export default Projects