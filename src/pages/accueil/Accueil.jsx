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
        <Card image={html1} text={"Chez ESITECH, nous créons des sites web rapides, sécurisés et faciles à utiliser qui fonctionnent sur tous les navigateurs, pour que vous puissiez rejoindre vos clients partout. Nous aidons les entreprises et les startups à créer des sites e-commerce performants, avec des fonctionnalités de paiement sécurisées et des expériences d'achat personnalisées, pour booster vos ventes et votre visibilité en ligne. Nous sommes là pour vous aider à développer votre site web et votre boutique en ligne !"}></Card>
        <Card image={flutter} text={"Chez ESITECH, nous créons des applications mobiles qui fonctionnent à la fois sur téléphone et tablette, pour que vous puissiez rejoindre vos clients partout. Nous aidons les entreprises et les startups à créer des applications rapides, sécurisées et faciles à utiliser, pour atteindre un public plus large. Nous sommes là pour vous aider à développer votre application mobile !"}></Card>
        <Card image={javaLogo} text={"Chez ESITECH, nous créons des applications de bureau qui fonctionnent sur Windows. Nous aidons les entreprises et les startups à créer des applications rapides, sécurisées et faciles à utiliser, pour atteindre un public plus large. Nous sommes là pour vous aider à développer votre application de bureau !"}></Card>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default Accueil