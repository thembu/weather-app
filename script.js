let input = document.getElementById('city');

let submitContent = () => {

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=db55fd495de05a4013318dac00c8b2ae`)
.then((res) => res.json())
.then((data) => {

	let output = `
	<h1> ${data.name} conditions </h1>
	<hr>
	<table class = "content">
	<thead >
	<tr>
	<th>NAME</th>
	<th> HUMIDITY </th>
	<th>DESCRIPTION</th>
	<th>TEMP</th>
	<th>WINDSPEED </th>
	<th> PRESSURE </th>
	<th> SKY </th>
	</tr>
	<thead>
	<tbody>
	<tr>
	<td data-label = "NAME">${data.name}</td>
	<td data-label = "HUMIDITY"> ${data.main.humidity}</td>
	<td data-label = "DESCRIPTION"> ${data.weather[0].description}</td>
	<td data-label = "TEMP"> ${Math.round(data.main.temp - 273.15)} </td>
	<td data-label = "WIND SPEED"> ${data.wind.speed} </td>
	<td data-label = "PRESSURE"> ${data.main.pressure}</td>
	<td data-label = "SKY"> ${data.weather[0].main}
	</tr>
	</table>
	
	`

	document.getElementById('result').innerHTML = output;

	console.log(data);
})
.catch((err) => document.getElementById('result').innerHTML = "Enter correct name")

}


