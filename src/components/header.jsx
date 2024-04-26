import { NavLink } from "react-router-dom"
const Header = ()=>{


    return(
         <header className="header">
             <h1 className='name'>_Lekhan_Shetty_</h1>
             <div className='header-links'>
            <NavLink to='/' className="links link1"><div>_hello</div></NavLink>
            <NavLink to='/about' className="links link2"><div>_about</div></NavLink>
            <NavLink to='/skill' className="links link3"><div>_skill</div></NavLink>
            <NavLink to='/project' className="links link4"><div>_project</div></NavLink>
             </div>
             <div className="header-contact">
             <NavLink to='/contact' className="header-contact"><div>_Contact_me</div></NavLink> 
            </div>
 
         </header>
     )
 }
 
 export default Header