import React from 'react';
import { fab ,faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Banner = () => {
    <img src="https://i.ibb.co/Yy0gGQg/pro.jpg" alt="pro" border="0"></img>
    return (
        <div>
            <div className='container mx-auto '>
                <div>
                    <div className='flex justify-center items-center mt-20 mb-10'>
                        <img className='rounded-full w-64' src="https://i.ibb.co/Yy0gGQg/pro.jpg" alt="" />
                    </div>
                    <div className='text-center my-5'>
                        <h2 className='font-bold text-3xl '>
                            Md Ashikul Islam
                        </h2>
                        <h2 className='font-semibold text-1xl '>
                           Junior MERN stack Developer
                        </h2>
                    </div>

                    <div className='text-center space-x-3'>
                        <a className='text-4xl ' href="https://www.linkedin.com/in/md-ashikul-islam-124a8b226/">
                        <FontAwesomeIcon  icon={faLinkedin} />
                        </a>
                        <a className='text-4xl ' href="https://stackoverflow.com/users/16850356/bitue">       <FontAwesomeIcon  icon={faStackOverflow} /> </a>
                        <a className='text-4xl ' href="https://github.com/bitue">       <FontAwesomeIcon  icon={faGithub} /> </a>
                    </div>
                    <div className='text-center space-x-5 my-5'>
                        <a className='' href="https://drive.google.com/file/d/1MvWUwhL2hWc2W4SjqAiYOp7QRRtJHzK4/view"> View Resume</a>

                        <a href="ashik-resume.pdf" download> Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;