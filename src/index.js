import './styles.css';

const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('.search-bar');
const cityName = document.querySelector('.cityname');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feels-like');
const condition = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.wind-speed');
const pressure = document.querySelector('.pressure');
const sunrise = document.querySelector('.sunrise-time');
const sunset = document.querySelector('.sunset-time');

function shiftSearchButton() {
    if (searchBar.value) {
        searchButton.classList.add('shifted');
    }
    else {
        searchButton.classList.remove('shifted');
    }
}

searchBar.addEventListener('input', shiftSearchButton);

//  App
const APIKEY = 'BAMYP5SM55S45QMEYXUFTXVAT';

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

async function fetchData() {
    try {
        const location = searchBar.value.toLowerCase();
        const currentDate = new Date();

        const fetchedData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${formatDate(currentDate)}/?key=${APIKEY}`, { mode: 'cors' })
        .then(async function(response) {
            const receivedData = await response.json();
            console.log(receivedData);
            const currentWeatherData = {
                cityname: receivedData.resolvedAddress,
                condition: receivedData.currentConditions.conditions,
                temperature: receivedData.currentConditions.temp,
                description: receivedData.description,
                feelslike: receivedData.currentConditions.feelslike,
                icon: receivedData.currentConditions.icon,
                humidity: receivedData.currentConditions.humidity,
                windspeed: receivedData.currentConditions.windspeed,
                pressure: receivedData.currentConditions.pressure,
                sunrise: receivedData.currentConditions.sunrise,
                sunset: receivedData.currentConditions.sunset,
            };
            searchBar.value = '';
            return currentWeatherData;
        })
        .then(function(data) {
            cityName.textContent = data.cityname;
            temp.textContent = data.temperature;
            feelsLike.textContent = data.feelslike;
            condition.textContent = data.condition;
            humidity.textContent = data.humidity;
            windspeed.textContent = data.windspeed;
            pressure.textContent = data.pressure;
            sunrise.textContent = data.sunrise;
            sunset.textContent = data.sunset;
            console.log(data);
        });
    } catch(error) {
        console.log(error);
    }
}

window.fetchData = fetchData;