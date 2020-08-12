
import React, { useState, useEffect } from 'react';
import Dasboard from './Components/Dashboard'
import './assets/main.css';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])


  // const key = process.env.REACT_APP_UP_API_KEY
  const key = process.env.REACT_APP_KEY

  const endPoint = 'https://api.up.com.au/api/v1/transactions?page[size]=100'
  const obj = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${key}` }
  }

  useEffect(() => {
    fetch(endPoint, obj)
      .then(res => res.json())
      .then(data => {
        setData(data.data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="bg-black">
      <Dasboard data={data} />
    </div>
  );
}

export default App;
