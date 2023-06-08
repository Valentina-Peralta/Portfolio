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
            <div className="name-email">
                <div className="name">
                    <label>Name</label>
                    <input type="text" name="from_name" />
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="email" name="reply_to" />
                </div>
            </div>
            <div className="message">
                <label>Message</label>
                <textarea name="message" /></div>
            <input className='send' type="submit" value="Send" />
        </form>
    );

}

export default Contact