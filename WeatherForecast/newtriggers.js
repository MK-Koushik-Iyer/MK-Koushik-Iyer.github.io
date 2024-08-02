
// const btn = document.getElementsByClassName('btn');

async function fetchWeather(){
    const apiKey = "a3bc0ded4c76d167e37c77e7e75d4121"
    let city = document.getElementById('textbox').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    try {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

        // Fetch current weather data
        const currentWeatherResponse = await fetch(currentWeatherUrl);
        if (!currentWeatherResponse.ok) throw new Error("Error fetching current weather");
        const currentWeatherData = await currentWeatherResponse.json();
        showWeather(currentWeatherData);

        // Fetch forecast data
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error("Error fetching hourly forecast");
        const forecastData = await forecastResponse.json();
        showHourlyForecast(forecastData.list);
    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }

    // $('body').children('input').val('')
    // const databox = getElementById('databox');
    // databox.hidden = false;


}


    // document.getElementsByClassName('location').innerHTML = search.value;
    // console.log(search);
    // console.log(btn);


function showWeather(data){
       const tempInfo = document.getElementById('numberwithcel');
       const weatherInfo = document.getElementById('weatherInfo');
       const weatherLocation = document.getElementById('location');
       const weatherIcon = document.getElementById('pictorialrep');
       const hourlyForecast = document.getElementById('dayforecast');

       weatherInfo.innerHTML ='';
       hourlyForecast.innerHTML = '';
       tempInfo.innerHTML = '';

       if(data.cod === '404'){
        weatherInfo.innerHTML = `<p>${data.message}</p>`
       }
       else{
        const cityName = data.name;
        const tempi = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconcode = data.weather[0].icon;
        
       

    //    const temp = document.getElementById('numberwithcel');
       const temperatureHTML = `<div>${tempi}℃</div>`;
    

    //    const location = document.getElementById('location');
       const weatherHTML = `<div>${description}</div>`;

        const locationHTML = `<div>${cityName}</div>`
       tempInfo.innerHTML = temperatureHTML;
       weatherLocation.innerHTML = locationHTML; 
       weatherInfo.innerHTML = weatherHTML;
       weatherIcon.src =`https://openweathermap.org/img/wn/${iconcode}.png`
       weatherIcon.alt = description;
       showImage();
}
}

function showHourlyForecast(hourlyData){
    const hourlyForecast = document.getElementById('dayforecast');
    const next24Hours = hourlyData.slice(0,3);

    next24Hours.forEach(item =>{
    
         const dateTime = new Date(item.dt * 1000);
         let timerange;
         const hour = dateTime.getHours();
         const temperature = Math.round(item.main.temp - 273.15);
         const iconCode = item.weather[0].icon;
         const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

         if(hour<12)
            {
                timerange = "Morning"
            }
        if(hour>=12 && hour<17)
            {
                timerange = "Afternoon"
            }
        if(hour>=17 && hour<20)
            {
                timerange = "Evening"
            }
        if(hour>=20)
            {
                timerange = "Night"
            }

         const hourlyItemHtML = `<div class="hourly-item">
                                    <section>${timerange}<br>${hour}:00</section>
                                    <img src="${iconUrl}" alt="Hourly weather icon">
                                    <section>${temperature}℃ </section><br>
                                </div>`;
        hourlyForecast.innerHTML += hourlyItemHtML; 
    })      
}

function showImage(){
    const databox = document.getElementById('databox').style.visibility = 'visible';
    const pic = document.getElementById('pictorialrep').style.display ='block';
}

// btn.addEventListener("click",()=>{
//     myfunc();
// })
