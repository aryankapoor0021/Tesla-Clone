import React from 'react'
import styled from "styled-components";
import Section  from "./Section"

function Home() {
	return (
		<Container>
	      <Section
	         title="Model 3"
	         desc="Order Online for Touchless Delivery"
	         bgImg="model-3.jpg"
	         ltext="Custom Order"
	         rtext="Existing Inventory"
	      />
	      <Section
	         title="Model Y"
	         desc="Order Online for Touchless Delivery"
	         bgImg="model-y.jpg"
	         ltext="Custom Order"
	         rtext="Existing Inventory"
	      />
	      <Section
	         title="Model S"
	         desc="Order Online for Touchless Delivery"
	         bgImg="model-s.jpg"
	         ltext="Custom Order"
	         rtext="Existing Inventory"
	      />
	      <Section
	         title="Model X"
	         desc="Order Online for Touchless Delivery"
	         bgImg="model-x.jpg"
	         ltext="Custom Order"
	         rtext="Existing Inventory"
	      />
	      <Section
	         title="Lowest Cost Solar Panels in America"
	         desc="Money-back guarantee"
	         bgImg="solar-panel.jpg"
	         ltext="Order Now"
	         rtext="Learn More"
	      />
	      <Section
	         title="Solar for New Roofs"
	         desc="Solar Roof Costs Less than a new Roof"
	         bgImg="solar-roof.jpg"
	         ltext="Order Now"
	         rtext="Learn More"
	      />
	      <Section
	         title="Accessories"
	         desc=""
	         bgImg="accessories.jpg"
	         ltext="Shop Now"
	      />

	      
	      


		</Container>
	)
}

export default Home;

const Container=styled.div`
	height: 100vh;


`