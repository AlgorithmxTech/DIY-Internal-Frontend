import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../components/ui/landing/Hero'
import Unique from '../components/ui/landing/Unique'
import HowItWork from '../components/ui/landing/HowItWork'
import Testimonial from '../components/ui/landing/Testimonial'
import Pricing from '../components/ui/landing/Pricing'

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Unique />
      <HowItWork />
      <Testimonial />
      <Pricing />
    </Layout>
  )
}

export default LandingPage
