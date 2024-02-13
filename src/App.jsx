import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  return (
    <>


      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>


      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full' 
          onClick={()=>setColor('red')} 
          style={{backgroundColor:'red'}}
          >Red</button>

          <button className='outline-none px-4 py-1 rounded-full'  
          style={{backgroundColor:'blue'}}
          onClick={()=>setColor('blue')} 
          >Blue</button>

          <button className='outline-none px-4 py-1 rounded-full'  
          style={{backgroundColor:'green'}}
          onClick={()=>setColor('green')} 
          >Green</button>

          <button className='outline-none px-4 py-1 rounded-full text-white'  
          style={{backgroundColor:'black'}}
          onClick={()=>setColor('black')} 
          >Black</button>

          <button className='outline-none px-4 py-1 rounded-full'  
          style={{backgroundColor:'yellow'}}
          onClick={()=>setColor('orange')} 
          >Yellow</button>

         

        </div>
      </div>
      </div>
    </>
  )
}

export default App
