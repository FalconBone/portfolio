import classes from './ProjectBlock.module.scss'

const ProjectBlock = ({img, text}) => {

    return (
        <div className={classes.container}>
            <div className={classes.img}>
                {img}
            </div>
            <div className={classes.text}>
                {text}
            </div>
        </div>
    )
}

export default ProjectBlock