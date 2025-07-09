import React from 'react';


const PCard = ({ multiMediaSrc, title, description, techStack, xl=false, callback, isVideo=false }) => {
    return (
        <div className={`project-card ${xl ? 'xl' : 'md'}`} onClick={callback}>
            <div className='project-image'>
                {
                    !isVideo && (
                        <img src={multiMediaSrc} alt={title} />
                    )
                }
                {
                    isVideo && (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="project-preview"
                        >
                            <source src={multiMediaSrc} type="video/mp4" />
                            Tu navegador no soporta video.
                        </video>
                    )
                }
            </div>
            <div className='project-info'>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{title}</h2>
                <p style={{ fontSize: 'calc(1em + .9px)', fontWeight: '100' }}>{description}</p>
                <div className='tech-stack'>
                    {
                        techStack.map((tech, index) => (
                            <p key={index} className='tech-stack-item'>
                                {tech}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PCard;