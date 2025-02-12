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

// Default
document.addEventListener('DOMContentLoaded', () => {
    fetchData('New York');
});

// Search Button
searchButton.addEventListener('click', (e) => {
    if (searchBar.value) {
        fetchData();
    } else {
        alert('Please crosscheck the city name and try again!');
    }
});

// Shift Search Button 
function shiftSearchButton() {
    if (searchBar.value) {
        searchButton.classList.add('shifted');
    }
    else {
        searchButton.classList.remove('shifted');
    }
}

searchBar.addEventListener('input', shiftSearchButton);

// Toggle unit
const unitToggle = document.getElementById('unitToggle');
const tempDisplay = document.getElementById('unit');

function toggleUnit() {
    unitToggle.addEventListener('change', () => {
        if (unitToggle.checked) {
            tempDisplay.textContent = '°C';
            tempDisplay.style.color = '#2196F3';
        } else {
            tempDisplay.textContent = '°F';
            tempDisplay.style.color = '';
        }
    });
}

toggleUnit();


//  App
const APIKEY = 'BAMYP5SM55S45QMEYXUFTXVAT';

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

async function fetchData(defaulLocation) {
    try {
        const location = searchBar.value.toLowerCase() || defaulLocation;
        const currentDate = new Date();
        const currentWeatherContainer = document.querySelector('.current-weather');
        const currentWeatherChildren = currentWeatherContainer.children;
        const fiveDayForcastContainer = document.querySelector('.five-day-forcast-container');
        const fiveDayForcastChildren = fiveDayForcastContainer.children;
        const loadingForCW = document.querySelector('.cw-loading');
        const loadingForF = document.querySelector('.f-loading');

        for (let element of currentWeatherChildren) {
            if (element.classList.contains('cw-loading')) element.style.display = 'flex';
            else {
                element.style.display = 'none';
            }
        }
        for (let element of fiveDayForcastChildren) {
            if (element.classList.contains('f-loading')) element.style.display = 'flex';
            else {
                element.style.display = 'none';
            }
        }

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${formatDate(currentDate)}/?key=${APIKEY}`, { mode: 'cors' })
        .then(async function(response) {

            const receivedData = await response.json();

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
            cityName.textContent = `${ data.cityname}`;
            temp.textContent = data.temperature;
            feelsLike.textContent = data.feelslike;
            condition.textContent = data.condition;
            humidity.textContent = data.humidity;
            windspeed.textContent = data.windspeed;
            pressure.textContent = data.pressure;
            sunrise.textContent = data.sunrise;
            sunset.textContent = data.sunset;
        })
        .then(async function() {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${APIKEY}`, { mode: 'cors' });
            const receivedForcastData = await response.json();

            const days = document.querySelectorAll('.day');
            const weatherIcons = document.querySelectorAll('.f-weather-icon');
            const forcastTempDegrees = document.querySelectorAll('.forcast-degree');
            const forcastConditions = document.querySelectorAll('.forcast-condition');

            const forcastData = {
                dayOne: 'Next day',
                dayTwo: 'Next 2 days',
                dayThree: 'Next 3 days',
                dayFour: 'Next 4 days',
                dayFive: 'Next 5 days',
                weatherIconForDayOne: receivedForcastData.days[1].icon,
                weatherIconForDayTwo: receivedForcastData.days[2].icon,
                weatherIconForDayThree: receivedForcastData.days[3].icon,
                weatherIconForDayFour: receivedForcastData.days[4].icon,
                weatherIconForDayFive: receivedForcastData.days[5].icon,
                tempOne: receivedForcastData.days[1].temp,
                tempTwo: receivedForcastData.days[2].temp,
                tempThree: receivedForcastData.days[3].temp,
                tempFour: receivedForcastData.days[4].temp,
                tempFive: receivedForcastData.days[5].temp,
                conditionOne: receivedForcastData.days[1].conditions,
                conditionTwo: receivedForcastData.days[2].conditions,
                conditionThree: receivedForcastData.days[3].conditions,
                conditionFour: receivedForcastData.days[4].conditions,
                conditionFive: receivedForcastData.days[5].conditions
            }

            for (let i = 0; i <= 4; i++) {
                if (i === 0) {
                    days[0].textContent = forcastData.dayOne;
                    forcastTempDegrees[0].textContent = forcastData.tempOne;
                    forcastConditions[0].textContent = forcastData.conditionOne;
                }
                else if (i === 1) {
                    days[1].textContent = forcastData.dayTwo;
                    forcastTempDegrees[1].textContent = forcastData.tempTwo;
                    forcastConditions[1].textContent = forcastData.conditionTwo;
                }
                else if (i === 2) {
                    days[2].textContent = forcastData.dayThree;
                    forcastTempDegrees[2].textContent = forcastData.tempThree;
                    forcastConditions[2].textContent = forcastData.conditionThree;
                }
                else if (i === 3) {
                    days[3].textContent = forcastData.dayFour;
                    forcastTempDegrees[3].textContent = forcastData.tempFour;
                    forcastConditions[3].textContent = forcastData.conditionFour;
                }
                else if (i === 4) {
                    days[4].textContent = forcastData.dayFive;
                    forcastTempDegrees[4].textContent = forcastData.tempFive;
                    forcastConditions[4].textContent = forcastData.conditionFive;
                }
            }
        })
        .finally(() => {

            for (let element of currentWeatherChildren) {
                if (element.classList.contains('cw-loading')) element.style.display = 'none';
                else {
                    element.style.display = 'flex';
                }
            }
            for (let element of fiveDayForcastChildren) {
                if (element.classList.contains('f-loading')) element.style.display = 'none';
                else {
                    element.style.display = 'flex';
                }
            }
            if (document.querySelector('.current-weather > h2')) document.querySelector('.current-weather > h2')
                .style.display = 'block';
            loadingForCW.style.diplay = 'none';
            loadingForF.style.diplay = 'none';
        });
    } catch(error) {
        showErrorMessage();

        document.querySelector('.current-weather').style.diplay = 'none';
        document.querySelector('.five-day-forcast-container').style.diplay = 'none';
        console.log(error);
    }
}

function showErrorMessage() {
    let errorMessage = document.querySelector('.error-message');

    if (!errorMessage) {
        errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.style.display = 'flex';
        
        document.body.appendChild(errorMessage);
    }
    errorMessage.textContent = 'An error occured while fetching data. Please enter a valid city, or try again later.';
    errorMessage.classList.remove('fade-out');
    errorMessage.classList.add('fade-in');

    setTimeout(() => {

        errorMessage.classList.remove('fade-in');
        errorMessage.classList.add('fade-out');

            setTimeout(() => {
                errorMessage.remove();
            }, 300);
    }, 3000);
}

function showCurrentWeather(weathericon, element) {
    const possibleWeatherIcons = ['rain', 'overcast', ''];
}

window.fetchData = fetchData;

