import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,
ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements';

const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
  setHover(!hover)
}

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type ='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1>WHAT IF</HeroH1>
          <HeroP>
            Nature returns all the food that we throw away?
          </HeroP>
          <HeroBtnWrapper>
            <Button to="about" onMouseEnter ={onHover} onMouseLeave={onHover} 
            primary = 'true' 
            dark='true'
            smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={0}>
              Learn More!{hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection;
