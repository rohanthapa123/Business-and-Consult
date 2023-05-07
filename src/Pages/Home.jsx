import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import Subscribe from '../Components/Subscribe/Subscribe'
import LandingComponent from '../Components/LandingComponent'
import { homeData, homeDataTwo, home_whyChooseUs, testimonial } from '../constants'
import Testimonial from '../Components/Testimonial/Testimonial'
import WhyChooseUsTemplate from '../Components/WhyChooseUsTemplate/WhyChooseUsTemplate'
const Home = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <LandingComponent data={homeData} />
    <LandingComponent data={homeDataTwo} reverse={true} />
    <WhyChooseUsTemplate data={home_whyChooseUs} theme={"light"} />
    <Testimonial title={testimonial.title} data={testimonial.cardDetail}/>
    <Subscribe/>
    <FooterComponent/>
    </>
  )
}

export default Home