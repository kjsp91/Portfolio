// import './Skills.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPython } from '@fortawesome/free-brands-svg-icons'
// import { faDatabase } from '@fortawesome/free-solid-svg-icons'
// import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
// import { faCode } from '@fortawesome/free-solid-svg-icons'
// import { faJs } from '@fortawesome/free-brands-svg-icons'
// import { faReact } from '@fortawesome/free-brands-svg-icons'
// import { faLeaf } from '@fortawesome/free-solid-svg-icons' 
// import { faBrain } from '@fortawesome/free-solid-svg-icons' 
// import { faRobot} from '@fortawesome/free-solid-svg-icons' 
// import { faGears} from '@fortawesome/free-solid-svg-icons' 
// import { faAws} from '@fortawesome/free-brands-svg-icons' 
// import { faCloud} from '@fortawesome/free-solid-svg-icons' 
// import { faJava } from '@fortawesome/free-brands-svg-icons' 
// import { faCrown } from '@fortawesome/free-solid-svg-icons' 
// import { useState } from 'react'



// export default function Skills(){
//    const [web,setWeb ] = useState(1);
//    const [lang,setLang] = useState(0);
//    const [tech,setTech] = useState(0);
//    const [db , setDb] = useState(0);
//    const [cloud , setCloud] = useState(0);
//     return(
//         <div id='skills'>
//         <h1 className='hskills'>Skills</h1>
//         <div className="skillset"> 
//          <ul>
//             <li><button onClick={()=>{setLang(0);setWeb(1);setTech(0);setDb(0);setCloud(0)}} className={web&&'active'}>Web Development</button></li>
//             <li><button onClick={()=>{setLang(1);setWeb(0);setTech(0);setDb(0);setCloud(0)}} className={lang&&'active'}>Languages</button></li>
//             <li><button onClick={()=>{setLang(0);setWeb(0);setTech(1);setDb(0);setCloud(0)}} className={tech&&'active'}>Technologies</button></li>
//             <li><button onClick={()=>{setLang(0);setWeb(0);setTech(0);setDb(1);setCloud(0)}} className={db&&'active'}>DataBase</button></li>
//             <li><button onClick={()=>{setLang(0);setWeb(0);setTech(0);setDb(0);setCloud(1)}} className={cloud&&'active'}>Cloud Services</button></li>
//          </ul>
//         </div>
//         <div className="set1"> 
//          {web && <div>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faReact} spin style={{color: "#74C0FC",}} size='2xl' /> &nbsp;&nbsp;&nbsp;&nbsp;React</p>
//          </div>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faCode} flip size="2xl" style={{color: "#63E6BE",}} />&nbsp;&nbsp;&nbsp;EJS</p>
//          </div> 
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faJs} beatFade size='2xl' style={{color: "#FFD43B",}} /> &nbsp;&nbsp;&nbsp;&nbsp;HTML , CSS , JavaScript</p>
//          </div>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faNodeJs} spin size="2xl" style={{color: "#74C0FC",}} /> &nbsp;&nbsp;&nbsp;&nbsp;NodeJS , Express</p>
//          </div> </div>} 
//          {lang && <div>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faPython} flip size="2xl" style={{color: "#FFD43B",}}/> &nbsp;&nbsp;&nbsp;&nbsp;Python</p>
//          </div>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faJava} beat size="2xl" style={{color: "#f29a69",}}/> &nbsp;&nbsp;&nbsp;&nbsp;Java</p>
//          </div>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faCrown} beat size="2xl" style={{color: "#fee480",}} /> &nbsp;&nbsp;&nbsp;&nbsp;DSA using Java</p>
//          </div>
//          </div>} 
//          {tech && <div>
//          <div className="skill"> 
//             <p><FontAwesomeIcon icon={faGears} spin size="2xl" style={{color: "#B197FC",}} /> &nbsp;&nbsp;&nbsp;&nbsp;Deep Learning</p>
//          </div>
//          <div className="skill"> 
//             <p><FontAwesomeIcon icon={faRobot} flip size="2xl" style={{color: "#bcbac5",}} /> &nbsp;&nbsp;&nbsp;&nbsp;Machine Learning</p>
//          </div>
//          <div className="skill"> 
//             <p><FontAwesomeIcon icon={faBrain} beat size="2xl" style={{color: "#f0f09f",}} /> &nbsp;&nbsp;&nbsp;&nbsp;Artificial Intelligence</p>
//          </div>
//          </div>} 
//          {db && <div className='sets'>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faLeaf} beat size="2xl" style={{color: "#0ba80d",}} /> &nbsp;&nbsp;&nbsp;&nbsp;MongoDB</p>
//          </div>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faDatabase} flip size="2xl" style={{color: "#B197FC",}} /> &nbsp;&nbsp;&nbsp;&nbsp;SQL (Oracle , PostgreSQL)</p>
//          </div>
//          </div>}
//          {cloud && <div className='sets'>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faAws} beat size="2xl" style={{color: "#f09474",}} /> &nbsp;&nbsp;&nbsp;&nbsp;AWS Basics</p>
//          </div>
//          <div className="skill">
//             <p><FontAwesomeIcon icon={faCloud} size="2xl" style={{color: "#74C0FC",}} /> &nbsp;&nbsp;&nbsp;&nbsp;IBM Cloud Basics</p>
//          </div>
//          </div>}
    
      
      
//         </div>
        
       
      
//         <hr/>
//         </div> 
//     )
// }

import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons' 
import { faBrain } from '@fortawesome/free-solid-svg-icons' 
import { faRobot} from '@fortawesome/free-solid-svg-icons' 
import { faGears} from '@fortawesome/free-solid-svg-icons' 
import { faAws} from '@fortawesome/free-brands-svg-icons' 
import { faCloud} from '@fortawesome/free-solid-svg-icons' 
import { faJava } from '@fortawesome/free-brands-svg-icons' 
import { faCrown } from '@fortawesome/free-solid-svg-icons' 
import { useState } from 'react'

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('web');

    return (
        <div id='skills'>
            <h1 className='hskills'>Skills</h1>
            <div className="skillset"> 
                <ul>
                    <li><button onClick={() => setActiveCategory('web')} className={activeCategory === 'web' ? 'active' : ''}>Web Development</button></li>
                    <li><button onClick={() => setActiveCategory('lang')} className={activeCategory === 'lang' ? 'active' : ''}>Languages</button></li>
                    <li><button onClick={() => setActiveCategory('tech')} className={activeCategory === 'tech' ? 'active' : ''}>Technologies</button></li>
                    <li><button onClick={() => setActiveCategory('db')} className={activeCategory === 'db' ? 'active' : ''}>Database</button></li>
                    <li><button onClick={() => setActiveCategory('cloud')} className={activeCategory === 'cloud' ? 'active' : ''}>Cloud Services</button></li>
                </ul>
            </div>
            <div className="set1"> 
                {activeCategory === 'web' && (
                    <div>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faReact} spin style={{ color: "#74C0FC" }} size='2xl' /> &nbsp;&nbsp;&nbsp;&nbsp;React</p>
                        </div>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faCode} flip size="2xl" style={{ color: "#63E6BE" }} />&nbsp;&nbsp;&nbsp;EJS</p>
                        </div> 
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faJs} beatFade size='2xl' style={{ color: "#FFD43B" }} /> &nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, JavaScript</p>
                        </div>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faNodeJs} spin size="2xl" style={{ color: "#74C0FC" }} /> &nbsp;&nbsp;&nbsp;&nbsp;NodeJS, Express</p>
                        </div>
                    </div>
                )}
                {activeCategory === 'lang' && (
                    <div>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faPython} flip size="2xl" style={{ color: "#FFD43B" }} /> &nbsp;&nbsp;&nbsp;&nbsp;Python</p>
                        </div>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faJava} beat size="2xl" style={{ color: "#f29a69" }} /> &nbsp;&nbsp;&nbsp;&nbsp;Java</p>
                        </div>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faCrown} beat size="2xl" style={{ color: "#fee480" }} /> &nbsp;&nbsp;&nbsp;&nbsp;DSA using Java</p>
                        </div>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faC} flip size="2xl" style={{ color: "#74C0FC" }} /> &nbsp;&nbsp;&nbsp;&nbsp;C</p>
                        </div>
                    </div>
                )}
                {activeCategory === 'tech' && (
                    <div>
                        <div className="skill"> 
                            <p><FontAwesomeIcon icon={faGears} spin size="2xl" style={{ color: "#B197FC" }} /> &nbsp;&nbsp;&nbsp;&nbsp;Deep Learning</p>
                        </div>
                        <div className="skill"> 
                            <p><FontAwesomeIcon icon={faRobot} flip size="2xl" style={{ color: "#bcbac5" }} /> &nbsp;&nbsp;&nbsp;&nbsp;Machine Learning</p>
                        </div>
                        <div className="skill"> 
                            <p><FontAwesomeIcon icon={faBrain} beat size="2xl" style={{ color: "#f0f09f" }} /> &nbsp;&nbsp;&nbsp;&nbsp;Artificial Intelligence</p>
                        </div>
                    </div>
                )}
                {activeCategory === 'db' && (
                    <div className='sets'>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faLeaf} beat size="2xl" style={{ color: "#0ba80d" }} /> &nbsp;&nbsp;&nbsp;&nbsp;MongoDB</p>
                        </div>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faDatabase} flip size="2xl" style={{ color: "#B197FC" }} /> &nbsp;&nbsp;&nbsp;&nbsp;SQL (Oracle, PostgreSQL)</p>
                        </div>
                    </div>
                )}
                {activeCategory === 'cloud' && (
                    <div className='sets'>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faAws} beat size="2xl" style={{ color: "#f09474" }} /> &nbsp;&nbsp;&nbsp;&nbsp;AWS Basics</p>
                        </div>
                        <div className="skill">
                            <p><FontAwesomeIcon icon={faCloud} size="2xl" style={{ color: "#74C0FC" }} /> &nbsp;&nbsp;&nbsp;&nbsp;IBM Cloud Basics</p>
                        </div>
                    </div>
                )}
            </div>
            <hr/>
        </div>
    );
}
