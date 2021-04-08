console.log(data);

var date = data.map(d => d.datetime);
var city = data.map(d => d.city);
var state = data.map(d => d.state);
var country = data.map(d => d.country);
var shape = data.map(d => d.shape);
var duration = data.map(d => d.durationMinutes);
var comments = data.map(d => d.comments);

console.log(date);
console.log(city);
console.log(state);
console.log(country);
console.log(shape);
console.log(duration);
console.log(comments);

var tbody = d3.select("tbody");