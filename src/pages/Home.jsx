import { useRef, useState, useEffect } from 'react';
import imageSrc from '../assets/images/jeje.jpg';
import PCard from '../components/Cards/ProjectCards';
import { useForm } from 'react-hook-form';
import { useTranslateStore } from "../store/store"
import yo2 from '../assets/yo2.webp'
import yo3 from '../assets/yo.webp'
import d3 from '../assets/d3.mp4'
import e3 from '../assets/e3.mp4'
import dondeelche from '../assets/donde-el-che.png'
import github from '../assets/github.png'
import asistencia from '../assets/asistencia.png'
import myCV from '../assets/Cv. Lauther Valladares.pdf'

const Home = () => {
    const [currentSection, setCurrentSection] = useState('home');
    const [outgoingSection, setOutgoingSection] = useState(null);
    const [currentProject, setCurrentProject] = useState(null);
    const [activeSide, setActiveSide] = useState(false);
    const translateState = useTranslateStore(state => state.language);


    const proyectos = [
        {
            title: "AttendFlow",
            description: "Plataforma web ayuda a digitalizar el registro de asistencias de los trabajadores.",
            techStack: ['React js', 'Netlify', 'AppScript'],
            isVideo: false,
            mediaSrc: asistencia,
            website: false,
            github: "https://github.com/Lauther99/asistencia-elche",
            xl: false
        },
        {
            title: "D3 Assistant",
            description: "Asistente LLM potenciado con apis como ChatGPT/Llama 3.3/ Qwen Coder.",
            techStack: ['Python', 'Next js', 'Azure', 'HuggingFace'],
            isVideo: true,
            mediaSrc: d3,
            website: false,
            github: false,
            xl: true
        },
        {
            title: "API E-Commerce",
            description: "Prototipo de API para un ecommerce.",
            techStack: ['React', 'HTML', 'CSS', 'Node js'],
            isVideo: false,
            mediaSrc: github,
            website: false,
            github: "https://github.com/Lauther99/ecommerceAPI",
            xl: false
        },
        {
            title: "Enzo Assistant",
            description: "Agente para uso diario con tareas como programar correos, verificar y registrar contactos, agendar reuniones a través de Google Meets, entre otras. ",
            techStack: ['Python', 'WhatsApp API', 'Firebase'],
            isVideo: true,
            mediaSrc: e3,
            website: false,
            github: "https://github.com/Lauther99/enzo_agent",
            xl: true
        },
        {
            title: "Donde el che Web",
            description: "Prototipo y diseño web para restaurante",
            techStack: ['Python', 'React', 'Azure'],
            isVideo: false,
            mediaSrc: dondeelche,
            website: "https://donde-el-che.netlify.app/",
            github: "https://github.com/Lauther99/restWeb2",
            xl: false
        },

    ]

    const sectionRef = useRef(null);
    const { register, handleSubmit } = useForm()


    const handleNavigate = async (target) => {
        if (target === currentSection) return;
        setCurrentSection(target);
        setActiveSide(false);
        setCurrentProject(null);
    };

    return (
        <div className='container'>
            <div className='section_' ref={sectionRef}>
                {(currentSection === 'home' || outgoingSection === 'home') && (
                    <div className={`section ${outgoingSection === 'home' ? 'invisible_' : 'visible_'}`}>
                        <div className='text-container'>
                            <h1>Hola, soy Lauther Valladares</h1>
                            <h2>Desarrollador web fullstack enfocado en crear experiencias atractivas accesibles y centradas en el usuario.</h2>
                            <div className='social-icons'>
                                <a href="https://www.linkedin.com/in/lautherhvalladares" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                                <a href="https://github.com/Lauther99" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-2xl"></i></a>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={yo2} alt="Lauther Valladares" />
                        </div>
                    </div>
                )}

                {(currentSection === 'about' || outgoingSection === 'about') && (
                    <div className={`s-container ${outgoingSection === 'about' ? 'invisible_' : 'visible_'}`}>
                        <h1>Soy Lauther.</h1>
                        <div className='about-subcontainer'>
                            <div className='about-card'>
                                <p style={{ lineHeight: "1.5" }}>
                                    ¡Hola! Me llamo Lauther. Estudié Ingeniería Industrial y de Sistemas, y me apasiona la tecnología. </p>
                                <img src={yo3} alt="Lauther Valladares" />
                                <p style={{ lineHeight: "1.5" }}>
                                    Actualmente me desempeño como desarrollador de software full-stack, y en los últimos años he enfocado mi interés en la inteligencia artificial. Combino mi experiencia con <b style={{ color: "yellow" }}>Python</b> y <b style={{ color: "yellow" }}>React</b> para crear aplicaciones modernas, eficientes y centradas en la experiencia del usuario.
                                </p>
                            </div>
                            <div className='about-card skills-container'>
                                {
                                    [
                                        {
                                            "skill": "Python",
                                            "level": 80,
                                            "color": "#FFD43B",
                                            "icon": "fa-brands fa-python"
                                        },
                                        {
                                            "skill": "JavaScript",
                                            "level": 70,
                                            "color": "#F7DF1E",
                                            "icon": "fa-brands fa-square-js"
                                        },
                                        {
                                            "skill": "React",
                                            "level": 75,
                                            "color": "#61DAFB",
                                            "icon": "fa-brands fa-react"
                                        },
                                        {
                                            "skill": "Azure",
                                            "level": 70,
                                            "color": "#0078D4",
                                            "icon": "fa-brands fa-microsoft"
                                        },
                                        {
                                            "skill": "AI/ML",
                                            "level": 70,
                                            "color": "#FF5722",
                                            "icon": "fa-solid fa-robot"
                                        },
                                        {
                                            "skill": "Node.js",
                                            "level": 60,
                                            "color": "#339933",
                                            "icon": "fa-brands fa-node-js"
                                        },
                                        {
                                            "skill": "SQL",
                                            "level": 55,
                                            "color": "#EAD202",
                                            "icon": "fa-solid fa-database"
                                        }
                                    ].map((skill, index) => (
                                        <div key={index} className='skill'>
                                            <div className='skill-info'>
                                                <i className={skill.icon} style={{ color: skill.color }}></i>
                                                <h3>{skill.skill}</h3>
                                            </div>
                                            <div className='bar' style={{ width: `${skill.level}%` }}></div>
                                        </div>
                                    ))
                                }
                            </div>
                            {/* <div className='about-card'>
                                <p>
                                    Hola, soy un desarrollador full-stack con enfoque en inteligencia artificial y soluciones cloud. Combino mi experiencia en Python y React para construir aplicaciones modernas, escalables y centradas en la experiencia del usuario.<br /><br />Durante los últimos años he trabajado en proyectos que integran APIs inteligentes, automatización con IA, dashboards interactivos y despliegues en Azure.<br /><br />
                                </p>
                            </div> */}
                        </div>

                    </div>
                )}

                {(currentSection === 'projects' || outgoingSection === 'projects') && (
                    <div className={`s-container projects-container ${outgoingSection === 'projects' ? 'invisible_' : 'visible_'}`}>
                        <h1>Projects.</h1>
                        <div className='projects-grid'>
                            {
                                proyectos.map((project, index) => (
                                    <PCard
                                        key={index}
                                        multiMediaSrc={project.mediaSrc}
                                        title={project.title}
                                        description={project.description}
                                        techStack={project.techStack}
                                        xl={project.xl}
                                        callback={() => {
                                            setActiveSide(true);
                                            setCurrentProject(project);
                                        }}
                                        isVideo={project.isVideo}
                                    />
                                ))
                            }
                        </div>
                        <div className={`side-container ${activeSide ? 'visible_' : 'invisible_'}`} onClick={() => {
                            setActiveSide(false)
                        }}>
                            <div className='side-info' onClick={(e) => {
                                e.stopPropagation();
                            }}>
                                <div className='back'>
                                    <button onClick={() => {
                                        setActiveSide(false)
                                    }}>Atrás</button>
                                </div>
                                <h2 style={{ fontWeight: "bold" }}>{currentProject?.title}</h2>
                                <div className='side-info-image'>
                                    {/* <img src={currentProject?.mediaSrc} alt={currentProject?.title} /> */}

                                    {
                                        !currentProject?.isVideo && (
                                            <img src={currentProject?.mediaSrc} alt={currentProject?.title} />
                                        )
                                    }
                                    {
                                        currentProject?.isVideo && (
                                            <video
                                                key={currentProject?.videoSrc}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="project-preview"
                                            >
                                                <source src={currentProject?.mediaSrc} type="video/mp4" />
                                                Tu navegador no soporta video.
                                            </video>
                                        )
                                    }
                                </div>
                                <h3>About</h3>
                                <p>{currentProject?.description}</p>
                                <h3>Technologies</h3>
                                <div className='tech-stack' >
                                    {currentProject?.techStack.map((tech, index) => (
                                        <p key={index} style={{ backgroundColor: "rgb(20, 50, 80)" }}>{tech}</p>
                                    ))}
                                </div>
                                {
                                    currentProject?.website && (
                                        <h3>Website</h3>
                                    )
                                }
                                {
                                    currentProject?.website && (
                                        <a href={currentProject?.website} target="_blank" rel="noopener noreferrer">{currentProject?.website}</a>
                                    )
                                }
                                {
                                    currentProject?.github && (
                                        <h3>Github</h3>
                                    )
                                }
                                {
                                    currentProject?.github && (
                                        <a href={currentProject?.github} target="_blank" rel="noopener noreferrer">{currentProject?.github}</a>
                                    )
                                }
                                {
                                    (currentProject?.website || currentProject?.github) && (
                                        <div className='visit-web'>
                                            <a href={currentProject?.website ? currentProject?.website : currentProject?.github} target="_blank" rel="noopener noreferrer">
                                                Visitar sitio
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )}

                {(currentSection === 'contact' || outgoingSection === 'contact') && (
                    <div className={`s-container contact ${outgoingSection === 'contact' ? 'invisible_' : 'visible_'}`}>
                        <h1>Contact.</h1>
                        <div className='contact-content'>
                            <form className='contact-form' >
                                <h3>{translateState[4]?.send}</h3>
                                <div className='form-item'>
                                    <input type="Name" name="Name" id="Name" placeholder='Name . . .' {...register('name')} required></input>
                                </div>
                                <div className='form-item'>
                                    <input type="email" name="email" id="email" placeholder='Email . . .' {...register('email')} required></input>
                                </div>
                                <div className='form-item'>
                                    <textarea name="message" id='message' rows="10" cols="40" placeholder={translateState[4]?.message} {...register('message')} required></textarea>
                                </div>
                                <input type='submit' value={translateState[4]?.sendbtn} className='btn-submit' />
                                <div className='social-contact'>
                                    <a href="https://www.linkedin.com/in/lautherhvalladares"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                                    <a href="https://github.com/Lauther99"><i className="fa-brands fa-github fa-2xl"></i></a>
                                    <a href="https://api.whatsapp.com/send?phone=%2B51952295928&text="><i className="fa-brands fa-whatsapp fa-2xl"></i></a>
                                    <a href={myCV} download><i className="fa-solid fa-file fa-2xl"></i></a>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            </div>
            <div className='navigator-buttons'>
                <button onClick={async () => await handleNavigate('home')}>HM</button>
                <button onClick={async () => await handleNavigate('about')}>AB</button>
                <button onClick={async () => await handleNavigate('projects')}>PJ</button>
                <button onClick={async () => await handleNavigate('contact')}>CT</button>
            </div>
        </div>
    );
};

export default Home;


