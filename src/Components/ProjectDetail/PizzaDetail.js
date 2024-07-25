import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./PizzaDetail.css";

function PizzaDetail({ images }) {
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
        <h1 style={{textDecoration:"underline"}}>Pizza Delivery Application</h1>
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
        <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#f0f0f0",}} /><a href="https://github.com/kjsp91/pizza-delivery-application-react-final">Github Link</a>
      </div>
        </div>

      </div>
      <div className="vicont">
    <div className="video">
        <video width={600} controls autoPlay>
            <source src="/assets/Pizza Delivery Application.mp4" type="video/mp4"/>
        </video>
    </div> 
    <div className="info">
      <p>This is Pizza Delivery Application. From this website the user can order his favourite pizza. The key feature of this website is that the user can customize his pizza with his favourite toppings. Their was a customize section in which the user can select respective toppings and order the pizza. Each toppings has its own price. Also in this website the user can rate the pizza and give his feedback. Once the user placed the ordered, the bill will be downloaded as pdf in the user system.</p>
    </div>
      </div>
    </>
    
  );
}

export default PizzaDetail;