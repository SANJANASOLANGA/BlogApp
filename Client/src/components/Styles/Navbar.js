import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileAdd } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { TbToolsKitchen2 } from "react-icons/tb";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.svg";
import "../../style.css";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setExpand(false);
  const navigate = useNavigate();
  const LogOut = () => {
    alert('Successfully Logged Out!');
    window.localStorage.removeItem('loggedIn');
    window.localStorage.removeItem('token');
    navigate('/sign-in', { replace: true });
  };
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="navbar-nav ml-auto">
            <Navbar.Brand href="/blogs" className="d-flex">
              <img src={logo} className="logo-image" alt="CookeryCorner" title="CookeryCorner" />
            </Navbar.Brand>

            <Nav.Link as={Link} to="/blogs" onClick={handleLinkClick}>
              <AiOutlineHome/>
              {" "}Home
            </Nav.Link>
            <Nav.Link as={Link} to="/create-blog" onClick={handleLinkClick}>
              <CgFileAdd/> {" "}Create Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/edit-blogs" onClick={handleLinkClick}>
              <AiOutlineUser/>
              {" "}Update Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-in" onClick={handleLinkClick && LogOut}>
              <FiLogOut/> {" "}Log Out
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
