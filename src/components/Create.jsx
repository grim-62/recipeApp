import { useContext,useState } from 'react'
import {recipeData} from '../contexts/RecipeContext'
import {nanoid} from 'nanoid';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [recipe, setrecipe] = useContext(recipeData);
  const navigate = useNavigate()
  
  const [image, setimage] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [ingredients, setingredients] = useState();
  const [instructions, setinstructions] = useState();

  const submitHandler = (e)=>{
    e.preventDefault();
    const newRecipe = {
      id: nanoid(),
      image,
      name,
      description,
      ingredients,
      instructions
    }
    setrecipe([...recipe,newRecipe]);
    console.log(recipe);
    localStorage.setItem("recipe",JSON.stringify([...recipe,newRecipe]))
    toast.success("Recipe Created Successfully..")
    navigate('/recipe')
  }


  


  return (
    <div className=' h-[85vh] m w-full rounded-md p-5 mt-24 font-medium'>
      <h1 className='text-5xl text-zinc-200 text-outline text-center capitalize underline outline-dotted w-fit mx-auto p-2  font-extrabold'>create your recipe</h1>
      <div className=' flex flex-wrap'>

        <div className='w-2/3 m-auto rounded-md mt-8 bg-slate-200/90 '>
          <form onSubmit={submitHandler} className='flex flex-col p-5 gap-4 outline-dotted' action="">
        
            <input onChange={(e)=> setimage(e.target.value)} value={image} type="text" className="w-full border rounded-md px-6 py-3 text-lg mb-5" placeholder="Recipe Image url.." />
            <input onChange={(e)=> setname(e.target.value)} value={name} type="text" className="w-full border rounded-md px-6 py-3 text-lg mb-5" placeholder="Recipe Name" />
       
            <textarea onChange={(e)=> setdescription(e.target.value)} value={description} className="w-full border rounded-md px-6 py-3 text-lg mb-5" placeholder="recipe description..."></textarea>
            <textarea onChange={(e)=> setingredients(e.target.value)} value={ingredients} className="w-full border rounded-md px-6 py-3 text-lg mb-5" placeholder="recipe ingredients -> 'use comma to seperate instructions'..."></textarea>
            <textarea onChange={(e)=> setinstructions(e.target.value)} value={instructions} className="w-full border rounded-md px-6 py-3 text-lg mb-5" placeholder="recipe instructions -> 'use comma to seperate instructions'..."></textarea>
          <button className='bg-zinc-700 text-white border-spacing-1 w-fit mx-auto p-2 rounded-md'> Publish Recipe</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Create