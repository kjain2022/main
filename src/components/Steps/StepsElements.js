import styled from 'styled-components'

export const StepsContainer = styled.div`
height: 650px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #f4d03f;

@media screen and (max-width: 768px) {
    height: 1100px;
}
@media screen and (max-width: 480px) {
        height: 1300px;
}
`
export const StepsWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr; 
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
export const StepsCard = styled.div`
background: #000000;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0.2);
transition: all 0.2 ease-in-out;

&hover{
    transform scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const StepsIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`
export const StepsIcon2 = styled.img`
height: 90px;
width: 90px;
margin-bottom: 80px;
margin-top: 40px;
`


export const StepsH1 = styled.h1`
font-size: 2.5rem;
color: #000000;
margin-bottom: 64px;
font-weight: bold;

@media screen and (max-width: 480px) {
    font-size:2rem;
}
`
export const StepsH2 = styled.h2`
font-size:1.5rem;
margin-bottom:10px;
color: #fff;
`
export const StepsH3 = styled.h2`
font-size:1.5rem;
margin-bottom:10px;
margin-top: -40px;
color: #fff;
`
export const StepsP = styled.p `
font-size: 0.9rem;
text-align: justify;
color: #f4d03f;

`