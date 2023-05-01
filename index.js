var code = ""
var work = [
    {
        "date": "Wednesday, 19 April 2023",
        "Link": "",
        "Description": "Created new tool random New Zealand Address and worked on other tools.",
        "Time": "4",
    },
    {
        "date": "Thursday, 20 April 2023",
        "Link": `<a href="https://shubhamsomwanshi11.github.io/Random-Generator/" target="_blank" and rel="noopener noreferrer">View</a>`,
        "Description": "Working on Random Formatter Website.",
        "Time": "2",
    },
    {
        "date": "Friday, 21 April 2023",
        "Link": `<a href="https://shubhamsomwanshi11.github.io/Random-Generator/" target="_blank" and rel="noopener noreferrer">View</a>`,
        "Description": "Working on Random Formatter Website.",
        "Time": "1.2",
    },
    {
        "date": "Saturday, 22 April 2023",
        "Link": `<a href="https://shubhamsomwanshi11.github.io/Random-Generator/" target="_blank" and rel="noopener noreferrer">View</a>`,
        "Description": "Working on Random Formatter Website.",
        "Time": "2"
    },
    {
        "date": "Saturday, 23 April 2023",
        "Link": `<a href="https://shubhamsomwanshi11.github.io/Random-Generator/" target="_blank" and rel="noopener noreferrer">View</a>`,
        "Description": "Working on Random Formatter Website.",
        "Time": "2"
    },
    {
        "date": "Sunday, 23 April 2023",
        "Link": `<a href="https://shubhamsomwanshi11.github.io/Random-Generator/" target="_blank" and rel="noopener noreferrer">View</a>`,
        "Description": "Working on Random Formatter Website.",
        "Time": "3"
    },
    {
        "date": "Monday, 24 April 2023",
        "Link": `<a href="https://shubhamsomwanshi11.github.io/Random-Generator/" target="_blank" and rel="noopener noreferrer">View</a>`,
        "Description": "Working on Random Formatter Website.",
        "Time": "2"
    },
    {
        "date": "Tuesday, 25 April 2023",
        "Link": `<a href="https://shubhamsomwanshi11.github.io/Random-Generator/" target="_blank" and rel="noopener noreferrer">View</a>`,
        "Description": "Working on Random Formatter Website.",
        "Time": "4"
    },
    {
        "date": "Wednesday, 26 April 2023",
        "Link": `<a href="https://shubhamsomwanshi11.github.io/Random-Generator/" target="_blank" and rel="noopener noreferrer">View</a>`,
        "Description": "Working on Random Formatter Website.",
        "Time": "4"
    },
    {
        "date": "Friday, 27 April 2023",
        "Link": ``,
        "Description": "Working on Random Scenario Generator.",
        "Time": "3"
    },
    {
        "date": "Monday, 1 May 2023",
        "Link": ``,
        "Description": "Created new tool Random Scenario Generator.",
        "Time": "2.5"
    }
]
document.addEventListener("DOMContentLoaded", () => {
    for (let i = work.length-1; i >= 0; i--) {
        code += `
                <tr>
                    <td>${work[i]["date"]}</td>
                    <td>${work[i]["Link"]}</td>
                    <td>${work[i]["Description"]}</td>
                    <td>${work[i]["Time"]} Hours</td>
                </tr>`
                  }
    document.getElementById("tbody").innerHTML = code;
});