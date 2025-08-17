import { Facebook, FacebookIcon, Instagram, InstagramIcon, MenuIcon, MenuSquareIcon, PlusIcon, SquareMenuIcon, Twitter, TwitterIcon, X } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-black'>
        <nav className=' w-full h-[7rem] z-[20] bg-black flex items-center justify-between px-4'>
            <MenuIcon color='white' size={38}strokeWidth={1} />
            <img src="/images/LOGO.png" alt="Your Logo" className="w-24 h-11 rotate-animation-two z-10" />
            <div className='border-white border-[1px] px-2 py-1 text-white rounded-sm'>
                English

            </div>


        </nav>
        <div className="w-full flex justify-center items-center relative">
            <video autoPlay muted loop src='https://cdn.shopify.com/videos/c/o/v/a0d3edff4fe846eca7ebe76c9c43858a.mp4' className='object-cover h-[90vh] w-full z-20 relative'/>
            <div className="flex flex-col gap-2 absolute top-1/4 left-1/2">
                <button className="group overflow-hidden bg-white text-black px-6 py-3 font-semibold relative z-30 rounded-sm w-72  -translate-x-1/2">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 rounded-sm text-xl">
                    SHOP
                  </span>
                
                  {/* sliding layer */}
                  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>
                <button className="group overflow-hidden bg-white text-black px-6 py-3 font-semibold relative z-30 rounded-sm w-72  -translate-x-1/2">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 rounded-sm text-xl">
                    CONTACT
                  </span>
                
                  {/* sliding layer */}
                  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>
                <button className="group overflow-hidden bg-white text-black px-6 py-3 font-semibold relative z-30 rounded-sm w-72  -translate-x-1/2">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 rounded-sm text-xl">
                    LOOKBOOK
                  </span>
                
                  {/* sliding layer */}
                  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>
                <div className="flex gap-3 z-30 justify-center -translate-x-1/2">
                    <div className="rounded-full p-3 bg-black">
                        <InstagramIcon color='white'/>
                        

                    </div>
                    <div className="rounded-full p-3 bg-black">
                        <FacebookIcon color='white' />
                    </div>
                    <div className="rounded-full p-3 bg-black">
                        <TwitterIcon color='white' />
                    </div>
                </div>
                <div className=" flex justify-center z-30 text-lg text-white -translate-x-1/2 font-sans text-nowrap">
                    <p>&#169; 2025 Gorba clothing. All rights reserved</p>
                </div>



            </div>
        </div>
        <div className="view bg-black text-white flex flex-wrap gap-8 py-10 px-4 text-xl font-sans font-semibold items-center">
            <div className="blocks">
                <p>At SZNX, we craft bold and unique clothing for those who dare to stand out. From edgy designs to premium quality, we bring individuality to life. Stay unique, stay confident with Gorba.</p>

            </div>
            <div className="blocks w-full px-2">
                <div className="border-b-[1px] border-white flex items-center justify-between text-2xl font-bold py-3 px-1 mt-2">
                    <p>Shop</p>
                    <PlusIcon className='translate-y-2' />
                </div>
                <div className=" border-b-[1px] border-white flex items-center justify-between text-2xl font-bold py-3 px-1 mt-2">
                    <p>Further Info</p>
                    <PlusIcon className='translate-y-2' />
                </div>
                <div className="border-b-[1px] border-white flex items-center justify-between text-2xl font-bold py-3 px-1 mt-2">
                    <p>Customer Service</p>
                    <PlusIcon className='translate-y-2' />
                </div>
            </div>
            <div className="blocks w-full px-4 flex flex-col gap-5">
                <h2 className='text-2xl font-sans font-semibold'>Newsletter Sign Up</h2>
                <p className='text-lg font-sans'>Receive our latest updates about our products & promotions.</p>
                <div className="w-full flex gap-1">
                    <input className="w-[60%] bg-[#26262B] px-4 py-2 rounded-sm" placeholder='Email Address'/>
                        

                    <div className="bg-black w-[40%] border-white border-[1px] text-xl font-sans font-semibold flex justify-center px-4 py-2 rounded-sm">
                        SUBSCRIBE

                    </div>
                </div>

            </div>
            <div className="blocks w-full text-lg">
                © 2025, Gorba Clothings. All rights reserved. Developed By Seventh Day Media & Solutions
            </div>
            <div className="h-24"></div>


        </div>

    </div>
  )
}

export default HomePage