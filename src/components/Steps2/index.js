import React from 'react'
import Icon1 from '../../images/Tweet1.png';
import Icon2 from '../../images/Tweet3.png';
import Icon3 from '../../images/TweetN.png';
import Icon4 from '../../images/TweetN2.png';

import { Steps2Container, Steps2H1, Steps2Wrapper, Steps2Card, Steps2Icon,
      Steps2P} from './Steps2Elements'
      import {FaTwitter} from 'react-icons/fa';

const Steps2 = () => {
  return (
    <Steps2Container  id="steps2"> 
        <Steps2H1> Social Awareness <FaTwitter/></Steps2H1> 
    {/* <Steps2P>According to the statistics about 1.3 billion tonnes of food is wasted in a day around the world. Climate crisis have been hugely affected by the wastage of food and which has led to other imperative problems like hunger and poverty around the globe.  
                </Steps2P> */}
        <Steps2Wrapper>
            <Steps2Card>
                <Steps2Icon src={Icon1} onClick={()=> window.open("https://twitter.com/FAO/status/1496439945975644162", "_blank")}/>
                <Steps2P onClick={()=> window.open("https://twitter.com/FAO/status/1496439945975644162", "_blank")}> Click to read more!
                </Steps2P>
            </Steps2Card>
           
            <Steps2Card>
                <Steps2Icon src={Icon2} onClick={()=> window.open("https://twitter.com/StreetCSG/status/1250414597447626753", "_blank")}/>
                <Steps2P onClick={()=> window.open("https://twitter.com/StreetCSG/status/1250414597447626753", "_blank")}> Click to read more!
                </Steps2P>
            </Steps2Card>

            <Steps2Card>
                <Steps2Icon src={Icon3} onClick={()=> window.open("https://twitter.com/khaleejtimes/status/1125673601401786369", "_blank")}/>
                <Steps2P onClick={()=> window.open("https://twitter.com/khaleejtimes/status/1125673601401786369", "_blank")}> Click to read more!
                </Steps2P>
            </Steps2Card>

            <Steps2Card>
                <Steps2Icon src={Icon4} onClick={()=> window.open("https://twitter.com/Africanwomeni10/status/1519585638063951874", "_blank")}/>
                <Steps2P onClick={()=> window.open("https://twitter.com/Africanwomeni10/status/1519585638063951874", "_blank")}> Click to read more!
                </Steps2P>
            </Steps2Card>
            
            
        </Steps2Wrapper>
       

      
    </Steps2Container>

  )
}

export default Steps2
