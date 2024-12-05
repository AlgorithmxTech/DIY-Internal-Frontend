import React from 'react'
import img from '../../../assets/images/Rectangle 24.png'

const Hero: React.FC = () => {
    return (
        <div className='w-full relative h-[602px]'>
            <img src={img} className='w-full h-full absolute inset-0' />

            <div className='max-w-[1280px] justify-center h-full mx-auto flex flex-col items-center dark:text-white'>

                <h4 className='font-bold'>LOREM  IPSUM DOLOR</h4>
                <h1 className='text-center sm:p-2  mt-3'>
                    Lorem ipsum <span className='bg-blueDark font-bold px-2 rounded-xl'>dolor sit amet</span>, <br />
                    consectetur adipiscing elit. <br />
                    eget felis quis elit facilisis venenatis
                </h1>
                <div className='flex gap-10 md:flex-row mt-5 flex-col'>
                    <a className='px-9 py-2 text-xl bg-blueDark font-bold text-white rounded-xl'>
                        Get Started
                    </a>

                    <a className='px-9 py-2 text-xl bg-blueLight font-bold text-white rounded-xl'>
                        Learn More
                    </a>

                </div>

            </div>

        </div>
    )
}

export default Hero
