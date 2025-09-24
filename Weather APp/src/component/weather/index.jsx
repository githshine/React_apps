import React from 'react';
import Search from '../search';
import { useState } from 'react';
import { useEffect } from 'react';

const Weather = () => {
  const [search, setSearch] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  async function fetchData(param) {
    try {
      console.log('param:', param);

      setLoading(true);
      const response = await fetch(
        // `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=edd19028acb5c463d52db06fbb15ddd8`
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );

      console.log('response:', response);

      if (!response.ok) {
        setError(response.statusText);
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log('Data from response:', data);

      setData(data);
      setLoading(false);
      setError(null);
    } catch (e) {
      setError(e.message);
      setLoading(false);
      return;
    }
  }

  function handleSearch() {
    fetchData(search);
    setSearch('');
  }

  useEffect(() => {
    fetchData('Toronto');
  }, []);

  function getCurrentDate() {
    const curDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return curDate;
  }

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading data... Please wait.</div>
      ) : error ? (
        <div className="loadingError">
          Error occured. Please try again.<p>{error}</p>
        </div>
      ) : (
        data &&
        data.weather &&
        data.weather.length > 0 && (
          <div className="weather-card">
            <div id="city-name">
              <h2 id="city">
                {data.name}, {data.sys.country}
              </h2>
            </div>
            <div className="date">{getCurrentDate()}</div>

            <div className="temp">{data.main.temp}</div>
            <div id="weather">{data.weather[0].description}</div>
            <div className="weather-info">
              <div id="wind-speed">
                <p>{data.wind.speed}</p>
                <p>Wind Speed</p>
              </div>
              <div id="humidity">
                <p>{data.main.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
