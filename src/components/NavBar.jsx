import React, { useState } from 'react';
import '../assets/styles/navbar.css'
import '../assets/styles/bgStars.css'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [menu, setMenu] = useState('');
    const [icon, setIcon] = useState('fa-bars');
    const [darkMode, setDarkMode] = useState('darky');
    const navigate = useNavigate()

    function toggleMenu() {
        menu === 'open-nav' ? setMenu('') : setMenu('open-nav')
        menu === 'open-nav' ? setIcon('fa-bars') : setIcon('fa-circle-xmark')
    }

    function toggleDarkMode() {
        darkMode === 'darky' ? setDarkMode('') : setDarkMode('darky')
        document.body.classList.toggle('dark')
    }


    return (
        <section className={`nav-bar  ${menu}`}>
            <article className='nav-items'>
                <div className='nav-logo'>
                    <div className='nav-logo-item'>
                        {'</>'}
                    </div>
                </div>
                <ul>
                    <li onClick={() => navigate('/')}><i className="fa-solid fa-house"></i>Home</li>
                    <li onClick={() => navigate('/about')}><i className="fa-solid fa-user"></i>About</li>
                    <li onClick={() => navigate('/skills')}><i className="fa-solid fa-gears"></i>Skills</li>
                    <li onClick={() => navigate('/projects')}><i className="fa-solid fa-folder-closed"></i>Projects</li>
                    <li onClick={() => navigate('/contact')}><i className="fa-solid fa-comments"></i>Contact</li>
                </ul>
                <div className='darky-sunny' onClick={() => toggleDarkMode()}>
                    <i className={`fa-solid fa-sun sunny${darkMode}`}></i>
                    <i className={`fa-solid fa-moon ${darkMode}`}></i>
                </div>
            </article>
            <div className='close-open-nav' onClick={() => toggleMenu()}>
                <i className={`fa-solid ${icon}`}></i>
            </div>
        </section>
    );
};

export default NavBar;