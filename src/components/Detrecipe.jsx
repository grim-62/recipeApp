import React, { useContext, useState } from 'react'
import { NavLink,useNavigate,useParams } from 'react-router-dom'
import {recipeData} from '../contexts/RecipeContext'
import { toast } from 'react-toastify';

const Recipe = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [recipe, setrecipe] = useContext(recipeData)
  const detail = recipe.find((r) => r.id == param.id)

  const deleteHandler = ()=>{
    setrecipe(recipe.filter(r => r.id != param.id))
    localStorage.setItem("recipe",JSON.stringify(recipe.filter(r=> r.id != param.id)))
    toast.success("Recipe deleted successfully..")
    navigate('/recipe');
  }

  


  return detail ? (<div className=' bg-zinc-20
    0/30 min-h-[85vh] mt-20 w-[97%] rounded-md p-5 fixed'>
      
      <div className=' flex flex-wrap gap-6 '>

        <div className='bg-white/70 rounded-md h-[84vh] w-screen transition-all p-4'>
        <div className="details w-full flex min-h-[75vh] mt-3">
                <div className="dets  w-[48%] p-[3%] shadow-lg">
                    <img className="w-full h-[5 0%]  object-cover object-center  max-h-[50%] rounded-md" src={detail.image} alt="image" />
                    <h1 className="text-3xl font-semibold
                     mb-5 mt-[7%] text-center">
                        {detail.name}
                    </h1>
                    <p className="text-zinc-800 text-2xl text-center">{detail.description}</p>
                    <div className="flex justify-between py-10 px-5">
                      
                        <NavLink to={`/update/${param.id}`} className="text-black rounded-md border-black border py-2 px-5"> Update</NavLink>
                        <button onClick={deleteHandler} className="text-black rounded-md border-black border py-2 px-5"> delete</button>
                         
                      </div>
                </div>
                <div className="desc w-[48%] px-[3%] py-[3%] overflow-auto">
                    <h1 className="text-3xl border-b border-zinc-600 font-medium text-zinc-800">
                        Ingredients
                    </h1>
                    <ul className="text-zinc-600 list-disc  p-3 ">
                    {detail.ingredients.split(",").map((d, i) => (
                            <li className="list-item text-lg  text-zinc-800 mb-2" key={i}>{d}</li>)
                    )}
                    </ul>
                    <h1 className="text-3xl border-b border-zinc-600 font-medium text-zinc-800">
                        Instructions
                    </h1>
                    <ul className="text-zinc-600  list-decimal  p-3 ">
                        {detail.ingredients.split(',').map((d,i)=>
                          (<li className="list-item text-lg text-zinc-800 mb-2" key={i}>{d}</li>)
                        )}
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </div>
  ): (
    <h1 className="w-full text-center text-4xl text-white mt-10">
        Loading Recipe...
    </h1>
  )
}

export default Recipe