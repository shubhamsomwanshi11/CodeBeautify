var code = ""
var work = [
    {
        "date": "Saturday, 27 May 2023",
        "Link": "",
        "Description": "Created new tool random Username Generator.",
        "Time": "6",
    }
]
document.addEventListener("DOMContentLoaded", () => {
    for (let i = work.length - 1; i >= 0; i--) {
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