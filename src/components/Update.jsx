import React, { useContext, useState } from "react";
import { recipeData } from "../contexts/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'

const Update = () => {
  const param = useParams()
  const navigate = useNavigate()
  const [recipe, setrecipe] = useContext(recipeData);
  const newdet = recipe && recipe.find((r) => r.id == param.id);

  const [image, setimage] = useState(newdet.image);
  const [name, setname] = useState(newdet.name);
  const [description, setdescription] = useState(newdet.description);
  const [ingredients, setingredients] = useState(newdet.ingredients);
  const [instructions, setinstructions] = useState(newdet.instructions);

  const updateHandler = (e)=>{
    e.preventDefault()
    const newRecipe = {
      id: param.id,
      image,
      name,
      description,
      ingredients,
      instructions
    }
    const copyRecipe = [...recipe]
    const recipeindex = recipe && recipe.findIndex((r) => r.id == param.id);
    copyRecipe[recipeindex] = newRecipe
    localStorage.setItem("recipe",JSON.stringify(copyRecipe))
    toast.success("Recipe updated Sucessfully..")
    navigate('/recipe')
  } 

  return (
    <div className=" h-[85vh] m w-full rounded-md p-5 mt-24 font-medium">
      <h1 className="text-5xl text-zinc-200 text-outline text-center capitalize underline outline-dotted w-fit mx-auto p-2  font-extrabold">
        Update your recipe
      </h1>
      <div className=" flex flex-wrap">
        <div className="w-2/3 m-auto rounded-md mt-8 bg-slate-200/90 ">
          <form onSubmit={updateHandler} className="flex flex-col p-5 gap-4 outline-dotted" action="">
            <input
              onChange={(e) => setimage(e.target.value)}
              value={image}
              type="text"
              className="w-full border rounded-md px-6 py-3 text-lg mb-5"
              placeholder="Recipe Image url.."
            />
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
              className="w-full border rounded-md px-6 py-3 text-lg mb-5"
              placeholder="Recipe Name"
            />

            <textarea
              onChange={(e) => setdescription(e.target.value)}
              value={description}
              className="w-full border rounded-md px-6 py-3 text-lg mb-5"
              placeholder="recipe description..."
            ></textarea>
            <textarea
              onChange={(e) => setingredients(e.target.value)}
              value={ingredients}
              className="w-full border rounded-md px-6 py-3 text-lg mb-5"
              placeholder="recipe ingredients -> 'use comma to seperate instructions'..."
            ></textarea>
            <textarea
              onChange={(e) => setinstructions(e.target.value)}
              value={instructions}
              className="w-full border rounded-md px-6 py-3 text-lg mb-5"
              placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <button className="bg-zinc-700 text-white border-spacing-1 w-fit mx-auto p-2 rounded-md">
              {" "}
              Publish Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
