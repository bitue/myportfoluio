import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className='container mx-auto  flex items-center justify-between p-5  '>
                <div>
                    <NavLink to='/'>i_am_ashik</NavLink>
                </div>
                <div className='space-x-2'>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/project'>Project</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;