let input = document.getElementById('city');
let result;

let submitContent = () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=db55fd495de05a4013318dac00c8b2ae`)
        .then((res) => res.json())
        .then((data) => {
            result = `
           <div id="container">
            <header id="banner"><h1>${data.name} Conditions</h1></header>
            <main id="content">
            <div id="icon"><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" height = '100px' width = '100px' alt="icon here"></div>
            <div id="weather">
            <ul>
            <li> Descripion :${data.weather[0].description}</li>
            <li> Humidty : ${data.main.humidity}</li>
            <li> Temperature :${Math.round(data.main.temp - 273.15)}</li>
            <li> Clouds : ${data.weather[0].main}</li>
          </ul>
            </div>
            </main>
             </div>
             `
            document.getElementById('result').innerHTML = result
        })
        .catch((err) => {
            document.getElementById('result').innerHTML = 'enter a real city 😑'
        })
}
