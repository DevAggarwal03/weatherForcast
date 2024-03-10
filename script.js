let city;
let inputCity = document.getElementById("state");

async function getWeather() {
    let parent = document.querySelector("#card");
    while (parent.firstElementChild) {
        parent.removeChild(parent.firstElementChild);
    }
    city = inputCity.value;
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2761e629cfcffb79fbbe233f836e83f6`);
        let jsonData = await response.json();
        printCard(jsonData, city);
    }
    catch (error) {
        console.log(error);
    }
}

function printCard(jsonData, city) {
    var newh1 = document.createElement("H3");
    var newh2 = document.createElement("H3");
    var newh3 = document.createElement("H3");
    var newDiv = document.createElement("div");
    newh1.id = "state";
    newh2.id = "temp";
    newh3.id = "humidity";
    newDiv.id = "image"
    newh1.innerHTML = `${city}`;
    newh2.innerHTML = `${(jsonData.main.temp - 273).toFixed(2)}°C`;
    newh3.innerHTML = `${jsonData.main.humidity}%`;
    let imgWeather = returnEmoji(jsonData.weather[0].id);
    newDiv.innerHTML = imgWeather
    document.getElementById("card").appendChild(newh1);
    document.getElementById("card").appendChild(newh2);
    document.getElementById("card").appendChild(newh3);
    document.getElementById("card").appendChild(newDiv);
}

function returnEmoji(id) {
    if (id < 300) {
        return "⛈️";
    }
    if (id < 400) {
        return "🌦️";
    }
    if (id < 600) {
        return "🌧️";
    }
    if (id < 700) {
        return "🌨️"
    }
    if (id < 800) {
        return "🌫️";
    }
    if (id == 800) {
        return "☀️"
    }
    if (id < 900) {
        return "☁️";
    }
}