import React, { useState } from 'react'
import Axios from 'axios'
// import { Container } from 'react-bootstrap'
import './App.css'
import styled from "styled-components"
import WeatherComponent from './modules/WeatherInfoComponent'
import CityComponent from './modules/CityCompoent'

export const WeatherIcons = {
  "01d" : "/icons/sunny.svg",
  "01n" : "/icons/night.svg",
  "02d" : "/icons/day.svg",
  "02n" : "/icons/cloudy-night.svg",
  "03d" : "/icons/cloudy.svg",
  "03n" : "/icons/cloudy.svg",
  "04d" : "/icons/pressure.svg",
  "04n" : "/icons/perfect-day.svg",
  "09d" : "/icons/cloudy-night.svg",
  "09n" : "/icons/rain-night.svg",
  "10d" : "/icons/rain.svg",
  "10n" : "/icons/rain-night.svg",
  "11d" : "/icons/storm.svg",
  "11n" : "/icons/storm.svg",
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`

const AppLabel = styled.div`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`
// const CloseButton = styled.span`
//   padding: 2px 3px;
//   background-color: black;
//   border-radius: 50%;
//   color: white;
//   position: absolute;
// `;

function App() {
  const [city, updateCity] = useState()
  const [weather, updateWeather] = useState()

  const fetchWeather = async (e) => {
    e.preventDefault()
    const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80050f0897d5cc9bc2c999027f23bc4b`
    )
    updateWeather(response.data)
  }

  return ( 
    <>
      <Container>
        <AppLabel>React Weather App</AppLabel>
        {city && weather ? (
          <WeatherComponent weather = {weather} city = {city}></WeatherComponent>
        ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}></CityComponent>
        )}
      </Container>
    </> 
  )
}

export default App
