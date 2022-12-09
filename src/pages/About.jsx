import React from 'react';
import '../assets/styles/about.css'


const About = ({pageVisibility}) => {
    return (
        <div id='about' className={`${pageVisibility}`}>
            soy un about
        </div>
    );
};

export default About;