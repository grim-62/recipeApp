import React, { createContext, useState } from 'react'

export const recipeData = createContext(null);
const RecipeContext = (props) => {
    const [recipe, setrecipe] = useState([]);

  return (
    <recipeData.Provider value={[recipe, setrecipe]}>
        {props.children}
    </recipeData.Provider>
  )
}

export default RecipeContext