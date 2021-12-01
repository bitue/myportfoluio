import React from 'react';

const About = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-4xl font-bold text-left mt-10 mb-5 '>About Me</h1>
            <div>
                <h2>Hi, i am ashik</h2>
                <p>
                I’m an undergraduate student majoring in Chemical Engineering at <a className='font-bold text-yellow-600' href='https://www.buet.ac.bd/web/'>BUET</a>. My interests are in backend Web Development, Native app development. For more info, check out my <a className='font-bold text-yellow-600' href='https://drive.google.com/file/d/1MvWUwhL2hWc2W4SjqAiYOp7QRRtJHzK4/view'>see resume</a>.
                </p>

                <p>
                    My enthusiasm is for softwere engineering ,cloud computing and serverless technologies . My moto is to convert my thought into App 
                </p>

                <p className='font-bold  text-2xl my-5'> Web Development Experience</p>
                <p>
                Though i have no experience in jobs but i have some full stack projects which have been listed in my resume as well as my   <a className='font-bold text-yellow-600' href='https://github.com/bitue'>Github </a> profile. 
                </p>

                <p className='font-bold  text-2xl my-3'> Contact</p>
                <p>
                    If you want to hire me, need consultation, or want to hang out and chat, feel free to drop me a mail at <a className="font-bold text-yellow-600" href='mailto:1602016@che.buet.ac.bd '>
                    1602016@che.buet.ac.bd</a>

                  <p>  Thank you for reading!</p>
                </p>
            </div>
        </div>
    );
};

export default About;