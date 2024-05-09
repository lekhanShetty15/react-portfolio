import { Link } from "react-router-dom";

const Footer = ()=>{

    const linkedinProfileUrl = "https://www.linkedin.com/in/lekhan-shetty-303116165/";
    const githubProfileUrl = "https://github.com/lekhanShetty15";
    const twitterProfileUrl = "https://twitter.com/lekhanshetty15";
    const whatsappProfileUrl = "https://wa.me/919561573723";
    

    return(
        <div className="footer">
            <div className="socials">
                <div className="find">_find_me_</div>
                <Link to={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" className="social"><i class="fa-brands fa-linkedin-in sociolink"></i></Link>
                <Link to={githubProfileUrl} target="_blank" rel="noopener noreferrer" className="social"><i class="fa-brands fa-github sociolink"></i></Link>
                <Link to={twitterProfileUrl} target="_blank" rel="noopener noreferrer" className="social"><i class="fa-brands fa-x-twitter sociolink"></i></Link>
                <Link to={whatsappProfileUrl} target="_blank" rel="noopener noreferrer" className="socialast"><i class="fa-brands fa-whatsapp sociolink"></i></Link>
            </div>
            <div className="anifooter">Copywright</div>
            
        </div>
    )
}

export default Footer;