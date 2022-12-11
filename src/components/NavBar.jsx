import React, { useState } from 'react';
import '../assets/styles/navbar.css'
import '../assets/styles/bgStars.css'
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../store/slices/infoState.slice';

const NavBar = () => {
    const [menu, setMenu] = useState('');
    const [icon, setIcon] = useState('fa-bars');
    const infoState = useSelector(state => state.infoState);
    const dispatch = useDispatch();

    function toggleMenu() {
        menu === 'open-nav' ? setMenu('') : setMenu('open-nav')
        menu === 'open-nav' ? setIcon('fa-bars') : setIcon('fa-circle-xmark')
    }

    function changePages(page) {
        dispatch(changePage(page))
        setMenu('')
        setIcon('fa-bars')
    };

    return (
        <section className={`nav-bar  ${menu}`}>
            <article className='nav-items'>
                <div className='nav-logo'>
                    <div className='nav-logo-item'>
                        {'<'}
                    </div>
                    <div className='nav-logo-item text'>
                        <span>Hello, </span><span>World!</span>
                    </div>
                    <div className='nav-logo-item'>
                        {'/>'}
                    </div>
                </div>
                <ul>
                    <li onClick={() => changePages('home')}><i className="fa-solid fa-house"></i>Home</li>
                    <li onClick={() => changePages('about')}><i className="fa-solid fa-user"></i>About</li>
                    <li onClick={() => changePages('skills')}><i className="fa-solid fa-gears"></i>Skills</li>
                    <li onClick={() => changePages('projects')}><i className="fa-solid fa-folder-closed"></i>Projects</li>
                    <li onClick={() => changePages('contact')}><i className="fa-solid fa-comments"></i>Contact</li>
                </ul>
            </article>
            <div className='close-open-nav' onClick={() => toggleMenu()}>
                <i className={`fa-solid ${icon}`}></i>
            </div>
        </section>
    );
};

export default NavBar;