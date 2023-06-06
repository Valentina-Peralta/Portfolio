import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c88zanm', 'template_296121c', form.current, 'STIROTqoP4OLvBgrO')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <div className="name-email">   <label>Name</label>
                <input className='name' type="text" name="from_name" />

                <label>Email</label>
                <input className='email' type="email" name="reply_to" /></div>
            <div className="message">
                <label>Message</label>
                <textarea name="message" /></div>
            <input className='send' type="submit" value="Send" />
        </form>
    );

}

export default Contact