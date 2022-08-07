# Weather app

A brief description of what this project does and who it's for


## Run Locally

Clone the project

```bash
  git clone https://github.com/dhananjayjaiswal16/basic-weather-app.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server on localhost:3000

```bash
  npm start
```


## Roadmap

- Search for any city
- City gets added below the search bar
- Click on any of the city to view its live weather data


## Tech

- Built using React hooks
- Uses SASS for styling
- Responsive
- Uses [openweathermap](https://openweathermap.org/) api for fetching real time data

## File Description

- src/components/: Has all the components jsx files used across this project
    - AddNewPopup: Popup which opens when we click on Add new button in home page
    - Cities: Component for displaying all the cities present in our state
    - Details: Components which displays basic weather data on CityWeather page
    - Forecast: Components which shows forecast of next four days
    - Spinner: Component which is displayed when data is fetching (loader)
    - SunriseSunset: Component which shows sunrise and sunset data 

- src/pages/: Has all the pages which is shown based on url
    - CityWeather: Page which displays weather data of the selected city
    - Error404: Page which is shown when no relevant data is found from the API result
    - MainPage: Home screen of the application where we can search for a particular city

- scss/: Has all stylesheets for designing various components and pages

- services/: Has api.js file which is responsible for making all api requests

## Screen shot
  Home Screen
  ![Home Screenshot](/public/screenshot2.png)

  Weather screen
  ![Weather screenshot](/public/screenshot1.png)
