//from data.js;
var tableData = data;
var tbody = d3.select("tbody");



tableData.forEach(function(file) {
    
    var row = tbody.append("tr");

    Object.entries(file).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
    })
})

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-group");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Use the form input to filter the data by blood type
  var filteredData = tableData.filter(inputDate => inputDate.datetime === inputValue);
  console.log(inputValue);

  tbody.html("");

  filteredData.forEach(function(file) {
    
    var row = tbody.append("tr");

    Object.entries(file).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
    })
})

}