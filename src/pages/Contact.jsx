import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/styles/contact.css'
import myCV from '../assets/downloads/lauther_valladares_CV.pdf'
import { useSelector } from 'react-redux';

const Contact = () => {
    const translateState = useSelector(state => state.translate);

    const { register, handleSubmit } = useForm()
    const linkedinLink = 'https://www.linkedin.com/in/lautherhvalladares/'
    const gitHubLink = 'https://github.com/Pancake27'
    const wspLink = 'https://api.whatsapp.com/send?phone=%2B51952295928&text='

    const submit = (data) => {
        emailjs.send('default_service', 'template_sf6eeiv', data, 'ycYkSEzd96HEGbQTW')
            .then(() => {
                alert('Sent!');
            }, (err) => {
                alert(JSON.stringify(err));
            });
    }

    return (
        <section id='contact'>
            <article className='contact-container'>
                <h1>{translateState[4]?.title}</h1>
                <h3>{translateState[4]?.sub1}</h3>
                <article className='contact-info-container'>
                    <a href={linkedinLink} target='_blank' className='contact-info-item'>
                        <i className="fa-brands fa-linkedin"></i>
                        <b>Linkedin</b>
                        <p>Lauther Valladares</p>
                    </a>
                    <a href={gitHubLink} target='_blank' className='contact-info-item'>
                        <i className="fa-brands fa-github"></i>
                        <b>Github</b>
                        <p>Lauther</p>
                    </a>
                    <a href={wspLink} target='_blank' className='contact-info-item'>
                        <i className="fa-brands fa-whatsapp"></i>
                        <b>Whatsapp</b>
                        <p>+51 952 925 298</p>
                    </a>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-location-pin"></i>
                        <b>{translateState[4]?.location}</b>
                        <p>Piura, Perú</p>
                    </div>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-envelope"></i>
                        <b>{translateState[4]?.email}</b>
                        <p>lautherharold27@gmail.com</p>
                    </div>
                    <a href={myCV} download className='contact-info-item'>
                        <i className="fa-solid fa-file"></i>
                        <b>CV</b>
                        <p>{translateState[4]?.download}</p>
                    </a>
                </article>
                <form className='contact-form' onSubmit={handleSubmit(submit)}>
                    <h3>{translateState[4]?.send}</h3>
                    <div className='form-item'>
                        <input type="email" name="email" id="email" placeholder='Email . . .' {...register('email')} required></input>
                    </div>
                    <div className='form-item'>
                        <textarea name="message" id='message' rows="5" cols="40" placeholder={translateState[4]?.message} {...register('message')} required></textarea>
                    </div>
                    <input type='submit' value={translateState[4]?.sendbtn} className='btn-submit' />
                </form>
            </article>
        </section>
    );
};

export default Contact;