import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur minima, nulla blanditiis iste maxime. Error harum qui ut vel, dolores quisquam quod temporibus unde animi assumenda voluptates perferendis dicta.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aut officiis dicta amet corporis eligendi quod non odit nesciunt nisi!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex amet officiis, voluptatem consectetur laborum sequi nam cupiditate reiciendis repudiandae rerum nulla delectus. Rerum labore temporibus magnam, eos ullam nobis!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam cupiditate quod, libero sit debitis perferendis eligendi. Ipsa exercitationem, cumque in labore totam odit architecto, officiis nihil eum laboriosam ullam.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam cupiditate quod, libero sit debitis perferendis eligendi. Ipsa exercitationem, cumque in labore totam odit architecto, officiis nihil eum laboriosam ullam.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam cupiditate quod, libero sit debitis perferendis eligendi. Ipsa exercitationem, cumque in labore totam odit architecto, officiis nihil eum laboriosam ullam.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About