import AirportTransfers from '@/components/AirportTransfers'
import ContactSection from '@/components/ContactSection'
import TaxiBookingHero from '@/components/Hero'
import PopularRoutes from '@/components/PopularRoutes'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <TaxiBookingHero/>
              <AirportTransfers/>
              <PopularRoutes/>
              <ContactSection/>
              <Testimonials/>
    </div>
  )
}

export default page