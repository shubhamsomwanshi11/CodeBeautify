var code = ""
var work = [
    {
        "date": "Tuesday, 27 June 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool Memorable Password Generator.</li></ol>`,
        "Time": "5",
    },
    {
        "date": "Wednesday, 28 June 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool Magic School Name Generator.</li>`,
        "Time": "2:30",
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