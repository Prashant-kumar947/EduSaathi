import React from 'react'
import Hero from '../../components/student/Hero'
import HeroCorousel from '../../components/student/HeroCorousel'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flec flex-col items-center space-y-7 text-center'>
      {/* <HeroCorousel/> */}
      <Hero/>
      <Companies/>
      <CourseSection/>
      <TestimonialsSection/>
      <CallToAction/>
      <Footer/>
      </div>
  )
}

export default Home