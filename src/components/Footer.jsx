function Footer(){
    const footerStyle = {
        backgroundColor : "#321951",
        height : "5%",
       color : "white",
        width : "100%",
        position : "fixed",
        bottom : 0,
        textAlign : "center"
    }
    const textFooterStyle = {
        width : "100%",
        height : "100%",
    }
    return(
    
            <div style={footerStyle}>
        <p>Footer</p>
            </div>
        
    );
}

export default Footer;