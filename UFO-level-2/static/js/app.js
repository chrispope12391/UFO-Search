// console.log(`here${data}`);

// assign the data from data.js to a variable
var ufoData = data;

// select the button
var button = d3.select("#filter-btn");

var cityButton = d3.select("#city-filter-btn");

// select the form
var form = d3.select("#form");

var cityForm = d3.select("#cityForm");

// create event handlers
button.on("click", runEnter);
cityButton.on("click", runEnter);
form.on("submit", runEnter);
cityForm.on("submit", runEnter);

// complete the event handler function for form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var inputCity = d3. select("#city");

    var cityValue = inputCity.property("value");


    console.log(`hello${inputValue}`);

    var filteredData = ufoData;

    if (inputValue) {

        filteredData = filteredData.filter(u => u.datetime === inputValue);
    }
    if (cityValue) {

        filteredData = filteredData.filter(u => u.city === cityValue);

    }

    var tbody = d3.select("tbody");

    tbody.html("");

    // create a for loop that goes through each dictionary to find the key and value and then append the value for each key
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

};
