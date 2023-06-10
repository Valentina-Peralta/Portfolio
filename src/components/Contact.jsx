import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


function Contact() {
    const [sent, setSent] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c88zanm', 'template_296121c', form.current, 'STIROTqoP4OLvBgrO')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
                setSent(true)
                form.current.reset(); // Resetea los campos del formulario

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