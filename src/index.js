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

let isCelcius = false;

function toggleUnit() {
    unitToggle.addEventListener('change', () => {
        if (unitToggle.checked) {
            tempDisplay.textContent = '°C';
            tempDisplay.style.color = '#2196F3';
            isCelcius = true;
        } else {
            tempDisplay.textContent = '°F';
            tempDisplay.style.color = '';
            isCelcius = false;
        }
    });
}

toggleUnit();

const currentDegree = document.querySelector('.degree');
const fDegreeOne = document.querySelector('.f-degree-1');
const fDegreeTwo = document.querySelector('.f-degree-2');
const fDegreeThree = document.querySelector('.f-degree-3');
const fDegreeFour = document.querySelector('.f-degree-4');
const fDegreeFive = document.querySelector('.f-degree-5');

// Convert Fahrenheit to Celcius and vice versa
function convertUnit(input) {
    let currentDegreeResult;
    let fDegreeOneResult;
    let fDegreeTwoResult;
    let fDegreeThreeResult;
    let fDegreeFourResult;
    let fDegreeFiveResult;

    if (isCelcius) {
        // Convert celcius to fahrenheit
        let fahrenheitUnit = (parseFloat(input) * 9/5) + 35;
    }
}

// Icons
function showCurrentWeatherIcon(iconDescription, element, i) {
    let iconName = iconDescription;
    let elements = Array.from(element);
    const index = i;

    if (index === 0 && iconName === 'cloudy') {
        elements[0].src = '/assets/cloudy.png';
    } else if (index === 0 && iconName === 'partly-cloudy-day') {
        elements[0].src = '/assets/partly-cloudy-day.png';
    } else if (index === 0 && iconName === 'rain') {
        elements[0].src = '/assets/rain.png';
    } else if (index === 0 && iconName === 'snow') {
        elements[0].src = '/assets/snow.png';
    } else if (index === 0 && iconName === 'wind') {
        elements[0].src = '/assets/windy-weather.png';
    } else if (index === 0 && iconName === 'clear-day') {
        elements[0].src = '/assets/sun.png';
    } else if (index === 0 && iconName === 'storm') {
        elements[0].src = '/assets/stormy-night.png';
    } else if (index === 0 && iconName === 'fog') {
        elements[0].src = '/assets/fog.png';
    } else if (index === 0 && iconName === 'partly-cloudy-night') {
        elements[0].src = '/assets/cloudy-night.png';
    } else if (index === 0 && iconName === 'clear-night') {
        elements[0].src = '/assets/clear-night.png';
    }
            
    if (index === 1 && iconName === 'cloudy') {
        elements[1].src = '/assets/cloudy.png';
    } else if (index === 1 && iconName === 'partly-cloudy-day') {
        elements[1].src = '/assets/partly-cloudy-day.png';
    } else if (index === 1 && iconName === 'rain') {
        elements[1].src = '/assets/rain.png';
    } else if (index === 1 && iconName === 'snow') {
        elements[1].src = '/assets/snow.png';
    } else if (index === 1 &&iconName === 'wind') {
        elements[1].src = '/assets/windy-weather.png';
    } else if (index === 1 && iconName === 'clear-day') {
        elements[1].src = '/assets/sun.png';
    } else if (index === 1 && iconName === 'storm') {
        elements[1].src = '/assets/stormy-night.png';
    } else if (index === 1 && iconName === 'fog') {
        elements[1].src = '/assets/fog.png';
    } else if (index === 1 && iconName === 'partly-cloudy-night') {
        elements[1].src = '/assets/cloudy-night.png';
    } else if (index === 1 && iconName === 'clear-night') {
        elements[1].src = '/assets/clear-night.png';
    }

    if (index === 2 && iconName === 'cloudy') {
        elements[2].src = '/assets/cloudy.png';
    } else if (index === 2 && iconName === 'partly-cloudy-day') {
        elements[2].src = '/assets/partly-cloudy-day.png';
    } else if (index === 2 && iconName === 'rain') {
        elements[2].src = '/assets/rain.png';
    } else if (index === 2 && iconName === 'snow') {
        elements[2].src = '/assets/snow.png';
    } else if (index === 2 && iconName === 'wind') {
        elements[2].src = '/assets/windy-weather.png';
    } else if (index === 2 && iconName === 'clear-day') {
        elements[2].src = '/assets/sun.png';
    } else if (index === 2 && iconName === 'storm') {
        elements[2].src = '/assets/stormy-night.png';
    } else if (index === 2 && iconName === 'fog') {
        elements[2].src = '/assets/fog.png';
    } else if (index === 2 && iconName === 'partly-cloudy-night') {
        elements[2].src = '/assets/cloudy-night.png';
    } else if (index === 2 && iconName === 'clear-night') {
        elements[2].src = '/assets/clear-night.png';
    }

    if (index === 3 && iconName === 'cloudy') {
        elements[3].src = '/assets/cloudy.png';
    } else if (index === 3 && iconName === 'partly-cloudy-day') {
        elements[3].src = '/assets/partly-cloudy-day.png';
    } else if (index === 3 && iconName === 'rain') {
        elements[3].src = '/assets/rain.png';
    } else if (index === 3 && iconName === 'snow') {
        elements[3].src = '/assets/snow.png';
    } else if (index === 3 && iconName === 'wind')  {
        elements[3].src = '/assets/windy-weather.png';
    } else if (index === 3 && iconName === 'clear-day') {
        elements[3].src = '/assets/sun.png';
    } else if (index === 3 && iconName === 'storm') {
        elements[3].src = '/assets/stormy-night.png';
    } else if (index === 3 && iconName === 'fog') {
        elements[3].src = '/assets/fog.png';
    } else if (index === 3 && iconName === 'partly-cloudy-night') {
        elements[3].src = '/assets/cloudy-night.png';
    } else if (index === 3 && iconName === 'clear-night') {
        elements[3].src = '/assets/clear-night.png';
    }

    if (index === 4 && iconName === 'cloudy') {
        elements[4].src = '/assets/cloudy.png';
    } else if (index === 4 && iconName === 'partly-cloudy-day') {
        elements[4].src = '/assets/partly-cloudy-day.png';
    } else if (index === 4 && iconName === 'rain') {
        elements[4].src = '/assets/rain.png';
    } else if (index === 4 && iconName === 'snow') {
        elements[4].src = '/assets/snow.png';
    } else if (index === 4 && iconName === 'wind') {
        elements[4].src = '/assets/windy-weather.png';
    } else if (index === 4 && iconName === 'clear-day') {
        elements[4].src = '/assets/sun.png';
    } else if (index === 4 && iconName === 'storm') {
        elements[4].src = '/assets/stormy-night.png';
    } else if (index === 4 && iconName === 'fog') {
        elements[4].src = '/assets/fog.png';
    } else if (index === 4 && iconName === 'partly-cloudy-night') {
        elements[4].src = '/assets/cloudy-night.png';
    } else if (index === 4 && iconName === 'clear-night') {
        elements[4].src = '/assets/clear-night.png';
    }
}

//  App
const APIKEY = 'BAMYP5SM55S45QMEYXUFTXVAT';

async function fetchData(defaulLocation) {
    try {
        const location = searchBar.value.toLowerCase() || defaulLocation;
        const currentDate = new Date();
        const currentWeatherIcon = document.querySelector('.current-weather-icon');
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

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${APIKEY}`, { mode: 'cors' })
        .then(async function(response) {

            const receivedData = await response.json();
            
            if (receivedData) {
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
            }
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
            
            if (data.icon === 'partly-cloudy-day') {
                currentWeatherIcon.src = '/assets/partly-cloudy-day.png';
            } else if (data.icon === 'rain') {
                currentWeatherIcon.src = '/assets/rain.png';
            } else if (data.icon === 'snow') {
                currentWeatherIcon.src = '/assets/snow.png';
            } else if (data.icon === 'fog') {
                currentWeatherIcon.src = '/assets/fog.png';
            } else if (data.icon === 'clear-day') {
                currentWeatherIcon.src = '/assets/sun.png';
            } else if (data.icon === 'wind') {
                currentWeatherIcon.src = '/assets/windy-weather.png';
            } else if (data.icon === 'cloudy') {
                currentWeatherIcon.src = '/assets/cloudy.png';
            } else if (data.icon === 'partly-cloudy-night') {
                currentWeatherIcon.src = '/assets/cloudy-night.png';
            } else if (data.icon === 'clear-night') {
                currentWeatherIcon.src = '/assets/clear-night.png';
            }
        })
        .then(async function() {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${APIKEY}`, { mode: 'cors' });
            const receivedForcastData = await response.json();

            const days = document.querySelectorAll('.day');
            const weatherIcons = document.querySelectorAll('.f-weather-icon img');
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
                    showCurrentWeatherIcon(forcastData.weatherIconForDayOne, weatherIcons, 0);
                }
                else if (i === 1) {
                    days[1].textContent = forcastData.dayTwo;
                    forcastTempDegrees[1].textContent = forcastData.tempTwo;
                    forcastConditions[1].textContent = forcastData.conditionTwo;
                    showCurrentWeatherIcon(forcastData.weatherIconForDayTwo, weatherIcons, 1);
                }
                else if (i === 2) {
                    days[2].textContent = forcastData.dayThree;
                    forcastTempDegrees[2].textContent = forcastData.tempThree;
                    forcastConditions[2].textContent = forcastData.conditionThree;
                    showCurrentWeatherIcon(forcastData.weatherIconForDayThree, weatherIcons, 2);
                }
                else if (i === 3) {
                    days[3].textContent = forcastData.dayFour;
                    forcastTempDegrees[3].textContent = forcastData.tempFour;
                    forcastConditions[3].textContent = forcastData.conditionFour;
                    showCurrentWeatherIcon(forcastData.weatherIconForDayFour, weatherIcons, 3);
                }
                else if (i === 4) {
                    days[4].textContent = forcastData.dayFive;
                    forcastTempDegrees[4].textContent = forcastData.tempFive;
                    forcastConditions[4].textContent = forcastData.conditionFive;
                    showCurrentWeatherIcon(forcastData.weatherIconForDayFive, weatherIcons, 4);
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

window.fetchData = fetchData;

