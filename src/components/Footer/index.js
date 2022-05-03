import React from 'react'
import {FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,
SocialIconLink, FooterWrap} from './FooterElements';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';


const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            {/* <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLink to="about">About</FooterLink>                          
                    </FooterLinkItems>

                    <FooterLinkItems>
                            <FooterLink to="hello smile">Hello Smile</FooterLink>                          
                    </FooterLinkItems>

                    <FooterLinkItems>
                            <FooterLink to="steps">Steps</FooterLink>                          
                    </FooterLinkItems>

                    <FooterLinkItems>
                            <FooterLink to="steps2">Social</FooterLink>                          
                    </FooterLinkItems>

                    <FooterLinkItems>
                            <FooterLink to="contact">Help</FooterLink>                          
                    </FooterLinkItems>

                    <FooterLinkItems>
                            <FooterLink to="steps3">Top Videos</FooterLink>                          
                    </FooterLinkItems>

                    <FooterLinkItems>
                            <FooterLink to="/donation">Contact Us</FooterLink>                          
                    </FooterLinkItems>

                    

                    
                </FooterLinksWrapper>
            </FooterLinksContainer> */}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'> Smile <i class="fa-solid fa-hand-holding-heart"></i>
                    </SocialLogo>
                        <WebsiteRights>Smile © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                        </SocialIconLink>

                        <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                        </SocialIconLink>

                        <SocialIconLink href="//www.linkedin.com/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                        </SocialIconLink>

                        <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                        </SocialIconLink>
                        </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>

      
    </FooterContainer>
  )
}

export default Footer
