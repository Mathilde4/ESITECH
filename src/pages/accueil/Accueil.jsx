import React from "react";
import Footer from "../../components/Footer.jsx";
// import image1 from "../../assets/image1.jpg";
// import image2 from "../../assets/image2.jpg";
// import image3 from "../../assets/image3.jpg";

import CarouselExample from "./Carousel.jsx";
import MobileCard from "./MobileCard.jsx";

function Accueil() {
  // const slides = [
  //   { url: image1, title: "Applications" },
  //   { url: image2, title: "Statistiques" },
  //   { url: image3, title: "Sécurité" },
  // ];

  const text = "Hello";
  return (
    <div>
      <CarouselExample />
      <MobileCard />
      <Footer></Footer>
    </div>
  );
}

export default Accueil;
