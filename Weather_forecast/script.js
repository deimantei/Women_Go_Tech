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
            
            const timeZone = data.timezone;
            var offset = new Date().getTimezoneOffset()*60;

            const currentTime = new Date ((data.dt  + timeZone + offset)* 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });


            //const sunset = new Date((data.sys.sunset + timeZone - 10800) * 1000); // Subtract 10800 seconds (3 hours) for Lithuania's time zone offset
            //const formattedTime = sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            
            
            const sunset = new Date((data.sys.sunset + timeZone + offset) * 1000);
            var hours = sunset.getHours();
            var minutes = sunset.getMinutes();
            var seconds = sunset.getSeconds();
            // will display time in 21:00:00 format
            var formattedTime = hours + ':' + minutes + ':' + seconds;

            weatherInfo.innerHTML = `
            <p><strong>City: </strong>${city}</p>
            <p class="time"><strong>Time*: </strong>${currentTime}</p>
            <p><strong>Weather: </strong>${weather}</p>
            <p><strong>Temperature: </strong>${temperature}°C</p>
            <p class="time"><strong>Sunset*: </strong>${formattedTime}</p>
            <p><strong>Cloudiness: </strong>${clouds}%</p>
            <p><strong>Wind speed: </strong>${wind} m/s</p>
            `;
        })
        .catch (error => {
            console.error('Error:', error);
            weatherInfo.innerHTML = 'An error occurred. Please try again.';
        });
});