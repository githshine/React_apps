import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Details = () => {
  const { id } = useParams();

  const {
    recipeDetails,
    handelGetRecipeDetails,
    favoritesList,
    handleAddOrRemoveToFavorites,
  } = useContext(GlobalContext);

  useEffect(() => {
    handelGetRecipeDetails(id);
  }, [id]);

  // console.log('recipeDetails::', recipeDetails);
  console.log('favoritesList:', favoritesList);
  console.log('recipeDetails:', recipeDetails);
  console.log('id param:', id);

  console.log(
    'favoritesList.findIndex((item) => item.id === id) !== -1',
    favoritesList.findIndex((item) => item.id === id) !== -1
      ? 'Remove from Favorites'
      : 'Add to Favorites'
  );

  console.log(
    'Id that find in the list:',
    favoritesList.findIndex((item) => item.id === id)
  );

  return (
    <div>
      {recipeDetails && (
        <div className="flex gap-5">
          <div className="  w-2/5 justify-center items-center  overflow-hidden items-center rounded-xl">
            <img
              src={recipeDetails?.image_url}
              alt="recipe img"
              className="block w-full rounded-2xl"
            />
          </div>
          <div>
            <p className="m-2 text-lg text-cyan-700 font-medium">
              {recipeDetails.publisher}
            </p>
            <h3 className="font-bold text-2xl truncate text-black m-2">
              {recipeDetails?.title}
            </h3>
            <button
              onClick={() => handleAddOrRemoveToFavorites(recipeDetails)}
              className="uppercase text-2xl bg-black text-white px-4 py-3 rounded-lg shadow-md"
            >
              {/* 这段代码不行，是因为数组中的元素都是对象，不能直接比较对象是否相等，因为两个对象永远不会相等，就算对象的内容完全一致
              因为 对象每次都会新建，新建的每一个对象都会被分配到一个新的地址。在做比较时，结果就会 等于不想等 */}
              {/* {favoritesList &&
              favoritesList.length > 0 &&
              favoritesList.findIndexOf(recipeDetails) !== -1
                ? 'Remove from Favorites'
                : 'Add to Favorites'} */}

              {favoritesList &&
              favoritesList.length > 0 &&
              favoritesList.findIndex((item) => item.id === id) !== -1
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
            </button>
            <h4 className="m-2 mt-4 font-bold text-lg">
              Cooking time: {recipeDetails.cooking_time}
            </h4>
            <h3 className="font-bold text-3xl p-2 mt-5 mb-2">Ingredients:</h3>
            {recipeDetails.ingredients &&
              recipeDetails.ingredients.length &&
              recipeDetails.ingredients.map((ingredient, index) => (
                <ul key={index} className="">
                  <li>
                    <span className="font-bold text-2xl">
                      {ingredient.quantity}{' '}
                    </span>
                    <span className="">
                      {ingredient.unit} {ingredient.unit && '--'}{' '}
                    </span>
                    <span className="text-xl font-bold">
                      {' '}
                      {ingredient.description}
                    </span>
                  </li>
                </ul>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
