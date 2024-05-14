import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const {
        id, 
        image,
        name,
        description,
        ingredients,
        instructions,} = props.recipe
  return (
    
        <Link to={`/recipe/${id}`}>
          <div className='bg-white/40 rounded-md h-[35vh] w-[30vh] p-2 hover:scale-110 transition-all'>
          <img className='rounded-md h-4/5 w-full  object-cover object-center ' src={image} alt="" />
          <h1>Recipe : {name}</h1>
          <h3>description : {description}</h3>

        </div>
        </Link>
  )
}

export default Card