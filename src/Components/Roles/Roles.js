import Experience from '../Experience/Experience'
import './Roles.css'
export default function Roles(){
    return(
        <div id='roles'>
        <h1>Roles I am Intrested To Work</h1>
        <div className="cards">
        <div className="card">
            <img src="https://wallpapercave.com/wp/wp11346423.jpg" alt="developer" />
            <p>Full Stack Web Developer</p>
        </div>
        <div className="card">
            <img src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" alt="react" />
            <p>React Developer</p>
        </div>
        <div className="card">
            <img src="https://www.aislac.org/wp-content/uploads/2021/07/python-developer.png" alt="python" />
            <p>Python Developer</p>
        </div>
        <div className="card">
            <img src="https://www.thesoftwarereport.com/wp-content/uploads/2021/06/AI.jpg" alt="ai" />
            <p>AI Developer</p>
        </div>
        </div> 
        <Experience/>
        <hr/>
        </div>
    )
}