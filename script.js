let input = document.getElementById('city');
let result;

let submitContent = () => {

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=db55fd495de05a4013318dac00c8b2ae`)
		.then((res) => res.json())
		.then((data) => {
			result = `

             <caption>${data.name} Condtions</caption>

           <div class="table-responsive">
           <table class="table">
             <thead>
                <th>Place</th>
                <th>Description</th>
                <th>Humidity</th>
                <th>Temperature</th>
                <th>Clouds</th>
                <th>Conditons</th>
             </thead>
             <tbody>
              <tr class="success">
            <td>${data.name}</td>
            
            <td> ${data.weather[0].description}</td>
            <td> ${data.main.humidity}</td>
            <td> ${Math.round(data.main.temp - 273.15)}</td>
            <td> ${data.weather[0].main}</td>
            <td><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" height = '100px' width = '100px' alt="icon here"></td>
            </tr>
            </div>
            </main>
            </tbody>
            </table>
             </div>
             `
			console.log(data)
			document.getElementById('result').innerHTML = result
		})
		.catch((err) => {
			document.getElementById('result').innerHTML = 'enter a real city 😑'
		})
}
