import React, { useEffect, useState } from 'react';

const ProjectDetails = ({ id }) => {
    const [projects, setProjects] = useState([])
   
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const selected = data.filter(ele => ele.id == id)
                console.log(selected)
                setProjects(selected)
            })
    },[])
    return (
        <div>
            <h1 className='font-bold text-center text-3xl'> Project Details</h1>
            <div>
                {
                    projects.map(project => <div className='container mx-auto '>
                        <div>
                            <h1 className='font-bold text-center text-2xl my-3'>Screenshoots</h1>
                        </div>
                        <div className='md:grid md:grid-cols-3 grid-cols-1  md:space-x-2 p-2 '>
                            <div>
                                <img src={project.img} alt="" />
                            </div>
                            <div>
                                <img src={project.imgOne} alt="" />
                            </div>
                            <div>
                                <img src={project.imgTwo} alt="" />
                            </div>

                        </div>

                        <div className='px-3'>
                            <h1 className='font-bold text-center text-2xl my-3' >Project details</h1>
                            <div>
                                 <h1 className='font-bold text-3xl '> {project.name}</h1>
                                <h1 className='font-bold text-1xl '>Technology :{project.technology}</h1>
                                <div>
                                    <h1>{project.overview}</h1>
                         </div>
                <div className=''>
                    <h1 className='font-bold text-2xl '>Project overview</h1>
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
                <div className='space-x-3 my-5'>
                    <a className='font-bold bg-yellow-400 px-3 py-1 rounded-2xl' href={ project.liveLink}>Live link </a>
                    <a className='font-bold bg-yellow-400 px-3 py-1 rounded-2xl' href={project.clientCode}>Client side code</a>
                    {
                        project.serverCode ?  <a className='font-bold bg-yellow-400 px-3 py-1 rounded-2xl' href={project.serverCode}>Server side code</a> : null
                    }
                  
                </div>
                

            </div>
                        </div>
                       
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProjectDetails;