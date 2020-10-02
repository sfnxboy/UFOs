// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
// with this code we declare a variable and tell JS to look for the
// <tbody> tags in HTML
var tbody = d3.select("tbody");

function buildTable(data) {
    // tbody.html references the table on the html file, 
    // the paranthesis hold an empty string
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });

};

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
// By adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked
d3.select("#filter-btn").on("click",handleClick);

// Build the table when the page loads.
buildTable(tableData);