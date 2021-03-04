// from data.js
var tableData = data;

// table body
let tbody = d3.select("tbody");
// YOUR CODE HERE!
// Loops through data.js
data.forEach(function(UFOdata) {
        console.log(UFOdata);
        // Grabs each object
        let row = tbody.append("tr");
        // Logs each object with keys and values
        Object.entries(UFOdata).forEach(function([key, value]) {
            console.log(key, value);
            // Appends cells to page
            let cell = row.append("td")
            // Updates cells with data from data.js
            cell.text(value);
        });
    });


let button = d3.select("#button");
let form = d3.select("#form");
button.on("click", runEnter);
form.on("submit",runEnter);

function handleclick(click){
    d3.event.preventDefault();
    var date = d3.select("#date")
    var inputvalue = date.property("value");
    console.log(inputvalue)
    if (date) {
        filterData = data.filter(data => data.date === date);
        console.log(filterData);
    }
}