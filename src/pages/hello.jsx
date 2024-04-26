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
          setName(typeEffect); 
        }, 2000); 
    
        return () => clearTimeout(delay);
      }, [typeEffect]);

    return(
        <div className="main-hello">
            <div className="hero-hello">
                <div className="role">
                    <div className="intro">Hello, I am</div>
                    <div className="hello-name"><span>{typeEffect}</span><Cursor cursorStyle='_'></Cursor></div>
                    <div className="hello-desc">I'm a full-stack software engineer with a <br />primary focus on front-end development. I <br />Love Working at the intersection of <br />Creativity.</div>
                    <div className="hello-Btn">
                        <NavLink to='/contact' className="main-Btn1"><button>Hire Me</button></NavLink>
                        <button className="main-Btn2">Get CV</button>
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