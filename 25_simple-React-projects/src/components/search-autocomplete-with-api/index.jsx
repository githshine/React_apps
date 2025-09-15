import React, { useEffect, useState } from 'react';

const SearchAutoComplete = () => {
  const [isloading, setIsloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const [inputValue, setInputValue] = useState('');
  const [matchedUsers, setMatchedUsers] = useState([]);

  async function fetchUsers() {
    try {
      setIsloading(true);

      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      if (data) {
        console.log('fetched data:', data);
        console.log('users:', data.users);
        setUsers(data.users);
      }

      setIsloading(false);
    } catch (error) {
      console.log(error);
      setError(error);

      setIsloading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function handelOnChange(event) {
    const searchWords = event.target.value;
    setInputValue(searchWords);

    if (!searchWords || searchWords.trim() === '') {
      setMatchedUsers([]);
      return;
    }
    const filterUsers = users.filter((user) =>
      user.firstName.startsWith(searchWords)
    );
    console.log('filted users:', filterUsers);

    setMatchedUsers(filterUsers);
  }

  function handleClickOnMatchedItem(event) {
    const clickedUserName = event.target.textContent;
    console.log('test:', clickedUserName);
    setInputValue(clickedUserName);
    setMatchedUsers([]);
  }

  return (
    <div>
      <input
        name="search-user-name"
        placeholder="Search User Name here ..."
        onChange={(event) => handelOnChange(event)}
        value={inputValue}
      ></input>

      {isloading && <p>Data is Loading, please wait...</p>}
      {error && <p>Something wrong happed during data fetching...</p>}
      {matchedUsers && (
        <div>
          {/* map each result, show it in a p elements */}
          {matchedUsers.map((user, index) => {
            return (
              <p
                key={index}
                onClick={(event) => {
                  handleClickOnMatchedItem(event);
                }}
              >
                {user.firstName}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchAutoComplete;
