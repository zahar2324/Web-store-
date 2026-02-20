import { Button } from '@/components/ui/button'
import React from 'react'
import Hero from './components/Hero'
import TrustedBrands from './components/TrustedBrands'
import NewArrials from './components/NewArrials'
import PopularProducts from './components/PopularProducts'
import Banner from './components/Banner'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const Page = () => {
  return (
    <>
    <Hero/>
    <TrustedBrands/>
    <NewArrials/>
    <PopularProducts/>
    <Banner/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Page