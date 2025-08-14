import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about_img" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Famazon is your one-stop destination for everything you need — from daily essentials to exciting new finds. We believe shopping should be easy, fast, and fun, so we bring quality products, great deals, and reliable delivery right to your doorstep. Our mission is simple: to make your shopping experience as smooth as possible, every time.</p>
          <p>At Famazon, we’re redefining the way you shop online. With a vast selection of products, trusted quality, and lightning-fast delivery, we bring the world’s marketplace to your fingertips. Whether it’s everyday essentials or unique treasures, we’re here to connect you with what you love — anytime, anywhere.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To make online shopping effortless, affordable, and enjoyable for everyone. At Famazon, we aim to connect people with the products they need and love, while delivering exceptional service that builds trust and satisfaction every time.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure every product meets our high standards for durability, safety, and performance, partnering only with trusted suppliers.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shop anytime, anywhere with quick search, secure payments, and fast doorstep delivery.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our friendly support team is here to help you quickly and professionally, every time you need us.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
