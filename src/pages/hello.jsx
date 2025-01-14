import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";



const Hello = ()=>{

    const [typeEffect] = useTypewriter({
        words: ['Lekhan Shetty' , 'Web Developer'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed:100
    });
    useEffect(() => {
        const delay = setTimeout(() => {
          setInterval(typeEffect); 
        }, 2000); 
    
        return () => clearTimeout(delay);
      }, [typeEffect]);

    return(
        <div className="main-hello">
            <div className="hero-hello">
                <div className="role">
                    <div className="intro">Hello, I am</div>
                    <div className="hello-name"><span>{typeEffect}</span><Cursor cursorStyle='_'></Cursor></div>
                    <div className="hello-desc">Experienced Full Stack .NET Developer skilled in <br />building scalable web apps with ASP.NET Core,  <br />Angular, and modern tech.<br />Passionate about seamless solutions and innovation</div>
                    <div className="hello-Btn">
                        <NavLink to='/contact' className="main-Btn1"><button>Hire Me</button></NavLink>
                        <a href="src/assets/lekhan shetty resume.pdf" download><button className="main-Btn2">Get CV</button></a>
                    </div>
                </div>

                
                <div className="hello-image">
                    <img className="hero-image" src="src/assets/home-right.webp" alt="image" />
                </div>

            </div>
        </div>
    )
}

export default Hello;