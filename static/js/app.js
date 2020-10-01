// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
// with this code we declare a variable and tell JS to look for the
// <tbody> tags in HTML
var tbody = d3.slect("tbody");

function buildTable(data) {
    // tbody.html references the table on the html file, 
    // the paranthesis hold an empty string
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {

        });
    });

};