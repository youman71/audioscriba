'use client';

// pages/covid.js
import { useState, useEffect } from 'react';

const CovidPage = () => {
  const [covidData, setCovidData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCovidData = async () => {
      const response = await fetch('https://api.covid19api.com/summary');
      const data = await response.json();
      setCovidData(data.Global);
      setLoading(false);
    };

    fetchCovidData();
  }, []);

  return (
    <div>
      <h1>COVID-19 Global Statistics</h1>
      {loading ? <p>Loading...</p> : (
        <div>
          <p>Total Cases: {covidData.TotalConfirmed}</p>
          <p>Total Deaths: {covidData.TotalDeaths}</p>
          <p>Total Recovered: {covidData.TotalRecovered}</p>
        </div>
      )}
    </div>
  );
};

export default CovidPage;
