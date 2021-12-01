import React from 'react';
import { useHistory } from 'react-router';


const ProjectView = ({ project }) => {
    const history = useHistory()
    return (
        <div className='container mx-auto  grid md:grid-cols-2 grid-cols-1 my-5 md:space-x-10 px-5 py-5 bg-gray-100 rounded-2xl '>
            <div>
                <img  src={ project.img}/>
                
            </div>
            <div>
                <h1 className='font-bold text-2xl '> {project.name}</h1>
                <h1 className='font-bold text-1xl '>Technology :{project.technology }</h1>
                <div>
                    <h1 className='font-bold text-1xl '>Description</h1>
                        <h2>
                            { project.des.overviewOne}
                        </h2>
                        <h2>
                            { project.des.overviewTwo}
                        </h2>
                        <h2>
                            { project.des.overviewThree}
                        </h2>
                </div>
                <div className='md:space-x-1  my-5 grid lg:grid-cols-2 grid-cols-1 '>
                    <div className='space-x-1 my-2'>
                        <a className='font-bold bg-yellow-400 px-3 py-1 rounded-2xl' href={ project.liveLink}>Live link </a>
                        <a className='font-bold bg-yellow-400 px-3 py-1 rounded-2xl' href={project.clientCode}>Client side code</a>

                    </div>
                    <div className='space-x-1 my-2'>
                        {
                            project.serverCode ?  <a className='font-bold bg-yellow-400 px-3 py-1 rounded-2xl' href={project.serverCode}>Server side code</a> : null
                        }
                        <button className='font-bold ' onClick={()=> history.push(`/project/${project.id}`)}>Project details</button>

                    </div>
                   
                    
                </div>
                

            </div>
            
        </div>
    );
};

export default ProjectView;