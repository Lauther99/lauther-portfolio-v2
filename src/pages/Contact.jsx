import React from 'react';
import '../assets/styles/contact.css'

const Contact = ({ pageVisibility }) => {
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
                <form action="" className='contact-form'>
                    <label htmlFor=""><h3>Send me an email</h3></label>
                    <textarea name="textarea" rows="5" cols="50" placeholder='Message . . .'></textarea>
                    <button type='button'>Send</button>
                </form>
            </article>
        </section>
    );
};

export default Contact;