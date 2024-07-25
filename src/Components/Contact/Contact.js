import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Conatact(){
    return <div id='contact'>
    <h1>Let's Connect ✨</h1>
    <div className="connect">
        <div className="cinfo">
            <p>I'm always excited to meet new people and explore potential collaborations. Whether you have a project in mind, need some advice, or just want to chat about the latest trends, let's get in touch. Feel free to reach out via email, LinkedIn, or simply fill out the contact form below. I look forward to connecting with you!</p> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} /> <a href="https://www.linkedin.com/in/jahnavi-sai-priya-kalyanam/">LinkedIn</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#ffffff",}}/> <a href="mailto:kjahnavisaipriya@gmail.com">E-Mail</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff",}}/> <a href="https://github.com/kjsp91">GitHub</a> <br />
            {/* <button className='resume'>Resume</button> */}
            
        </div>
        <div className="cform">
            <form>
                <input type="text" placeholder="Name" required/><br />
                <input type="email" placeholder="Email" required/><br />
                <input type="text" placeholder="Subject" required /><br />
                <input type="text" id='msge' placeholder="Message" required /><br />
                <button className='mb'><a href="mailto:kjahnavisaipriya@gmail.com">Send</a></button>
            </form>
        </div>
    </div>
    <hr />
    </div>
}