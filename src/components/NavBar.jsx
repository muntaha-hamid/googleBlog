import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass ,faEllipsisVertical,faChevronDown} from '@fortawesome/free-solid-svg-icons'
function NavBar() {
    const[isOpen,setOpen]=useState(false);

    const toggleDropDown=()=>{
        if(isOpen==false)
        setOpen(true);
    else 
       setOpen(false)
    };

    return (
    <nav className='flex w-screen -ml-8 z-10 relative -mt-5 shadow-bottom-only'>
     <img src="Google-Logo.png" className="my-1 h-10 px-4 max-w-screen-xl"/>
    <div className='my-1 px-6 h-10 text-gray-500 text-2xl'>The Keyword</div>
    <div className='my-2 px-6 h-8 text-gray-500 text-sm'>
    <a className='px-4 dropdown relative inline-block'>Latest Stories  </a>
    <a onClick={toggleDropDown} className='px-2 dropdown-toggle bg-white border-none'>Product Updates 
        <FontAwesomeIcon icon={faChevronDown} /></a> 
    {isOpen && (
        <div className="dropdown-menu mt-8 flex absolute bg-white z-1 w-screen h-[50vh] overflow-auto -ml-80 ">
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'> Android, Chrome & Play</h4>
            <a className='block my-2' href="#option1-1">Android</a>
            <a className='block my-2' href="#option1-2">Chrome</a>
            <a className='block my-2' href="#option1-3">Chromebooks</a>
            <a className='block my-2' href="#option1-3"> Google Play</a>
            <a className='block my-2' href="#option1-3">Wear OS</a>
          </div>
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'>Devices & Services</h4>
            <a className='block my-2' href="#option2-1">Fitbit</a>
            <a className='block my-2' href="#option2-2">Google Nest</a>
            <a className='block my-2' href="#option2-3"> Pixel</a>
          </div>
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'>Explore & Get Answers</h4>
            <a className='block my-2' href="#option3-1">Gemini</a>
            <a className='block my-2' href="#option3-2">Maps</a>
            <a className='block my-2' href="#option3-3">News</a>
            <a className='block my-2' href="#option3-2">Search</a>
            <a className='block my-2' href="#option3-2">Shopping</a>

          </div>
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'>Connect & Communicate</h4>
            <a className='block my-2' href="#option4-1">Classroom</a>
            <a className='block my-2' href="#option4-2">Photos</a>
            <a className='block my-2' href="#option4-3">Translate</a>
          </div>
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'>In The Cloud</h4>
            <a className='block my-2' href="#option5-1">Google Workspace</a>
            <a className='block my-2' href="#option5-2">Google Cloud</a>
            <a className='block my-2' href="#option5-3">More on the Cloud Blog</a>
          </div>
        </div>
      )}

<a onClick={toggleDropDown} className='px-2 dropdown-toggle bg-white border-none'>Comapny News
        <FontAwesomeIcon icon={faChevronDown} /></a> 
    {isOpen && (
        <div className="dropdown-menu mt-8 flex absolute bg-white z-1 w-screen h-[50vh] overflow-auto -ml-80 ">
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'>Outreach & initiatives </h4>
            <a className='block my-2' href="#option1-1">Arts & Culture</a>
            <a className='block my-2' href="#option1-2">Education</a>
            <a className='block my-2' href="#option1-3">Entrepreneurs</a>
            <a className='block my-2' href="#option1-3"> Public Policy</a>
            <a className='block my-2' href="#option1-3">Sustainability</a>
          </div>
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'>Technology</h4>
            <a className='block my-2' href="#option2-1">AI</a>
            <a className='block my-2' href="#option2-2">Developers</a>
            <a className='block my-2' href="#option2-3"> Health</a>
            <a className='block my-2' href="#option2-3"> Google DeepMind</a>
            <a className='block my-2' href="#option2-3"> Safety and security</a>
          </div>
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'>Explore & Get Answers</h4>
            <a className='block my-2' href="#option3-1">Gemini</a>
            <a className='block my-2' href="#option3-2">Maps</a>
            <a className='block my-2' href="#option3-3">News</a>
            <a className='block my-2' href="#option3-2">Search</a>
            <a className='block my-2' href="#option3-2">Shopping</a>

          </div>
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'>Connect & Communicate</h4>
            <a className='block my-2' href="#option4-1">Classroom</a>
            <a className='block my-2' href="#option4-2">Photos</a>
            <a className='block my-2' href="#option4-3">Translate</a>
          </div>
          <div className="dropdown-column flex-1 px-2.5">
            <h4 className='mt-6 text-lg border-b-gray-1'>In The Cloud</h4>
            <a className='block my-2' href="#option5-1">Google Workspace</a>
            <a className='block my-2' href="#option5-2">Google Cloud</a>
            <a className='block my-2' href="#option5-3">More on the Cloud Blog</a>
          </div>
        </div>
      )}
    </div>
    <div className='flex ml-64'>
        <div className='text-gray-500 text-xl mr-8 my-1.5'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className='text-gray-500 text-xl mr-8 my-1.5 '>
        
        <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <div className='flex h-12 w-2 mb-4'>
    <button className='px-4 bg-blue-600 w-32 rounded-md text-white'>Subscribe</button>
    </div>
    </div>
   </nav>
    );
}

export default NavBar;