import React from 'react';
import '../assets/styles/skills.css'
import js from '../assets/images/js.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import reactjs from '../assets/images/reactjs.png'
import redux from '../assets/images/redux.png'
import git from '../assets/images/git.png'
import nodejs from '../assets/images/nodejs.png'
import mySQL from '../assets/images/sql.png'
import { useTranslateStore } from "../../store/store"

const Skills = () => {
    const translateState = useTranslateStore(state => state.language);

    return (
        <section id='skills'>
            <h1>{translateState[2]?.skills}</h1>
            <article className='skills-container'>
                <div className='skills-item'>
                    <img src={js} alt="" />
                    <h3>JS</h3>
                </div>
                <div className='skills-item '>
                    <img src={html} alt="" />
                    <h3>HTML</h3>
                </div>
                <div className='skills-item '>
                    <img src={css} alt="" />
                    <h3>CSS</h3>
                </div>
                <div className='skills-item '>
                    <img src={reactjs} alt="" />
                    <h3>REACT JS</h3>
                </div>
                <div className='skills-item '>
                    <img src={redux} alt="" />
                    <h3>REDUX</h3>
                </div>
                <div className='skills-item '>
                    <img src={git} alt="" />
                    <h3>GIT</h3>
                </div>
                <div className='skills-item '>
                    <img src={nodejs} alt="" />
                    <h3>NODE JS</h3>
                </div>
                <div className='skills-item '>
                    <img src={mySQL} alt="" />
                    <h3>MySQL</h3>
                </div>
            </article>
        </section>
    );
};

export default Skills;