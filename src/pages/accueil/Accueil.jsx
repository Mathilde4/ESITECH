import React from 'react';
import NavBar from '../../components/NavBar.jsx';
import ImageSlider from './ImageSlider.jsx';
import Card from './Card.jsx';
import Footer from '../../components/Footer.jsx'
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import flutter from '../../assets/flutter.png';
import javaLogo from '../../assets/java-logo.png';
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
        backgroundColor : 'lightgray',
    }
    const text = "Hello"
    return(
        <div style={container} >
        <div>
        <div style={containerStyles} >
        <ImageSlider slides={slides}>
        </ImageSlider>
        </div>
        <Card image={html1} text={"Vous cherchez à créer un site web attrayant sans vous ruiner ? En tant que développeur passionné, je vous propose des solutions de création de sites web à des prix accessibles. Que vous ayez besoin d’un site vitrine, d’un blog ou d’une boutique en ligne, je mets mon expertise à votre service pour réaliser un site sur mesure qui répondra à vos besoins spécifiques. Profitez d’un design moderne, d’une navigation intuitive et d’une optimisation pour les moteurs de recherche, le tout sans compromettre votre budget. Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit !"}></Card>
        <Card image={flutter} text={text}></Card>
        <Card image={javaLogo} text={text}></Card>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste animi similique neque exercitationem blanditiis, aspernatur molestias molestiae ipsam ex voluptas ipsa est ea ad quo inventore earum enim consequatur praesentium?</p>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default Accueil