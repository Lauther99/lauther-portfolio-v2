import React from 'react';
import '../assets/styles/about.css'


const About = ({ pageVisibility }) => {
    return (
        <section id='about' className={`${pageVisibility}`}>
            <article className='description-container'>
                <h1>About Me</h1>
                <h2>As you saw before . . .</h2>
                <p>My name is <b>Lauther Valladares</b> and I would like to present me like a person very curious, specially in the technology and science area, sometimes self-taught but most of the times like to work and learn with a team.</p>
                <h2>Also I've been . . .</h2>
                <p>
                    Considered as a good teammate with good ideas and the spirit to move on to achieve projects goals.
                    Something I would like to you to know is I'm motivated and passionate for learning new topics and easy to adapt to the different circumstances that presents. </p>
                <h2>And I'm looking for ...</h2>
                <p>
                    A job opportunity to continue my personal learning to be better and last but not least for giving my best and show the world who I am.
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
                    <h2>Phone</h2>
                    <p>+51 952 295 928</p>
                </div>
                <div className='info-item'>
                    <h2>Location</h2>
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
                    <h2>Coffee</h2>
                    <div className='info-item-div'>
                        <i className="fa-solid fa-mug-saucer"></i>
                        <i className="fa-solid fa-mug-saucer"></i>
                        <i className="fa-solid fa-mug-saucer"></i>
                    </div>
                </div>    
            </article>
            <article className='education-volunteering'>
                <article className='edu-vol-container'>
                    <h2>Education</h2>
                    <div className='education-div'>
                        <p>2022 - 2022</p>
                        <h3>Full Stack Developer - Academlo Bootcamp</h3>
                        <p>+280 theoretical - practical course hours.</p>
                        <p>+7 portfolio projects</p>
                    </div>
                    <div className='education-div'>
                        <p>2017 - 2022</p>
                        <h3>Industrial Engineer - Piura's University</h3>
                        <p>Merit order: Upper third </p>
                        <p>Student exchange at the Technical University Federico Santa Maria - Chile</p>
                    </div>
                </article>
                <article className='edu-vol-container'>
                    <h2>Volunteering</h2>
                    <div className='education-div'>
                        <p>2021 - 2022</p>
                        <h3>Ludoteca Gotitas de Amor - Piura</h3>
                        <p>I developed teaching, communication and organization skills.</p>
                        <p>I used these skills for teaching 3 and 4 year old children and for proposing/developing activities.</p>
                    </div>
                    <div className='education-div'>
                        <p>2021 - 2021</p>
                        <h3>Hub UDEP - Piura</h3>
                        <p>I developed communication skills such as active listening, assertiveness, empathy and teaching.</p>
                        <p>I used these skills for teaching 3 and 4 year old children and for proposing/developing activities.</p>
                        <p>Train more than 20 entrepreneurs in Piura, Lima (zoom line).</p>
                    </div>
                </article>
            </article>
        </section>
    );
};

export default About;