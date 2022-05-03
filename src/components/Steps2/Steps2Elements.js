import styled from 'styled-components'

export const Steps2Container = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #1DA1F2;

@media screen and (max-width: 768px) {
    height: 1800px;
}
@media screen and (max-width: 480px) {
        height: 1800px;
}
`

export const Steps2Wrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr; 
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
export const Steps2Card = styled.div`
background: #ffffff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 400px;
max-width: 220px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0.2);
transition: all 0.2 ease-in-out;

&hover{
    transform scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const Steps2Icon = styled.img`
height: 300px;
width: 210px;
margin-bottom: 10px;
`
export const Steps2Icon2 = styled.img`
height: 90px;
width: 90px;
margin-bottom: 80px;
margin-top: 40px;
`


export const Steps2H1 = styled.h1`
font-size: 2.5rem;
color: #ffffff;
margin-bottom: 64px;
font-weight: bold;

@media screen and (max-width: 480px) {
    font-size:2rem;
}
`
export const Steps2H2 = styled.h2`
font-size:1.5rem;
margin-bottom:10px;
color: #fff;
`
export const Steps2H3 = styled.h2`
font-size:1.5rem;
margin-bottom:10px;
margin-top: -40px;
color: #fff;
`
export const Steps2P = styled.p `
font-size: 0.9rem;
text-align: center;
font-weight: 550;

color: #1DA1F2;

&hover{
    transform scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

`