import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function ClonoFusion({ images }) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;
  
    useEffect(() => {
      timeOut =
        autoPlay &&
        setTimeout(() => {
          slideRight();
        }, 2500);
    });
  
    const slideRight = () => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    };
  
    const slideLeft = () => {
      setCurrent(current === 0 ? images.length - 1 : current - 1);
    };
    console.log(current);
    return (
        <>
        <button className="backbutton"><Link className="back" to="/">Back</Link></button>
        <h1 style={{textDecoration:"underline"}}>ClonoFusion</h1>
      <div
        className="carousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }} 
      >
        <div className="carousel_wrapper">
          {images.map((image, index) => {
            return (
              /* (condition) ? true : false */
  
              <div
                key={index}
                className={
                  index === current
                    ? "carousel_card carousel_card-active"
                    : "carousel_card"
                }
              >
                <img className="card_image" src={image.image} alt="" />
                <div className="card_overlay">
                  <h2 className="card_title">{image.title}</h2>
                </div>
              </div>
            );
          })}
          <div className="carousel_arrow_left" onClick={slideLeft}>
            &lsaquo;
          </div>
          <div className="carousel_arrow_right" onClick={slideRight}>
            &rsaquo;
          </div>
          <div className="carousel_pagination">
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === current
                      ? "pagination_dot pagination_dot-active"
                      : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
          <div className="icons">
        <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#f0f0f0",}} /><a href="https://github.com/kjsp91/ClonoFusion-Website">Github Link</a> <br /> <br />
        <FontAwesomeIcon icon={faGlobe} size="2xl" style={{color: "#74C0FC",}} /> <a href="https://clonofusion-kjsp91.web.app/">Visit Website</a>
      </div>
        </div>

      </div>
      <div className="vicont">
    <div className="video">
        <video width={600} controls autoPlay>
            <source src="/assets/Clono Fusion.mp4" type="video/mp4"/>
        </video>
    </div> 
    <div className="info">
        <p>Developed a website for a 3D printing services startup company named CLONOFUSION. Met requirements of all their needs and created a website for their services. Deployed the website using netlify to make it work everywhere. Using this website the user can know all the services provided by them and order by contacting them.
</p>
    </div>
      </div>
    </>
    
  );
}

export default ClonoFusion;