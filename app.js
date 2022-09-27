//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//f56a0589aadec246ba37ad36c66d20a9
const weatherApi = {
    key: "f56a0589aadec246ba37ad36c66d20a9",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}
const searchInputbox = document.getElementById('input-box');
// Event Listener Function on keypress

searchInputbox.addEventListener('keypress', (event)=> {

    if(event.KeyCode == 13){
 console.log(searchInputbox.value); 
 getWeatherReport(searchInputbox.value); 
    }
   
});




// Get weather Report

 function getWeatherReport(city){
     fetch( `${weatherApi.baseUrl}?q=${city}$appid=${weatherApi.key}&units=metric`) 
     .then(weather => {
          return weather.json();
     }).then();  
 }

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather); 

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    
    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}%deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/  ${Math.ceil(weather.main.temp_min)} `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
     
     if(weatherType.textContent == 'clear') {
         document.body.style.backgroundimage = url('Images/sunny.jpg.jigi');
     }



}

//Date manage

function dateManage(dateArg){
    let days = ["Sunday", "Monday", "Tuesday" , "Wednesday", "Thursday" , "Friday", "Saturday"];

    let months = ["January", "February" , "March", "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

    let year = dateArg.getFullYear();
    let month = months[date.Arg.getMonth()];
    let date = date.Arg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year}`;
}




