import React, { useEffect, useState } from 'react';
import UserCard from './user-card';
import './index.css';
import ErrorInfo from './error-info';

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState('githshine');
  const [isEmptyUserName, setIsEmptyUserName] = useState(false);
  const [userData, setUserData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  // const [isSearch, setIsSearch] = useState(false);

  async function getGithubData() {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    console.log('response:', res);

    const data = await res.json();
    console.log('date fetched from API:', data);

    if (res.status !== 200) {
      setFetchError({ message: data?.message, status: data?.status });
      setUserData(null);
      return;
    }

    // return data;
    setFetchError(null);
    setUserData(data);
    setUserName('');
  }

  useEffect(() => {
    // async function fetchData() {
    //   const githubData = await getGithubData();
    //   console.log('githubData:', githubData);

    //   setUserData(githubData);
    //   setUserName('');
    //   setIsSearch(false);
    // }

    // fetchData();
    getGithubData();
  }, []);

  function handleSubmit() {
    // debugger;
    if (!userName || userName.trim === '') {
      setIsEmptyUserName(true);
      setUserData(null);
      return;
    }

    setIsEmptyUserName(false);
    getGithubData();
  }

  return (
    <div className="github-profil-container">
      <input
        id="username"
        name="username-input"
        placeholder="Please type in the username you want to search."
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') handleSubmit();
        }}
      ></input>
      <button id="search-btn" onClick={handleSubmit}>
        Search
      </button>
      {isEmptyUserName && (
        <span style={{ display: 'block' }}>
          Empty Username. Please input a valid username.
        </span>
      )}
      {fetchError && <ErrorInfo errorInfo={fetchError} />}
      {userData && <UserCard userData={userData} />}
    </div>
  );
};

export default GithubProfileFinder;
