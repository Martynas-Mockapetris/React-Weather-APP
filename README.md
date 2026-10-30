# React Weather App

A modern weather application built with React and CSS. The app allows users to search for weather conditions in different locations and displays current weather information, including temperature, humidity, and wind speed, through a dynamic interface.

## ✨ Features

- **Weather Search** — Search for current weather conditions in different cities.
- **Default Location** — Automatically displays the current weather for Vilnius when the application loads.
- **Real-Time Weather Data** — Fetches weather information from the OpenWeatherMap API.
- **Dynamic Weather Images** — Displays different weather illustrations depending on the current conditions.
- **Dynamic Backgrounds** — Changes the application background gradient based on the weather conditions.
- **Temperature Display** — Shows the current temperature in Celsius.
- **Weather Details** — Displays humidity and wind speed.
- **Current Date** — Dynamically displays the current weekday, day, and month.
- **Loading Indicator** — Displays a loading animation while weather data is being fetched.
- **Search Validation** — Displays a not-found message when a location cannot be found.
- **Keyboard Interaction** — Press Enter to search for a location.

## 🛠️ Technologies Used

- **React** — Component-based UI development.
- **JavaScript (ES6+)** — Weather data handling, API requests, and application logic.
- **Vite** — Development server and production build tooling.
- **CSS3** — Custom styling, responsive layouts, gradients, and visual effects.
- **React Hooks** — `useState` for managing weather data, search input, and loading states; `useEffect` for fetching default weather data when the component mounts.
- **OpenWeatherMap API** — Retrieves current weather information for searched locations.
- **Environment Variables** — Stores the API key outside the application source files.
- **Font Awesome** — Icons for location, search, humidity, and wind.
- **Git & GitHub** — Version control and source code hosting.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- An [OpenWeatherMap API key](https://openweathermap.org/api)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Martynas-Mockapetris/React-Weather-APP.git
   ```

2. Navigate to the project directory:

   ```bash
   cd React-Weather-APP
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the project root and add your OpenWeatherMap API key:

   ```env
   VITE_API_KEY=your_api_key
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL provided in your terminal, typically `http://localhost:5173`.

**Note:** Make sure `.env.local` is included in `.gitignore` so your local environment file is not committed to GitHub. Vite exposes variables prefixed with `VITE_` to browser code, so the key is not truly secret in a deployed frontend.

## 🧠 What I Practiced

This project provided practical experience with:

- Fetching external data using JavaScript's `fetch()` API and asynchronous functions.
- Working with REST APIs and handling JSON responses.
- Managing React state for weather information, search input, and loading indicators.
- Using `useEffect` to fetch initial weather data when a component mounts.
- Working with environment variables in a Vite application.
- Dynamically rendering images and background gradients based on API response data.
- Handling user input and implementing keyboard interactions with the Enter key.
- Implementing conditional rendering for loading states and unsuccessful searches.
- Working with JavaScript's `Date` object to format the current date.

## 👨‍💻 Author

**Martynas Mockapetris**

- GitHub: [Martynas-Mockapetris](https://github.com/Martynas-Mockapetris)

---

Built with React, JavaScript, CSS, and OpenWeatherMap API.
