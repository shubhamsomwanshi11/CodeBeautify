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
        "Link": "",
        "Description": "Working on Random Generators Website.",
        "Time": "2",
    },
    {
        "date": "Friday, 21 April 2023",
        "Link": "",
        "Description": "Working on Random Generators Website.",
        "Time": "1.2",
    },
    {
        "date": "Saturday, 22 April 2023",
        "Link": "",
        "Description": "Working on Random Generators Website.",
        "Time": "2",
    }
]
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < work.length; i++) {
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