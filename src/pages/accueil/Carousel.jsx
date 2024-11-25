import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import './Carousel.css';

function CarouselExample() {
  return (
    <Carousel data-bs-theme="dark" className="carouselStyle">
      <Carousel.Item className="carouselItemStyle">
        <div id="div1"></div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItemStyle">
      <div id="div2"></div>
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItemStyle">
      <div id="div3"></div>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselExample;

const carouselItemStyle = {
  height : "25rem",
}
