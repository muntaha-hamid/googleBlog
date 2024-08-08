import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass ,faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
function Body() {
return(
<>
<div className='flex row-auto -ml-8'>
<div className='overflow-hidden z-1 relative'>
    <img className='h-96 w-128 transform transition duration-500 hover:scale-105 ' src='1-1.webp'/>
</div>
<div className='flex-row'>
<div className='mt-10 ml-10 min-h-screen'>
<img className='h-52 w-80  rounded-lg transform transition duration-200 hover:scale-105'
 src='1-2.webp'/>
 <h1 className='flex justify-start mt-4 text-blue-800 text-sm font-semibold'>COMPANY ANNOUNCEMENTS</h1>
 <p className='flex justify-start text-xl text-left flex-wrap w-full max-w-md text-black '>
 4 ways Google will show up in <br />
      NCBUniversal's Olympics Games <br />
      Paris 2024 coverage
    </p>
</div>
<div className='-mt-48 ml-10 min-h-screen'>
<img className='h-52 w-80  rounded-lg transform transition duration-200 hover:scale-105'
 src='1-3.webp'/>
 <h1 className='flex justify-start mt-4 text-blue-800 text-sm font-semibold'>COMPANY ANNOUNCEMENTS</h1>
 <p className='flex justify-start text-xl text-left flex-wrap w-full max-w-md text-black '>
 5 tips for writing great prompts <br />
  for Gemini in the Workspace  <br />
 side panel
    </p>
    </div>
</div>
</div>
</>
 );
}
export default Body;