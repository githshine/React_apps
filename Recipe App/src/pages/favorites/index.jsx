import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context';
import RecipeItem from '../../components/recipeItem';

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);
  return (
    <div>
      {' '}
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {favoritesList &&
          favoritesList.length > 0 &&
          favoritesList.map((recipe) => (
            <RecipeItem key={recipe?.id} recipeInfo={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
