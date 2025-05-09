// src/pages/Weather.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

function Weather() {
  const location = useLocation();
  const navigate = useNavigate();
  const weatherData = location.state;

  // Safe validation for weatherData
  const isValidWeatherData =
    weatherData &&
    weatherData.location &&
    weatherData.forecast &&
    Array.isArray(weatherData.forecast.forecastday) &&
    weatherData.forecast.forecastday.length > 0;

  // If invalid (e.g., wrong city), show error message
  if (!isValidWeatherData) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-100">
        <div className="bg-white/80 p-6 rounded-xl shadow-md text-center max-w-sm">
          <h1 className="text-2xl font-bold text-red-600 mb-2">City not found</h1>
          <p className="text-gray-700 mb-4">Please check the spelling and try again.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const dailyForecast = weatherData.forecast.forecastday;
  const hourlyForecast = weatherData.forecast.forecastday[0].hour;

  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-400 via-blue-200 to-blue-100 flex flex-col relative">

      {/* Add padding top to push content below header */}
      <div className="pt-16 flex-1 flex flex-col">

        {/* Main layout */}
        <div className="flex flex-1 flex-col md:flex-row overflow-hidden p-4 gap-4">

          {/* Left Panel */}
          <div className="w-full md:w-[65%] p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex flex-col gap-6">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-blue-800 text-center">
                {weatherData.location.name}
              </h1>
              <p className="text-lg text-gray-700 text-center">
                {weatherData.location.region}, {weatherData.location.country}
              </p>
            </div>

            {/* 4 Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500 text-white rounded-xl p-6 text-center shadow-lg">
                <p className="text-xl font-semibold">Temp</p>
                <p className="text-3xl">{weatherData.current.temp_c}°C</p>
              </div>
              <div className="bg-green-500 text-white rounded-xl p-6 text-center shadow-lg">
                <p className="text-xl font-semibold">Wind</p>
                <p className="text-3xl">{weatherData.current.wind_kph} km/h</p>
              </div>
              <div className="bg-yellow-500 text-white rounded-xl p-6 text-center shadow-lg">
                <p className="text-xl font-semibold">Humidity</p>
                <p className="text-3xl">{weatherData.current.humidity}%</p>
              </div>
              <div className="bg-pink-500 text-white rounded-xl p-6 text-center shadow-lg">
                <p className="text-xl font-semibold">Cloud</p>
                <p className="text-3xl">{weatherData.current.cloud}%</p>
              </div>
            </div>

            {/* Hourly Forecast */}
            <div className="w-full mt-2">
              <div className="overflow-x-auto hide-scrollbar">
                <div className="flex gap-4 px-2 py-2">
                  {hourlyForecast.map((hour, index) => (
                    <div
                      key={index}
                      className="min-w-[90px] bg-blue-100 rounded-lg p-2 text-center shadow-sm hover:bg-blue-200 transition flex flex-col items-center"
                    >
                      <p className="text-xs font-medium text-gray-600">
                        {hour.time.split(' ')[1]}
                      </p>
                      <img
                        src={`https:${hour.condition.icon}`}
                        alt={hour.condition.text}
                        className="w-8 h-8 my-1"
                      />
                      <p className="text-sm font-semibold text-gray-700">{hour.temp_c}°C</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel */}
          <div className="w-full md:w-[35%] bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-inner flex flex-col gap-6 overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <h2 className="text-2xl font-bold text-blue-800 text-center mb-4">7-Day Forecast</h2>
              <div className="flex flex-col gap-4">
                {dailyForecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between bg-blue-100 rounded-lg p-3 shadow-sm hover:bg-blue-200 transition">
                    <p className="font-semibold text-gray-700">{day.date}</p>
                    <div className="flex items-center gap-2">
                      <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.text} className="w-8 h-8" />
                      <p className="text-gray-700">{day.day.avgtemp_c}°C</p>
                    </div>
                    <p className="text-gray-600 text-sm">{day.day.condition.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="text-center py-2 text-gray-600 text-sm">
          Made by Hassan Ali Pansota with ❤❤❤
        </footer>

      </div>

    </div>
  );
}

export default Weather;
