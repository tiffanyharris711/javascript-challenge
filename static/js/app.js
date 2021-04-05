//from data.js;
var tableData = data;
var tbody = d3.select("tbody");

//console.log(data);

tableData.forEach(function(file) {
    
    var row = tbody.append("tr");

    Object.entries(file).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
    })
})