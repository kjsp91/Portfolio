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
        <p>Hello,I'm</p> <br />
        <h2>Jahnavi Sai Priya Kalyanam</h2> <br />
        <p>And I'm a <p>{type}</p><Cursor cursorBlinking = {false} cursorStyle="|" /></p> <br />
      </div>
      <div className="introimge">
        <img
          src="https://cdni.iconscout.com/illustration/free/thumb/women-web-developer-with-laptop-2040890-1721886.png"
          alt="webdev"
        />
      </div>
     
    </div> <hr /></div>
  );
}
