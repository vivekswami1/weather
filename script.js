const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a932467993msh8df20fe75e9c6f2p1e5ccdjsn4821b9beee49',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => { //function named getweather
    // city is an argument
    cityName.innerHTML = city // weather for cityName heading
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => { // submit button from html search box
    e.preventDefault() // to prevent default settings
    getWeather(city.value) // submit input id= city
})

getWeather("Mumbai")