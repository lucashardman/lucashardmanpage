export function ProjectsBlock(props) {
    console.log(props.projects);
    const projects = props.projects;
    return (
        <>
        {projects.map(({id, titulo}) => {
            return(
            <p key={id}>{titulo}</p>
            )
        })
        }
        </>
    );
}