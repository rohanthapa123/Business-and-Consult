import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import LandingComponent from '../Components/LandingComponent'
import { PricingTestimonial, cost_services, price, pricing, relationshipGuide, salesresult } from '../constants'
import PricesCard from '../Components/PricesCard/PricesCard'
import Testimonial from '../Components/Testimonial/Testimonial'
import SalesResult from '../Components/SalesResult/SalesResult'
import WhyChooseUsTemplate from '../Components/WhyChooseUsTemplate/WhyChooseUsTemplate'
import HeroSession3 from '../Components/HeroSession3/HeroSession3'

const Pricing = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <LandingComponent data={price.one} />
    <WhyChooseUsTemplate data={cost_services} theme={"dark"} />
    <HeroSession3 data={relationshipGuide} theme={"light"} col={"1"} />
    <LandingComponent data={price.two} />
    <Testimonial title={PricingTestimonial.title} data={PricingTestimonial.cardDetail} isPrice={true}/>
    <SalesResult data={salesresult}/>
    <PricesCard data={pricing} />
    <FooterComponent/>
    </>
  )
}

export default Pricing