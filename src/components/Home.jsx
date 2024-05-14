import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-6xl text-center capitalize font-semibold mt-[160px] text-white'>Simple and Tasty Racipes</h1>
      <p className='w-[40%] text-white text-center mt-4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt in eos impedit alias, perspiciatis, assumenda distinctio esse facilis omnis maxime.</p>
      <button className='bg-white p-2 rounded-md mx-[50%] mt-5'>Lets_started..</button>

      <div className='rounded-lg p-2 mt-20'>
        <h1 className='capitalize font-semibold text-3xl pb-3  bg-black/50 w-fit text-white p-2 mb-5'>our recipes..</h1>
      <div className='flex gap-10 '>

        <div className='bg-white/40 rounded-md h-[35vh] w-[30vh] hover:scale-110 transition-all'>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Home