import React from 'react';
import NavBar from '../../components/NavBar.jsx';
import ImageSlider from './ImageSlider.jsx';
import Card from './Card.jsx';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';

import html1 from '../../assets/html1.png';
function Accueil(){
    const slides = [
        { url: image1, title: 'Applications' },
        { url: image2, title: 'Statistiques' },
        { url: image3, title: 'Sécurité' },
        { url: image4, title: 'Code' },
    ];
    const containerStyles = {
        padding : '30px 30px',
        with : "500px",
        height : "580px",
        margin : "0 auto"
    };
    const container = {
        backgroundColor : 'lightgray'
    }
    const text = "Hello"
    return(
        <>
        <div style={container}>
        <div style={containerStyles}>
        <ImageSlider slides={slides}>
        </ImageSlider>
        </div>
        <Card image={html1} text={text}></Card>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste animi similique neque exercitationem blanditiis, aspernatur molestias molestiae ipsam ex voluptas ipsa est ea ad quo inventore earum enim consequatur praesentium?</p>
        </div>
        </>
    );
}

export default Accueil