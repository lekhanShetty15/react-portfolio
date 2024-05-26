import { color } from "framer-motion"

const About = ()=>{


    return(
        <div className="about-main">
            <div className="left">
                    <div className="aboutSection">
                        <div className="aboutTitle">About me</div>
                        <div className="aboutTitleDesc">Hi, I'm Lekhan Shetty a frontend developer fueled by creativity and code. With an MCA degree🎓, I specialize in crafting captivating user interfaces that blend design and functionality seamlessly keeping it real, making use of modern tools and methodologies to accelerate business growth and establishing unfair advantages.</div>

                    </div>

                    

                    <div className="highlights">
                        <div className="highLogo"><i class="fa-solid fa-globe fontHighLogo"></i></div>

                        <div className="highTitleAndDesc">
                            <div className="highTitle">Full Stack Development</div>
                            <div className="highDesc">Over the years, I've specialized in all areas of the stack, Front-End to Back-End, DevOps and Infrastructure, at scale.</div>

                        </div>
                    </div>


                    <div className="highlights">
                        <div className="highLogo"><i class="fa-brands fa-figma fontHighLogo"></i></div>

                        <div className="highTitleAndDesc">
                            <div className="highTitle">UI and UX</div>
                            <div className="highDesc">Design a clean, visually appealing portfolio website with consistent typography and color schemes, ensuring simplicity and accessibility. Use intuitive navigation, responsive design, and subtle animations to enhance user engagement.</div>

                        </div>
                    </div>

                    <div className="highlights">
                        <div className="highLogo"><i class="fa-solid fa-chart-simple fontHighLogo"></i></div>

                        <div className="highTitleAndDesc">
                            <div className="highTitle">Full Stack Development</div>
                            <div className="highDesc">Over the years, I've specialized in all areas of the stack, Front-End to Back-End, DevOps and Infrastructure, at scale.</div>

                        </div>
                    </div>

                    <div className="highlights">
                        <div className="highLogo"><i class="fa-solid fa-briefcase fontHighLogo"></i></div>

                        <div className="highTitleAndDesc">
                            <div className="highTitle">Professional job role</div>
                            <div className="highDesc">As a .NET Full Stack Developer at Masstech Business Solution, I develop dynamic web applications that drive business success. My role covers end-to-end development, from intuitive user interfaces to robust server-side functionality. Collaborating with diverse teams, I deliver cutting-edge solutions that exceed client expectations.</div>

                        </div>
                    </div>
                    

                    <div className="selfDetails">
                    <div className="selfImage">
                        <img className="profileImg" src="src/assets/profile-pic.png" />
                    </div>  

                        <div className="leftSelfDetails">
                            <div className="selfDetail1"><span>Born:</span> 15 November 2000</div>
                            <div className="selfDetail2"><span>City:</span> Mumbai, India</div>
                        </div>
                        

                        <div className="rightSelfDetails">
                        <div className="selfDetail3"><span>Phone:</span> +91 9561573723</div>
                        <div className="selfDetail4"><span>Email:</span> lekhanshetty49@gmail.com</div>
                        </div>
                    </div>

                    
            </div>













            <div className="right">
                <div className="eduTitle">Education Timeline</div>
                <div className="eduDesc">Here is the list of the Educations that I completed.</div>
                <div className="eduBox">
                    <div className="qualification">
                        <h1>Master Computer Application</h1>
                        <h1>2023</h1>
                    </div>
                    <div className="collegeDetails">
                        <h1 className="college">ASM IMCOST College, Mumbai</h1>
                        <h1 className="eduDesc">Successfully completed my MCA, I've honed advanced skills in computer applications and software development.</h1>

                    </div>

                </div>
                <div className="eduBox firstbox">
                    <div className="qualification">
                        <h1>Bsc.IT</h1>
                        <h1>2021</h1>
                    </div>
                    <div className="collegeDetails">
                        <h1 className="college">BNN College, Mumbai</h1>
                        <h1 className="eduDesc">BS in Information Technology Equipping with the skills for navigating the digital landscape through computer systems and software expertise.</h1>

                    </div>

                </div>



                {/* Courses details */}



                <div className="eduTitle">Courses</div>
                <div className="eduDesc">Here is the list of the Courses that I completed.</div>
                <div className="eduBox">
                    <div className="qualification">
                        <h1>MERN Stack</h1>
                        <h1>2024</h1>
                    </div>
                    <div className="collegeDetails">
                        <h1 className="college">CUVETTE</h1>
                        <h1 className="eduDesc">Explore the complete MERN (MongoDB, Express.js, React.js, Node.js) stack through hands-on projects, mastering each component to develop powerful, modern web applications.</h1>

                    </div>

                </div>
                <div className="eduBox">
                    <div className="qualification">
                        <h1>Java Full Stack</h1>
                        <h1>2024</h1>
                    </div>
                    <div className="collegeDetails">
                        <h1 className="college">JSPIDERS</h1>
                        <h1 className="eduDesc">My inaugural course where I honed my skills in seamlessly blending front-end and back-end technologies to build dynamic web applications.</h1>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default About