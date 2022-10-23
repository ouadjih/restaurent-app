import React from 'react'
import delivery from '../img/delivery.png'
import hero from '../img/heroBg.png'
import {heroData} from '../utils/data'
import i1 from '../img/i1.png'
import f1 from '../img/f1.png'
import c3 from '../img/c3.png'
import fi1 from '../img/fi1.png'

const HomeContainer = () => {

 const images = [i1,f1,c3,fi1]
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
       
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>Bike delivery</p>
          <div className='w-6 h-6  bg-white rounded-full overflow-hidden'>
            <img src={delivery} alt="delivery" className="w-full h-full object-contain"/>
          </div>
        </div>
        <p className='text-[2.5rem]  md:text-[4rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in {""}
          <span className='text-orange-500 text-[3rem] md:text-[4.5rem]'>Algeria</span>
        </p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe excepturi ut magni, libero praesentium sit quae maxime, ipsa deserunt error pariatur, odio quaerat. Enim assumenda unde vitae perferendis. Labore, ex!</p>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 text-white w-full md:w-auto px-4 py-2 rounded  hover:shadow-lg transition-all ease-in-out" type='button'> Order Now !</button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src={hero} alt='hero-bg' className="ml-auto h-420  w-full lg:w-auto lg:h-650"/>

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heroData && heroData.map(e =>(
             
              <div key={e.id} className="lg:w-190 p-4 bg-cardOverlay backdrop:-blur-md rounded-md flex flex-col items-center justify-center ">
              <img src={i1} alt="i1" className='w-20 lg:w-40 -mt-5 lg:-mt-[20px]  ' />
              <p className=' text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{e.name}</p>
              <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{e.desc}</p>
              <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{e.price}</p>
            </div>
            
          ))}
          
        </div>
      </div>
    </section>
  )
}

export  default HomeContainer