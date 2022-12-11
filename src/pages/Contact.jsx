import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/styles/contact.css'

const Contact = ({ pageVisibility }) => {
    const { register, handleSubmit } = useForm()

    const submit = (data) => {
        emailjs.send('default_service', 'template_sf6eeiv', data, 'ycYkSEzd96HEGbQTW')
            .then(() => {
                alert('Sent!');
            }, (err) => {
                alert(JSON.stringify(err));
            });
    }

    return (
        <section id='contact' className={`${pageVisibility}`}>
            <article className='contact-container'>
                <h1>Contact</h1>
                <h3>Always at your service</h3>
                <article className='contact-info-container'>
                    <div className='contact-info-item'>
                        <i className="fa-brands fa-linkedin"></i>
                        <b>Linkedin</b>
                        <p>Lauther Valladares</p>
                    </div>
                    <div className='contact-info-item'>
                        <i className="fa-brands fa-github"></i>
                        <b>Github</b>
                        <p>Lauther Valladares</p>
                    </div>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-phone"></i>
                        <b>Phone me</b>
                        <p>+51 952 925 298</p>
                    </div>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-location-pin"></i>
                        <b>Location</b>
                        <p>Piura, Perú</p>
                    </div>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-envelope"></i>
                        <b>Email me</b>
                        <p>lautherharold27@gmail.com</p>
                    </div>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-file"></i>
                        <b>CV</b>
                        <p>Download</p>
                    </div>
                </article>
                <h3>Send me an email</h3>
                <form className='contact-form' onSubmit={handleSubmit(submit)}>
                    <div className='form-item'>
                        <label htmlFor="email">Your email</label>
                        <input type="email" name="email" id="email" placeholder='Your email . . .' {...register('email')} required></input>
                    </div>
                    <div className='form-item'>
                        <textarea name="message" id='message' rows="5" cols="40" placeholder='Message . . .' {...register('message')} required></textarea>
                    </div>
                    <input type='submit' value='Send' className='btn-submit' />
                </form>
            </article>
        </section>
    );
};

export default Contact;