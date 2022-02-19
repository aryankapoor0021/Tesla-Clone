import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';



function Section({title,desc,bgImg,ltext,rtext}) {
	return (
		<Wrap bgImg={bgImg}>
		<Fade bottom>
		  <ItemText>
			<h1>{title}</h1>
			<p>{desc}</p>
		  </ItemText>
		</Fade>
		  <Buttons>
		   <Fade bottom>
			<ButtonGroup>
		    	<LeftButton>
			        {ltext}
			    </LeftButton>
			    {
			    	rtext && 
			    	<RightButton>
			           {rtext}
			        </RightButton>
			    }
		    </ButtonGroup>
		   </Fade>
		    <center>
		       <DownArrow src="/images/down-arrow.svg"/>
		    </center>	
		  </Buttons>
		
		</Wrap>
		
	)
}

export default Section

const Wrap=styled.div`
    z-index: 10;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
	width:100vw;
	height:100vh;
	background-size:cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image:${props => `url("/images/${props.bgImg}")`};
`

const ItemText=styled.div`
    z-index: -1;
	padding-top:15vh;
	text-align:center;
`

const Buttons=styled.div`
	
`

const ButtonGroup=styled.div`
	display: flex;
	margin-bottom: 30px;
    @media (max-width: 760px){
    	flex-direction:column;
    }
`
const LeftButton=styled.div`
	background-color: rgba(23,26,32,0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius:100px;
	opacity: 0.85;
	text-transform:uppercase;
	font-size:12px;
	cursor: pointer;
	margin: 8px;
`
const RightButton=styled(LeftButton)`
	background-color: white;
	opacity: 0.65;
	color:black;
`
const DownArrow=styled.img`
   // margin-left: 50%;
	margin-top: 20px;
	overflow-x: hidden;
	height: 40px;
	animation: animateDown infinite 1.5s;
`