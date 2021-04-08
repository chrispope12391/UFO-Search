console.log(data);

// var date = data.map(d => d.datetime);
// var city = data.map(d => d.city);
// var state = data.map(d => d.state);
// var country = data.map(d => d.country);
// var shape = data.map(d => d.shape);
// var duration = data.map(d => d.durationMinutes);
// var comments = data.map(d => d.comments);

// console.log(date);
// console.log(city);
// console.log(state);
// console.log(country);
// console.log(shape);
// console.log(duration);
// console.log(comments);

// Get a reference to the table body
var tbody = d3.select("tbody");

// create a for loop that goes through each dictionary to find the key and value and then append the value for each key
data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  