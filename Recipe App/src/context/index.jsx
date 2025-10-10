import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  async function fetchRecipeList(searchParam) {
    try {
      console.log('INto fetchdata func~, searchParam:', searchParam);

      setLoading(true);

      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      if (!response.ok) {
        setError(response.statusText);
        setLoading(false);
      }

      const data = await response.json();
      setRecipeList(data?.data?.recipes);
      setLoading(false);
      setError(null);
      setSearchParam('');
      navigate('/');
    } catch (e) {
      setError(e);
      setLoading(false);
      setSearchParam('');
    }
  }

  async function fetchRecipeDetails(id) {
    try {
      setLoading(true);

      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      if (!response.ok) {
        setError(response.statusText);
        setLoading(false);
      }

      const data = await response.json();

      setRecipeDetails(data?.data?.recipe);
      setLoading(false);
      setError(null);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipeList('apple');
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    fetchRecipeList(searchParam);
  }
  function handelGetRecipeDetails(id) {
    fetchRecipeDetails(id);
  }

  function handleAddOrRemoveToFavorites(currentItem) {
    const copyFavoritesList = [...favoritesList];
    const currentItemIndex = copyFavoritesList.findIndex(
      (item) => item.id === currentItem.id
    );
    if (currentItemIndex >= 0) copyFavoritesList.splice(currentItemIndex, 1);
    else copyFavoritesList.push(currentItem);

    setFavoritesList(copyFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        loading,
        error,
        recipeList,
        handleSubmit,
        recipeDetails,
        handelGetRecipeDetails,
        favoritesList,
        handleAddOrRemoveToFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
