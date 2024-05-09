import { useState } from "react"

const Project = ()=>{

    const [toggle, setToggle] = useState(1)

    function updateToggle(id){
        setToggle(id)
    }


    return(
        <div className="project-main">
            <div className="left-project">
                <div className="project-title">
                    //projects
                </div>
                <div className="project-names">
                    <div className="pname">

                        <div className="projectList" onClick={()=>updateToggle(1)}>
                        <div><i class="fa-solid fa-folder folder"></i></div>
                        <div className="proname">Car Rental Website</div>
                        </div>

                        <div className="projectList" onClick={()=>updateToggle(2)}>
                        <div><i class="fa-solid fa-folder folder"></i></div>
                        <div className="proname">Crypto Website</div>
                        </div>

                        <div className="projectList" onClick={()=>updateToggle(3)}>
                        <div><i class="fa-solid fa-folder folder"></i></div>
                        <div className="proname">India Election Stat</div>
                        </div>

                        <div className="projectList" onClick={()=>updateToggle(4)}>
                        <div><i class="fa-solid fa-folder folder"></i></div>
                        <div className="proname">Recipie Finder</div>
                        </div>

                    </div>
                </div>

            </div>


            <div className="right-project">
                <div className={toggle === 1 ? "show-projectHide" : "projectHide"}>
                        <div className="projectTilteName">
                            <h1 className="projname">Car Rental Website<div className="prolink">link</div></h1>
                            <h1 className="prodate">May2024 2024</h1>
                        </div>

                        <div className="projectImage"></div>

                        <div className="projectIntro">
                            <h1 className="intropro">Project Intro</h1>
                            <h1 className="projectDesc">The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.</h1>
                        </div>

                        <div className="projectIntro">
                            <h1 className="task">Task</h1>
                            <h1 className="taskDesc">The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.</h1>
                        </div>

                        <div className="tools">
                            <div className="languages">
                                <h1 className="langtitle">Languages</h1>
                                <h1 className="langname">JavaScript,HTML,CSS</h1>
                            </div>

                            <div className="languages">
                                <h1 className="langtitle">Tools</h1>
                                <h1 className="langname">VScode</h1>
                            </div>

                            <div className="languages">
                                <h1 className="langtitle">Frameworks</h1>
                                <h1 className="langname">Next.js,React,Redux</h1>
                            </div>
                        </div>


                </div>






                <div className={toggle === 2 ? "show-projectHide" : "projectHide"}>
                        <div className="projectTilteName">
                            <h1 className="projname">Crypto Website<div className="prolink">link</div></h1>
                            <h1 className="prodate">Jan 2024</h1>
                        </div>

                        <div className="projectImage2"></div>

                        <div className="projectIntro">
                            <h1 className="intropro">Project Intro</h1>
                            <h1 className="projectDesc">The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.</h1>
                        </div>

                        <div className="projectIntro">
                            <h1 className="task">Task</h1>
                            <h1 className="taskDesc">The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.</h1>
                        </div>

                        <div className="tools">
                            <div className="languages">
                                <h1 className="langtitle">Languages</h1>
                                <h1 className="langname">JavaScript,HTML,CSS</h1>
                            </div>

                            <div className="languages">
                                <h1 className="langtitle">Tools</h1>
                                <h1 className="langname">VScode</h1>
                            </div>

                            <div className="languages">
                                <h1 className="langtitle">Frameworks</h1>
                                <h1 className="langname">Next.js,React,Redux</h1>
                            </div>
                        </div>


                </div>
                





                <div className={toggle === 3 ? "show-projectHide" : "projectHide"}>
                        <div className="projectTilteName">
                            <h1 className="projname">India Election Stats<div className="prolink">link</div></h1>
                            <h1 className="prodate">Jan 2024</h1>
                        </div>

                        <div className="projectImage3"></div>

                        <div className="projectIntro">
                            <h1 className="intropro">Project Intro</h1>
                            <h1 className="projectDesc">The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.</h1>
                        </div>

                        <div className="projectIntro">
                            <h1 className="task">Task</h1>
                            <h1 className="taskDesc">The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.</h1>
                        </div>

                        <div className="tools">
                            <div className="languages">
                                <h1 className="langtitle">Languages</h1>
                                <h1 className="langname">JavaScript,HTML,CSS</h1>
                            </div>

                            <div className="languages">
                                <h1 className="langtitle">Tools</h1>
                                <h1 className="langname">VScode</h1>
                            </div>

                            <div className="languages">
                                <h1 className="langtitle">Frameworks</h1>
                                <h1 className="langname">Next.js,React,Redux</h1>
                            </div>
                        </div>


                </div>
                





                <div className={toggle === 4 ? "show-projectHide" : "projectHide"}>
                        <div className="projectTilteName">
                            <h1 className="projname">Recipie Finder<div className="prolink">link</div></h1>
                            <h1 className="prodate">Jan 2024</h1>
                        </div>

                        <div className="projectImage4"></div>

                        <div className="projectIntro">
                            <h1 className="intropro">Project Intro</h1>
                            <h1 className="projectDesc">The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.</h1>
                        </div>

                        <div className="projectIntro">
                            <h1 className="task">Task</h1>
                            <h1 className="taskDesc">The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.</h1>
                        </div>

                        <div className="tools">
                            <div className="languages">
                                <h1 className="langtitle">Languages</h1>
                                <h1 className="langname">JavaScript,HTML,CSS</h1>
                            </div>

                            <div className="languages">
                                <h1 className="langtitle">Tools</h1>
                                <h1 className="langname">VScode</h1>
                            </div>

                            <div className="languages">
                                <h1 className="langtitle">Frameworks</h1>
                                <h1 className="langname">Next.js,React,Redux</h1>
                            </div>
                        </div>


                </div>
            </div>
        </div>
    )
}

export default Project