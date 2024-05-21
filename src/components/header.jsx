import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "700" : "normal",
            color: isActive ? "#D7AC63" : "#70879E",
            borderBottom: isActive ? "solid 3px #C44656" : "solid 1px rgba(112, 135, 158, 0)",
        };
    };

    return (
        <header className="header" style={{ backgroundColor: isScrolled ? "#0b0014" : "transparent" }}>
            <h1 className="name">_Lekhan_Shetty_</h1>
            <div className="header-links">
                <NavLink style={navLinkStyles} to="/" className="links link1">
                    <div>_hello</div>
                </NavLink>
                <NavLink style={navLinkStyles} to="/about" className="links link2">
                    <div>_about</div>
                </NavLink>
                <NavLink style={navLinkStyles} to="/skill" className="links link3">
                    <div>_skill</div>
                </NavLink>
                <NavLink style={navLinkStyles} to="/project" className="links link4">
                    <div>_project</div>
                </NavLink>
            </div>
            <div className="header-contact">
                <NavLink style={navLinkStyles} to="/contact" className="header-contact">
                    <div>_Contact_me</div>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
