let input = document.getElementById('city');

let submitContent = () => {

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=f10bfe1d0632bfeca9c074f70735b293`)
.then((res) => res.json())
.then((data) => {

	let output = `
	<h1> ${data.name} conditions </h1>
	<hr>
	<table class = "content">
	<thead>
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
	<td>${data.name}</td>
	<td> ${data.main.humidity}</td>
	<td> ${data.weather[0].description}</td>
	<td> ${Math.round(data.main.temp - 273.15)} </td>
	<td> ${data.wind.speed} </td>
	<td> ${data.main.pressure}</td>
	<td> ${data.weather[0].main}
	</tr>
	</table>
	
	`

	document.getElementById('result').innerHTML = output;

	console.log(data);
})
.catch((err) => document.getElementById('result').innerHTML = "Enter correct name")

}


