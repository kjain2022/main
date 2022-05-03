import React from 'react'
import { ImgWrap } from './InfoElements'
import { Button } from '../ButtonElements';
import { Button2 } from '../ButtonElements2';
import LinkButton from '../../components/LinkButton'
import {NavBtnLink}
   from '../Navbar/NavbarElements'

import {InfoContainer, InfoWrapper,
     InfoRow, Column1, Column2, TextWrapper, TopLine, TopLine2, Heading, Subtitle,Subtitle2,
BtnWrap, Img} from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, topLine2, lightText, headline, darkText, description,description2,
buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart ={imgStart}>
                <Column1>
                <TextWrapper>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <TopLine>{topLine}</TopLine>
                    <TopLine2>{topLine2}</TopLine2>
                    <Subtitle darkText = {darkText}>{description}</Subtitle>
                    <Subtitle2 darkText = {darkText}>{description2}</Subtitle2>
                    <BtnWrap>
                        <NavBtnLink to="/contact">Contact Us</NavBtnLink>
                    </BtnWrap>
                   
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
      
    </>
  )
}

export default InfoSection
