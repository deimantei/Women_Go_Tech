//https://openweathermap.org/current#one
const apiKey = 'cfc60cf922e31045e5d684e56cf99484';

const submitBtn = document.getElementById('submit-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

submitBtn.addEventListener('click', () => {
    const city = cityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then (response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temperature = Math.round(data.main.temp - 273.15);
            const clouds = data.clouds.all;
            const wind = data.wind.speed;




            //How to set time to that place local time?
            //const timeZone = (data.timezone / 3600).toString();
            //const time = new Date(data.dt * 1000).toLocaleTimeString();
            //const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            const sunset = new Date((data.sys.sunset + data.timezone) * 1000);
            var hours = data.getHours();
            var minutes = data.getMinutes();
            var seconds = data.getSeconds();
            // will display time in 21:00:00 format
            var formattedTime = hours + ':' + minutes + ':' + seconds;




            weatherInfo.innerHTML = `
            <p><strong>City: </strong>${city}</p>
            <p><strong>Your current time: </strong>${time}</p>
            <p><strong>Weather: </strong>${weather}</p>
            <p><strong>Temperature: </strong>${temperature}°C</p>
            <p><strong>Sunset*: </strong>${sunset}</p>
            <p><strong>Cloudiness: </strong>${clouds}%</p>
            <p><strong>Wind speed: </strong>${wind} m/s</p>
            <p>*in your local time</p>
            `;
        })
        .catch (error => {
            console.error('Error:', error);
            weatherInfo.innerHTML = 'An error occurred. Please try again.';
        });
});