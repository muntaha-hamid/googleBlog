import React from 'react'



function NavBar() {
    return (
    <div className='flex align-top'>
     <img src="/Google-Logo.png" className="my-1 h-10 px-4"/>
    <div className='my-1 px-6 h-10 text-gray-500 text-2xl'>The Keyword</div>
    <div className='my-2 px-6 h-8 text-gray-500 text-xm'>
    <a className='px-4'>Latest Stories</a>
    <a className='px-2'>Product Updates</a>
    <a className='px-2'>Company News</a>
    </div>
    <button className='justify-end'></button>
   </div>
    );
}

export default NavBar;