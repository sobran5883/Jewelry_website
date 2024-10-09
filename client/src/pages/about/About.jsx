import Profile from '../../assets/profile.png'
export default function Home(){
    return(
        <div className='w-full flex flex-col items-center'>
            <div className=' w-full flex flex-col items-center justify-center'>
                <div className="relative w-full flex items-center justify-center">
                    <div className='w-full h-[150px] md:h-[200px] bg-[#1D1B1B]'>
                    </div>
                    <div className='absolute'>
                        <h1 className='text-white font-inter font-medium text-xl md:text-5xl'>About Us</h1>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mt-12'>
                <div className='my-4'>
                    <div>
                      <div className='relative my-2 w-fit'>
                         <div>
                              <h1 className='font-rubik text-xl md:text-2xl font-semibold'>Meet Our Team</h1>
                         </div>
                         <div className='absolute w-[80%] h-[3px] bg-deep-green -bottom-1 left-0'></div>
                      </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8'>
                    <div className='flex flex-col items-center justify-center'>
                        <a href="">
                            <img className='h-40 my-4 rounded-full border-2 border-light' src={Profile} alt="" />
                        </a>
                        <h1 className='text-deep-green text-lg md:text-xl font-semibold'>Pushkar Badri Sarraf</h1>
                        <h1 className='font-bold text-lg'>[CEO]</h1>
                        <p className='text-center md:w-10/12'>Our CEO is not just a leader but a visionary who brings a distinctive perspective to the development of our business. </p>
                    </div>

                </div>
            </div>
            <div className=' w-11/12 flex flex-col lg:flex-row items-center justify-center my-20'>
                <div className='w-full lg:w-6/12'>
                    <h1 className='tracking-widest text-xl md:text-3xl'>Get In <span className='font-bold'>Touch</span></h1>
                    <h1 className='text-2xl md:text-4xl font-extralight text-deep-green my-2'>Head Office</h1>
                    <h1 className='font-semibold md:text-lg'>BadriSarraf</h1>
                    <p className='w-11/12 md:text-xl font-light text-gray-700 '>M-16 Basement Gole Market,</p>
                    <p className='w-11/12 md:text-xl font-light text-gray-700 '>3/113 Vivek Khand Gomtinagar, Lucknow</p>
                </div>
                <div className='w-full lg:w-6/12'>
                <div className='my-4 flex items-center justify-center'>
                <iframe
                    className='border-0 lg:rounded-full lg:w-full h-[300px] lg:h-[600px]'
                    src="https://maps.google.com/maps?q=3%2F113+vivek+khand+gomtinagar+luknow&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    frameborder="0"
                    allowfullscreen aria-hidden="false"
                    tabIndex="0"
                    style={{border:'0'}}
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    > 
                    



                </iframe>
                </div>
                </div>
            </div>
        </div>
   )
}