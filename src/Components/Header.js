import React from 'react'

const Header = () => {
  return (
    <div className='bg-purple-50 flex justify-evenly'>
    <img
     className='h-20 my-3 p-1'
     alt='Logo' 
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHuBT5l4jI4lQPag_QAjFhVQnMfqdMGfjVQ&usqp=CAU'>
     </img>
     <h1 className='text-2xl  p-1 font-bold '>ToDo List</h1>

    </div>
  )
}

export default Header;