import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact(){
    const form = useRef();
            const sendEmail = (e) => {
                e.preventDefault();
                emailjs.sendForm('service_bg5gf6j', 'template_3c9e61c', form.current, {
                    publicKey: 'TmO0BoJYCyQeCZcxO',
                })         
                .then(() => {
                    console.log('SUCCESS!');
                    alert("Send Email Successfully")
                    window.location.reload()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
         }
    return <div id='contact'>
    <h1>Let's Connect ✨</h1>
    <div className="connect">
        <div className="cinfo">
            <p>I'm always excited to meet new people and explore potential collaborations. Whether you have a project in mind, need some advice, or just want to chat about the latest trends, let's get in touch. Feel free to reach out via email, LinkedIn, or simply fill out the contact form below. I look forward to connecting with you!</p> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} /> <a href="https://www.linkedin.com/in/jahnavi-sai-priya-kalyanam/">LinkedIn</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#ffffff",}}/> <a href="mailto:kjahnavisaipriya@gmail.com">E-Mail</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff",}}/> <a href="https://github.com/kjsp91">GitHub</a> <br />
            <a id='resume' href="https://drive.google.com/file/d/1Mcu1IVdrkPgJR6wbbOWyt9u8fWr7LwWA/view?usp=sharing" target="_blank" rel='noreferrer'><button className='resume'>Resume</button></a>
            
        </div>
        <div className="cform">
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name="from_name" placeholder="Name" required />
         <input type="email" name="from_email" placeholder="Email" required />
         <input type="text" name="from_subject" placeholder="Subject" required />
         <input name="message" id='msge' placeholder="Message" required />
         <button className='mb' type="submit" value="Send">Send</button>
       </form>
            

 
{/* 
            <form>
                <input type="text" placeholder="Name" required/><br />
                <input type="email" placeholder="Email" required/><br />
                <input type="text" placeholder="Subject" required /><br />
                <input type="text" id='msge'   placeholder="Message" required /><br />
            </form> */}
        </div>
    </div>
    <hr />
    </div>
}