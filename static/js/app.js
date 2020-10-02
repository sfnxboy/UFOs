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
    // .select will select the very first element that matches our selector string "#datetime"
    // So the date calue will be nested within tags that have an id of 'datetime'
    // we're telling d3 to look for where our date values are stored on the webpage
    let date = d3.select('#datetime').property("value");

    let filterData = tableData;

    if (data) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}
// By adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked
d3.select("#filter-btn").on("click",handleClick);

// Build the table when the page loads.
buildTable(tableData);