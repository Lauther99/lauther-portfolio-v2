import React from 'react';
import '../assets/styles/projects.css'
import ecommerceImg from '../assets/images/ecommerce1.png'
import quotesImg from '../assets/images/quotesApp.png'
import weatherImg from '../assets/images/weatherImg.png'
import usersImg from '../assets/images/usersImg.png'
import rNmImg from '../assets/images/rNmImg.png'
import pokedexImg from '../assets/images/pokedexImg.png'
import ecommerce2Img from '../assets/images/ecommerce2Img.png'

const Projects = ({pageVisibility}) => {
    const ecommerce1Link = 'https://un-cafe.netlify.app/'
    const quotesAppLink = 'https://quotes-app-lv.netlify.app/'
    const weatherAppLink = 'https://weather-app-lh.netlify.app/'
    const rickAndMortyAppLink = 'https://ricknmorty-lv.netlify.app/'
    const usersInterfaceLink = 'https://users-list-lh.netlify.app/'
    const pokedexAppLink = 'https://mypokedex-lv.netlify.app/#/'
    const ecommerce2Link = 'https://react-ecommerce-lv.netlify.app/#/'

    return (
        <section id='projects' className={`${pageVisibility}`}>
            <h1>My Projects:</h1>
            <article className='projects-container'>
                <div className='project-img' style={{backgroundImage: `url(${ecommerceImg})`}}>
                    <div className='project-info'>
                        <h2>E-commerce App</h2>
                        <p>Javascript || HTML || CSS</p>
                    </div>
                </div>
                <div className='project-img' style={{backgroundImage: `url(${quotesImg})`}}>
                    <div className='project-info'>
                        <h2>Quotes App</h2>
                        <p>React JS || HTML || CSS</p>
                    </div>
                </div>
                <div className='project-img' style={{backgroundImage: `url(${weatherImg})`}}>
                    <div className='project-info'>
                        <h2>Weather App</h2>
                        <p>React JS || HTML || CSS || Javascript</p>
                    </div>
                </div>
                <div className='project-img' style={{backgroundImage: `url(${usersImg})`}}>
                    <div className='project-info'>
                        <h2>CRUD's App</h2>
                        <p>React JS || HTML || CSS || Javascript</p>
                    </div>
                </div>
                <div className='project-img' style={{backgroundImage: `url(${rNmImg})`}}>
                    <div className='project-info'>
                        <h2>Rick and Morty App</h2>
                        <p>React JS || Redux ||HTML || CSS || Javascript</p>
                    </div>
                </div>
                <div className='project-img' style={{backgroundImage: `url(${pokedexImg})`}}>
                    <div className='project-info'>
                        <h2>Pokédex App</h2>
                        <p>React JS || Redux ||HTML || CSS || Javascript</p>
                    </div>
                </div>
                <div className='project-img' style={{backgroundImage: `url(${ecommerce2Img})`}}>
                    <div className='project-info'>
                        <h2>E-commerce App</h2>
                        <p>React JS || Redux ||HTML || CSS || Javascript</p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Projects;