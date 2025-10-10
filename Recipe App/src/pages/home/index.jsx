import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context';
import RecipeItem from '../../components/recipeItem';

const Home = () => {
  const { loading, error, recipeList } = useContext(GlobalContext);

  console.log('recipeList:', recipeList);

  if (loading) return <h2>Loading data ... Please wait!</h2>;
  if (error) return <h2>Error occured. Please try again.</h2>;
  console.log('Loading recipe items...');

  return (
    <div>
      {/* <h2 className="text-3xl">Home</h2> */}
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {recipeList &&
          recipeList.length > 0 &&
          recipeList.map((recipe) => (
            <RecipeItem key={recipe?.id} recipeInfo={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Home;
