import React from 'react'
import Icon1 from '../../images/YTG1.gif';
import Icon2 from '../../images/YTG2.gif';
import Icon3 from '../../images/YTG3.gif';
import Icon4 from '../../images/YTG4.gif';

import { Steps3Container, Steps3H1, Steps3Wrapper, Steps3Card, Steps3Icon,
      Steps3P} from './Steps3Elements'
      import {FaYoutube} from 'react-icons/fa';

const Steps3 = () => {
  return (
    <Steps3Container  id="steps3"> 
        <Steps3H1>Connecting With Social Issues <i class="fa-solid fa-video"></i></Steps3H1>
    {/* <Steps3P>According to the statistics about 1.3 billion tonnes of food is wasted in a day around the world. Climate crisis have been hugely affected by the wastage of food and which has led to other imperative problems like hunger and poverty around the globe.  
                </Steps3P> */}
        <Steps3Wrapper>
            <Steps3Card>
                <Steps3Icon autoPlay src={Icon1} onClick={()=> window.open("https://www.youtube.com/watch?v=KpD3joneuwY", "_blank")}/>
                <Steps3P onClick={()=> window.open("https://www.youtube.com/watch?v=KpD3joneuwY", "_blank")}> <FaYoutube/>
                </Steps3P>
            </Steps3Card>
           
            <Steps3Card>
                <Steps3Icon src={Icon3} onClick={()=> window.open("https://www.youtube.com/watch?v=i2dkZD4Kh5g", "_blank")}/>
                <Steps3P onClick={()=> window.open("https://www.youtube.com/watch?v=i2dkZD4Kh5g", "_blank")}> <FaYoutube/>
                </Steps3P>
            </Steps3Card>

            <Steps3Card>
                <Steps3Icon src={Icon4} onClick={()=> window.open("https://www.youtube.com/watch?v=ccR2zK6yn8o", "_blank")}/> 
                <Steps3P onClick={()=> window.open("https://www.youtube.com/watch?v=ccR2zK6yn8o", "_blank")}> <FaYoutube/>
                </Steps3P>
            </Steps3Card>

            <Steps3Card>
                <Steps3Icon src={Icon2} onClick={()=> window.open("https://youtu.be/2I8Tjb4Fy-Q", "_blank")}/>
                <Steps3P onClick={()=> window.open("https://youtu.be/2I8Tjb4Fy-Q", "_blank")}> <FaYoutube/>
                </Steps3P>
            </Steps3Card>
            
            
        </Steps3Wrapper>
       

      
    </Steps3Container>

  )
}

export default Steps3
