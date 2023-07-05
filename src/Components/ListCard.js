import React from 'react'

const ListCard = ({info,index}) => {
 console.log(index);
  const getDelete = ()=>{
    
  }
  return (
    <div className='flex flex-wrap '>
    {info.map((props,index)=>{
      {/* console.log(index); */}
      return(
        <div  key={index}
        className='w-96 h-60 bg-pink-50 my-5 border p-3 m-3 border-black shadow-xl'>
          <h1 className='text-3xl font-bold w-96 h-10 my-5 p-5'>Title : {props.title}</h1>
          <h1 className='text-xl w-96 h-30 my-5 p-5'> description : {props.description}</h1>
          <button onClick={()=>{getDelete()}}>Delete</button>
        </div>
      )
    })}
    </div>
  )
}

export default ListCard;


