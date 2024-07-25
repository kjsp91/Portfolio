import './Projects.css'
import { Link } from 'react-router-dom'
export default function Projects(){
    return <div id='projects'>
    <h1>Projects</h1>
     <div className="project-sets">
        <div className='ps'>
        <img  src="/assets/pizza.png" alt="pizza" /> <br />
        <h3>Pizza Delivery Application</h3>
        <button className='proj'><Link className='blink' to="/pizza">Know More</Link></button><br />
        </div>
        <div className='ps'>
        <img src="/assets/TextSummarization.png" id='reimg' alt="text summary" /> <br />
        <h3>Text Summarizer Using BART</h3>
        <button className='proj'><Link className='blink' to="/ts">Know More</Link></button>
        </div>
        <div className='ps'>
        <img src="/assets/cf1.png" alt="clonofusion" /> <br />
        <h3>ClonoFusion Website</h3>
        <button className='proj'  id='b1'><Link className='blink' to="/cf">Know More</Link></button>
        </div>
        <div className='ps'>
        <img src="/assets/mc1.png" alt="movie clone" /> <br />
        <h3>Movie Booking Page Clone</h3>
        <button className='proj'><Link className='blink' to="/mc">Know More</Link></button>
        </div>
     </div> 
     <hr />
    </div>
}