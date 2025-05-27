import React, { useState } from 'react';
import '../assets/styles/navbar.css'
import '../assets/styles/bgStars.css'
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeLanguage } from '../store/slices/translateState.slice';
// import en from '../assets/translates/en.json'
// import es from '../assets/translates/es.json'
import { useTranslateStore } from "../store/store"

const NavBar = () => {
    const [menu, setMenu] = useState('');
    const [icon, setIcon] = useState('fa-bars');
    const [darkMode, setDarkMode] = useState('darky');
    const navigate = useNavigate()
    const [language, setLanguage] = useState('english');
    const translateState = useTranslateStore(state => state.language);
    // const dispatch = useDispatch();
    const selectES = useTranslateStore((state) => state.selectES)
    const selectEN = useTranslateStore((state) => state.selectEN)

    function toggleMenu() {
        menu === 'open-nav' ? setMenu('') : setMenu('open-nav')
        menu === 'open-nav' ? setIcon('fa-bars') : setIcon('fa-circle-xmark')
    }

    function toggleDarkMode() {
        darkMode === 'darky' ? setDarkMode('') : setDarkMode('darky')
        document.body.classList.toggle('dark')
    }

    function translate() {
        if (language === 'english') {
            selectEN()
            setLanguage('spanish')
        } else {
            selectES()
            setLanguage('english')
        }
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
                    <li onClick={() => navigate('/')}><i className="fa-solid fa-house"></i>{translateState[0]?.home}</li>
                    <li onClick={() => navigate('/about')}><i className="fa-solid fa-user"></i>{translateState[1]?.about}</li>
                    <li onClick={() => navigate('/skills')}><i className="fa-solid fa-gears"></i>{translateState[2]?.skills}</li>
                    <li onClick={() => navigate('/projects')}><i className="fa-solid fa-folder-closed"></i>{translateState[3]?.projects}</li>
                    <li onClick={() => navigate('/contact')}><i className="fa-solid fa-comments"></i>{translateState[4]?.contact}</li>
                </ul>
                <div className='darky-sunny' onClick={() => toggleDarkMode()}>
                    <i className={`fa-solid fa-sun sunny${darkMode}`}></i>
                    <i className={`fa-solid fa-moon ${darkMode}`}></i>
                </div>
                <button type='button' className='translate-btn' onClick={() => translate()}>
                    <i className="fa-solid fa-language"></i>
                    {translateState[5]?.language}
                </button>
            </article>
            <div className='close-open-nav' onClick={() => toggleMenu()}>
                <i className={`fa-solid ${icon}`}></i>
            </div>
        </section>
    );
};

export default NavBar;