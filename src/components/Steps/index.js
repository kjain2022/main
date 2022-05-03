import React from 'react'
import Icon1 from '../../videos/click.gif';
import Icon2 from '../../videos/form.gif';
import Icon3 from '../../videos/pack.gif';
import { StepsContainer, StepsH1, StepsWrapper, StepsCard, StepsIcon, StepsIcon2, StepsH3,
     StepsH2, StepsP } from './StepsElements'

const Steps = () => {
  return (
    <StepsContainer id="steps">
        <StepsH1> Steps to Donate! </StepsH1>
        <StepsWrapper> 
            <StepsCard> 
                <StepsIcon src={Icon1}/> 
                <StepsH2>Click</StepsH2>
                <StepsP> Click on the "Donate Now" button from the navigation menu.
                </StepsP>
            </StepsCard>

            <StepsCard>
                <StepsIcon2 src={Icon2}/>
                <StepsH3>Fill</StepsH3>
                <StepsP> Fill the donation form with relevant information.
                </StepsP>
            </StepsCard>

            <StepsCard>
                <StepsIcon src={Icon3}/>
                <StepsH2>Pack</StepsH2>
                <StepsP> Pack your items and handover to our pickup driver.
                </StepsP>
            </StepsCard>
            
        </StepsWrapper>

      
    </StepsContainer>
  )
}

export default Steps
