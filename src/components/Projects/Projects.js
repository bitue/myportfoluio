import React, { useEffect, useState } from 'react';
import ProjectView from '../ProjectView/ProjectView';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    },[])
    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>My projects </h1>
            <div>
                {
                    projects.map(project => <ProjectView key={project.id} project={ project}></ProjectView>)
                }

            </div>
        </div>
    );
};

export default Projects;