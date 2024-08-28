# Weather-Application 🌦️

WeatherApp is a sleek and responsive weather application built with React. It allows users to search for weather information by city name, displaying details such as temperature, humidity, wind speed, and geographic coordinates. The app also dynamically updates the weather icon based on the current weather conditions.

## Features

- **City Weather Search**: Enter a city name to get real-time weather data.
- **Dynamic Weather Icons**: Weather conditions are visually represented with icons.
- **Location Details**: Displays city, country, latitude, and longitude.
- **Weather Details**: Shows temperature, humidity, and wind speed.
- **Error Handling**: Informs users if a city is not found or if there is an error fetching data.
- **Responsive Design**: Adapted for both desktop and mobile viewing.

## Screenshots

![Screenshot (130)](https://github.com/user-attachments/assets/5db24e1c-8e6f-4fdb-8f57-f2d22f5683e9)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weatherwise.git

2. **Navigate to the project directory:**
   ```bash
   cd weather-App

3. **Install dependencies:**
   ```bash
   npm install

4. **Start the development server:**
   ```bash
   npm start

## Usage
- Enter a city name in the input field.
- Press 'Enter' or click on the search icon to retrieve weather information.
- The app displays the current weather conditions, including temperature, humidity, wind speed, and more.

## API Reference
- This app uses the OpenWeatherMap API to fetch weather data. You will need to provide your own API key in the App.jsx file.

1. **Replace "your key" with your actual API key.**
   ```bash
   const api_key = "your key";

## Project Structure

- /src/assets/: Contains all the icons used for various weather conditions.
- /src/components/: Contains the WeatherDetails component responsible for rendering weather information.
- /src/App.js: The main application file where the weather data is fetched and passed to the WeatherDetails component.
- /src/App.css: Contains the styling for the application.
