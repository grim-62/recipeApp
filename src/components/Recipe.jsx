import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { recipeData } from '../contexts//RecipeContext';
import Card from './Card';


const Recipe = () => {
  const [recipes, setrecipes] = useContext(recipeData);

  useEffect(()=>{
    setrecipes(JSON.parse(localStorage.getItem("recipe")) || [])
  },[])


  return (
    <div className=' bg-zinc-20
    0/30 h-[85vh] m w-full rounded-md p-5 mt-20'>
      <div> 
        <NavLink className={'bg-slate-400 p-2 text-xl capitalize font-medium  rounded-full'} to={'/create'}>Create recipe</NavLink>
      </div>
      <div className=' flex flex-wrap gap-10 mt-6'>

        {recipes.length > 0 ? (
          recipes.map((e)=>(<Card key={e.id} recipe={e}/>))
        ) : (<h1 className="w-full text-white text-3xl font-extrabold text-center mt-1">no Recipe found...</h1>
        )}

      </div>
    </div>
  )
}

export default Recipe