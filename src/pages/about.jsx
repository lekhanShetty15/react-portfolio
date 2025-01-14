import { color } from "framer-motion"

const About = ()=>{


    return(
        <div className="about-main">
            <div className="left">
                    <div className="aboutSection">
                        <div className="aboutTitle">About me</div>
                        <div className="aboutTitleDesc">Hi, I'm Lekhan Shetty, a Full Stack Dot NET Developer with over 2 years of experience, fueled by creativity and code. With an MCA degree 🎓, I specialize in building scalable web applications and crafting seamless user interfaces that blend design and functionality. Leveraging modern tools and methodologies, I focus on accelerating business growth and creating innovative, competitive advantages.</div>

                    </div>


                    <div className="highlights">
                        <div className="highLogo"><i class="fa-solid fa-globe fontHighLogo"></i></div>

                        <div className="highTitleAndDesc">
                            <div className="highTitle">Full Stack Development</div>
                            <div className="highDesc">Full Stack .NET Developer with expertise in both Front-End and Back-End development using ASP.NET Core, Angular, and SQL. I specialize in building scalable, efficient solutions across the entire stack.</div>

                        </div>
                    </div>


                    <div className="highlights">
                        <div className="highLogo"><i class="fa-brands fa-figma fontHighLogo"></i></div>

                        <div className="highTitleAndDesc">
                            <div className="highTitle">UI and UX</div>
                            <div className="highDesc">Designing clean, visually appealing UIs for .NET applications with a focus on simplicity and accessibility. I ensure intuitive navigation, responsive design, and subtle animations to enhance user engagement and deliver seamless experiences. My approach combines modern .NET technologies to create efficient, user-friendly interfaces.</div>

                        </div>
                    </div>

                  

                    <div className="highlights">
                        <div className="highLogo"><i class="fa-solid fa-briefcase fontHighLogo"></i></div>

                        <div className="highTitleAndDesc">
                            <div className="highTitle">Professional Job Role</div>
                            <div className="highDesc">As a .NET Full Stack Developer at Deal Money Commodities Private Limited, I develop dynamic web applications that drive business success. My role covers end-to-end development, from intuitive user interfaces to robust server-side functionality. While working here, I became fluent in Angular and .NET Core, and gained hands-on experience in hosting, deploying, and maintaining websites. I also actively manage and maintain the company's completed projects, ensuring their continued success and performance. Collaborating with diverse teams, I deliver cutting-edge solutions that exceed client expectations.</div>

                        </div>
                    </div>

                    <div className="highlights">
                        <div className="highLogo"><i class="fa-solid fa-chart-simple fontHighLogo"></i></div>

                        <div className="highTitleAndDesc">
                            <div className="highTitle">Freelance Hustle Machine</div>
                            <div className="highDesc">As a freelancer, I take on projects, delivering custom solutions while balancing my full-time role. It’s my extra hustle where caffeine, creativity, and deadlines meet! I enjoy the thrill of making things happen, one project at a time. Plus, it keeps me sharp and ready for whatever comes next</div>

                        </div>
                    </div>

                    <div className="highlights">
                        <div className="highLogo"><i class="fa-solid fa-chart-simple fontHighLogo"></i></div>

                        <div className="highTitleAndDesc">
                            <div className="highTitle">Weekend Warrior Trader</div>
                            <div className="highDesc">Meet the Occasional Market Adventurer that's me! By day, I'm a Full Stack .NET Developer, but when the markets call, I answer with a mix of curiosity and caffeine. I trade from time to time, sometimes landing a nice profit, other times learning valuable lessons. When I’m not coding or trading, I’m probably plotting my next ‘big win’ or planning my next weekend getaway!</div>

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
                        <div className="selfDetail3"><span>Phone:</span> +91-9561573723</div>
                        <div className="selfDetail4"><span>Email:</span> lekhanshetty49@gmail.com</div>
                        </div>
                    </div>

                    
            </div>













            <div className="right">

            <div className="eduTitle">Job Timeline</div>
            <div className="eduDesc">Here is an overview of the work and tenure I’ve completed.</div>
            <div className="eduBox">
                    <div className="qualification">
                        <h1>Full Stack .Net Developer</h1>
                        <h2>Nov-2024</h2>
                    </div>
                    <div className="collegeDetails">
                        <h1 className="college">Deal Money Commodities Pvt Ltd</h1>
                        <h1 className="eduDesc">Currently, I’m contributing as a Full Stack .NET Developer, creating impactful web applications and enhancing user experiences.</h1>

                    </div>

                </div>


                <div className="eduBoxJob">
                    <div className="qualification">
                        <h1>Full Stack .Net Developer</h1>
                        <h2>1.6 Years</h2>
                    </div>
                    <div className="collegeDetails">
                        <h1 className="college">Masstech Business Solutions Pvt Ltd</h1>
                        <h1 className="eduDesc">At my previous company, I gained valuable experience in full-stack development, mastering .NET Core, Angular, and SQL.</h1>

                    </div>

                </div>




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