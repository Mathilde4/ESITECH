function Footer(){
    const today = new Date();
    const year = today.getFullYear();
    const footerStyle = {
        backgroundColor : "#321951",

        height : "5%",
       color : "white",
        width : "100%",
        // position : "fixed",
        bottom : 0,
        textAlign : "center",
        padding: "0.5rem",
    }

    return(
    
            <div style={footerStyle}>
        <p>Copyright © {year}, ESITECH. All rights reserved.</p>
            </div>
        
    );
}

export default Footer;