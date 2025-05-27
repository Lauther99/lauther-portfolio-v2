import React from 'react';
import '../assets/styles/about.css'
import { useTranslateStore } from "../store/store"



const About = () => {
    const translateState = useTranslateStore(state => state.language);

    return (
        <section id='about'>
            <article className='description-container'>
                <h1>{translateState[1]?.title}</h1>
                <h2>{translateState[1]?.sub1}</h2>
                <p>{translateState[1]?.txt1}<b>Lauther Valladares</b> {translateState[1]?.txt2}</p>
                <h2>{translateState[1]?.sub2}</h2>
                <p>
                {translateState[1]?.txt3}</p>
                <h2>{translateState[1]?.sub3}</h2>
                <p>
                {translateState[1]?.txt4}
                </p>
            </article>
            <article className='info-container'>
                <div className='info-item'>
                    <h2>Linkedin</h2>
                    <a href="https://www.linkedin.com/in/lautherhvalladares/" target='_blank'>Lauther Valladares</a>
                </div>
                <div className='info-item'>
                    <h2>Github</h2>
                    <a href="https://github.com/Pancake27" target='_blank'>Lauther</a>
                </div>
                <div className='info-item'>
                    <h2>{translateState[1]?.phone}</h2>
                    <p>+51 952 295 928</p>
                </div>
                <div className='info-item'>
                    <h2>{translateState[1]?.location}</h2>
                    <p>Piura, Perú</p>
                </div>
                <div className='info-item'>
                    <h2>Coding</h2>
                    <div className='info-item-div'>
                        <i className="fa-solid fa-laptop-code"></i>
                        <i className="fa-solid fa-laptop-code"></i>
                        <i className="fa-solid fa-laptop-code"></i>
                    </div>
                </div>
                <div className='info-item'>
                    <h2>{translateState[1]?.coffee}</h2>
                    <div className='info-item-div'>
                        <i className="fa-solid fa-mug-saucer"></i>
                        <i className="fa-solid fa-mug-saucer"></i>
                        <i className="fa-solid fa-mug-saucer"></i>
                    </div>
                </div>    
            </article>
            <article className='education-volunteering'>
                <article className='edu-vol-container'>
                    <h2>{translateState[1]?.education}</h2>
                    <div className='education-div'>
                        <p>2022 - 2022</p>
                        <h3>{translateState[1]?.edutitle1}</h3>
                        <p>{translateState[1]?.edusub1}</p>
                        <p>{translateState[1]?.edusub2}</p>
                    </div>
                    <div className='education-div'>
                        <p>2017 - 2022</p>
                        <h3>{translateState[1]?.edutitle2}</h3>
                        <p>{translateState[1]?.edusub3}</p>
                        <p>{translateState[1]?.edusub4}</p>
                    </div>
                </article>
                <article className='edu-vol-container'>
                    <h2>{translateState[1]?.volunt}</h2>
                    <div className='education-div'>
                        <p>2021 - 2022</p>
                        <h3>Ludoteca Gotitas de Amor - Piura</h3>
                        <p>{translateState[1]?.voluntsub1}</p>
                        <p>{translateState[1]?.voluntsub2}</p>
                    </div>
                    <div className='education-div'>
                        <p>2021 - 2021</p>
                        <h3>Hub UDEP - Piura</h3>
                        <p>{translateState[1]?.voluntsub3}</p>
                        <p>{translateState[1]?.voluntsub4}</p>
                        <p>{translateState[1]?.voluntsub5}</p>
                    </div>
                </article>
            </article>
        </section>
    );
};

export default About;