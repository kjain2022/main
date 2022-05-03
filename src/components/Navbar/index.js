import React from 'react';
import{FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, 
  NavLinks, NavBtn, NavBtnLink, NavLinks2 }
 from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Smile <i class="fa-solid fa-hand-holding-heart"></i></NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about"
                smooth={true}
                duration={3000}
                spy={true}
                exact="true"
                offset={-50}
                >About Us</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="hellosmile"
                smooth={true}
                duration={1500}
                spy={true}
                exact="true"
                offset={-50}
                >Hello Smile</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="steps"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
                >Steps</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="contact" 
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
                >Contact Us</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="steps2"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
                >Social Awareness</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks2 to="/volunteer" 
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
                >Volunteer</NavLinks2>
              </NavItem>

            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/donation">Donate Now</NavBtnLink>
            </NavBtn>
            
        </NavbarContainer>
    </Nav>
    </>
      
  );
};

export default Navbar;
