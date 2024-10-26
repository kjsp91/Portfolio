import "./Hero.css";
import { useTypewriter,Cursor } from "react-simple-typewriter"; //npm i react-simple-typewriter
export default function Hero() { 
    const [type] = useTypewriter({
        words : ["Full Stack Developer","React Developer" , "Python Expertise" , "AI Enthusiastic"],
        loop : 0,
        typeSpeed : 100,
        delaySpeed:800,
        deleteSpeed : 40    
    })
  return (
    <div id="home">
      <div className="hero">    
      <div className="intro">
        <p>Hello, I'm</p> <br />
        <h2>Jahnavi Sai Priya Kalyanam</h2> <br />
        <p>And I'm a <p>{type}</p><Cursor cursorBlinking = {false} cursorStyle="|" /></p> <br />
        <a href="https://drive.google.com/file/d/1AFp5u_yA3WYztauQTDtSzJILONpvjo21/view?usp=sharing" target="_blank" rel='noreferrer'><button className="hres">Resume</button></a>
      </div>
      <div className="introimge">
        <img
          src="/assets/hero1.png"
          alt="webdev"
        />
      </div>
     
    </div> <hr /></div>
  );
}
