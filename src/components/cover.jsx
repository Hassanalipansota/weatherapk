import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { LineWobble } from 'ldrs/react'
import 'ldrs/react/LineWobble.css'



function Cover() {
  const [city, setcity] = useState('');
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState('');
  const navigate = useNavigate();

  const weatherData = async (city) => {
    setloading(true);
    try {
        const responce = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2b41f42de970475ca9160420242909&q=${city}&days=7&aqi=no&alerts=no`);
      const result = await responce.json();
      console.log(result);
      setdata(result);
      navigate("/weather", { state: result })
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setloading(false);
    }
  }

  return !loading?(
    <div className="bg-[url(/pics/frontimage.jpg)] bg-cover bg-center h-screen w-full flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl flex flex-col items-center gap-4 shadow-lg">
        <input
          type="text"
          className="text-xl px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-72"
          placeholder="Enter the city"
          onChange={(e) => setcity(e.target.value)}
        />

        <button
          onClick={() => weatherData(city)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-2 rounded-full transition duration-200 shadow-md"
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>
    </div>
  ):<div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen flex items-center justify-center text-4xl text-white'>
  <LineWobble
    size="80"
    stroke="5"
    bgOpacity="0.1"
    speed="1.75"
    color="white" // Change the animation color to white for better contrast with the background
  />
</div>

}

export default Cover;
