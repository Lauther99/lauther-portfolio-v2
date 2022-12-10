import React from 'react';
import '../assets/styles/contact.css'

const Contact = ({ pageVisibility }) => {
    return (
        <section id='contact' className={`${pageVisibility}`}>
            <article className='contact-container'>
                <h1>Contact</h1>
                <h2>Contact me</h2>
                <h3>Always at your service!</h3>
                <article className='contact-info-container'>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-phone"></i>
                        <b>Phone</b>
                        <p>+51 952 925 298</p>
                    </div>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-location-pin"></i>
                        <b>Location</b>
                        <p>Piura, Perú</p>
                    </div>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-envelope"></i>
                        <b>Email</b>
                        <p>lautherharold27@gmail.com</p>
                    </div>
                    <div className='contact-info-item'>
                        <i className="fa-solid fa-file"></i>
                        <b>CV</b>
                        <p>Download</p>
                    </div>
                </article>
                <form action="" className='contact-form'>
                    <label htmlFor="">Send me an email</label>
                    <input type="text" name="" id="" placeholder='Write your message' />
                    <button>Send</button>
                </form>
            </article>
        </section>
    );
};

export default Contact;