const apiKey = "0b16d3f3c8bf46bb83a172553260405";

function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") return;

     let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

function displayWeather(data) {
    let result = document.getElementById("weather-result");

    if (data.error) {
        result.innerHTML = `<p> City not found</p>`;
        return;
    }

    result.innerHTML = `
        <div class="weather-card">
            <h2>${data.location.name}</h2>
            <img src="https:${data.current.condition.icon}" alt="">
            <div class="temp">${data.current.temp_c}°C</div>
            <div class="details">${data.current.condition.text}</div>
            <div class="details">💧 Humidity: ${data.current.humidity}%</div>
            <div class="details">🌬 Wind: ${data.current.wind_kph} km/h</div>
        </div>
    `;
}