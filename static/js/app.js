//from data.js;
var tableData = data;
var tbody = d3.select("tbody");

function importTable(table){
        table.forEach(function(file) {
                var row = tbody.append("tr");
                Object.entries(file).forEach(function([key, value]) {
                        var cell = tbody.append("td");
                        cell.text(value);
                })
        })
}

//import original data
importTable(tableData);

// Select the filter button
var button = d3.select("#filter-btn");

// Select the reset button
var resetButton = d3.select("#reset-btn");

// Select the filter form
var form = d3.select("#form-group");

// Create event handlers for filter button
button.on("click", runEnter);
form.on("submit",runEnter);

// Clear table and reset back to original table results
resetButton.on("click", reset);


// Filter table based on date input
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  
  var inputCityElement = d3.select("#city");
  var inputCityValue = inputCityElement.property("value");

  //use this one when city and date are neither blank
  if (inputCityValue.length !== 0 && inputValue.length !== 0) {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue && tableData.city === inputCityValue);
        }
  //use this one when city is blank and date is not      
  else if (inputCityValue.length === 0 && inputValue.length !== 0) {
        var filteredData = tableData.filter(inputDate => inputDate.datetime === inputValue);
        }
  //use this one when date is blank and city is not
  else if (inputCityValue.length !== 0 && inputValue.length === 0) {
        var filteredData = tableData.filter(inputCity => inputCity.city === inputCityValue);
        }

  // Clear table body so it can be reloaded with filtered data
  tbody.html("");

  // Reload html table with filtered data
  importTable(filteredData);

}

//Function to reset filtered table back to original data
function reset() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // clear the input value
  d3.select("#datetime").node().value = "";
  d3.select("#city").node().value = "";

  // Clear table body so it can be reloaded with filtered data
  tbody.html("");

  // Reload html table with filtered data
  importTable(tableData);

}