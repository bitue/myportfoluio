import React from 'react';
import { useParams } from 'react-router';
import Nav from '../../components/Nav/Nav';
import ProjectDetails from '../../components/ProjectDetails/ProjectDetails';

const ProjectDetailsPage = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <Nav></Nav>
            <ProjectDetails id={id}></ProjectDetails>
        </div>
    );
};

export default ProjectDetailsPage;