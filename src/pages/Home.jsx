import React from 'react';
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
            <h2>Welcome to my portfolio!</h2>
            <p>My name is</p>
            <h4><span style={getStyleText(myName)}>{myName}</span></h4>
            <p>and I'm your . . .</p>
            <h4><span style={getStyleText(text)}>{text}</span></h4>
            <article className='home-icons'>
                <a href="https://www.linkedin.com/in/lautherhvalladares/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Pancake27" target='_blank'><i className="fa-brands fa-github"></i></a>
                <a href="" target='_blank'><i className="fa-regular fa-file"></i></a>
            </article>
        </section>
    );
};

export default Home;
