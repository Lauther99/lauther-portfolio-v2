import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import myCV from '../assets/downloads/lauther_valladares_CV.pdf'
import '../assets/styles/home.css'
import {changeLanguage} from '../store/slices/translateState.slice'

const Home = () => {
    const translateState = useSelector(state => state.translate);
    const myName = "Lauther Valladares"
    const text = "Full stack developer !"

    function getStyleText(text) {
        const textStyle = {
            width: `${text.length}ch`,
            animation: `typing 3s steps(${text.length}) alternate infinite, blink .5s infinite step-end alternate`
        }
        return textStyle
    }

    return (
        <section id='home'>
            <div className='nav-logo'>
                    <div className='nav-logo-item'>
                        {'<'}
                    </div>
                    <div className='nav-logo-item text'>
                        <span>{translateState[0]?.hello} </span><span>{translateState[0]?.world}</span>
                    </div>
                    <div className='nav-logo-item'>
                        {'/>'}
                    </div>
                </div>
            <h1>{translateState[0]?.welcome}</h1>
            <p>{translateState[0]?.mynameis}</p>
            <h2><span style={getStyleText(myName)}>{myName}</span></h2>
            <p>{translateState[0]?.imyour}</p>
            <h2><span style={getStyleText(text)}>{text}</span></h2>
            <p>{translateState[0]?.contactme}</p>
            <article className='home-icons'>
                <a href="https://www.linkedin.com/in/lautherhvalladares/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Pancake27" target='_blank'><i className="fa-brands fa-github"></i></a>
                <a href={myCV} download><i className="fa-regular fa-file"></i></a>
            </article>
        </section>
    );
};

export default Home;