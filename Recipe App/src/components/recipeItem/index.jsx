import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipeInfo }) => {
  return (
    <div className="flex flex-col w-70 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={recipeInfo?.image_url}
          alt="recipe img"
          className="block w-full "
        />
      </div>
      <div>
        <p className="text-sm text-cyan-700 font-medium">
          {recipeInfo.publisher}
        </p>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeInfo?.title}
        </h3>
        <Link
          to={`/recipe-item/${recipeInfo?.id}`}
          className="text-sm p-3 mt-5 ml-6 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
