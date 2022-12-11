import React from 'react';
import myCV from '../assets/downloads/lauther_valladares_CV.pdf'
import '../assets/styles/home.css'

const Home = ({ pageVisibility }) => {
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
        <section id='home' className={`${pageVisibility}`}>
            <h1>Welcome to my portfolio!</h1>
            <p>My name is</p>
            <h2><span style={getStyleText(myName)}>{myName}</span></h2>
            <p>and I'm your . . .</p>
            <h2><span style={getStyleText(text)}>{text}</span></h2>
            <p>Contact me!</p>
            <article className='home-icons'>
                <a href="https://www.linkedin.com/in/lautherhvalladares/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Pancake27" target='_blank'><i className="fa-brands fa-github"></i></a>
                <a href={myCV} download><i className="fa-regular fa-file"></i></a>
            </article>
        </section>
    );
};

export default Home;
