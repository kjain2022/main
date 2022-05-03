import styled from 'styled-components'

export const Steps3Container = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #1f1f21;

@media screen and (max-width: 768px) {
    height: 1300px;
}
@media screen and (max-width: 480px) {
        height: 1300px;
}
`

export const Steps3Wrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr; 
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr ;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr ;
    padding: 0 20px;
}
`
export const Steps3Card = styled.div`
background: #ffffff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 250px;
max-width: 330px;
padding: 30px;
box-shadow: 0 2px 3px rgba(0,0,0.2);
transition: all 0.2 ease-in-out;

&hover{
    transform scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;


    }
}
`
export const Steps3Icon = styled.img`
height: 230px;
width: 330px;
margin-top: -30px;
margin-bottom: 10px;
border-radius: 10px;
&hover{
    transform scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const Steps3Icon2 = styled.img`
height: 90px;
width: 90px;
margin-bottom: 80px;
margin-top: 40px;
`


export const Steps3H1 = styled.h1`
font-size: 2.5rem;
color: #ffffff;
margin-bottom: 64px;
font-weight: bold;

@media screen and (max-width: 480px) {
    font-size:2rem;
}
`
export const Steps3H2 = styled.h2`
font-size:1.5rem;
margin-bottom:10px;
color: #fff;
`
export const Steps3H3 = styled.h2`
font-size:1.5rem;
margin-bottom:10px;
margin-top: -40px;
color: #fff;
`
export const Steps3P = styled.p `
font-size: 1.8rem;
text-align: center;
font-weight: 550;
margin-bottom: -30px;

color: #FF0000;

`