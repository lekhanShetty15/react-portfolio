import { useTypewriter, Cursor } from "react-simple-typewriter";




const Hello = ()=>{

    const [typeEffect] = useTypewriter({
        words: ['Lekhan Shetty' , 'Web Developer'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed:100
    })

    return(
        <div className="main-hello">
            <div className="hero-hello">
                <div className="role">
                    <div className="intro">Hello, I am</div>
                    <div className="hello-name"><span>{typeEffect}</span><Cursor cursorStyle='_'></Cursor></div>
                    <div className="hello-desc">I'm a full-stack software engineer with a <br />primary focus on front-end development. I <br />Love Working at the intersection of <br />Creativity.</div>
                    <div className="hello-Btn">
                        <button className="main-Btn1">Hire Me</button>
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