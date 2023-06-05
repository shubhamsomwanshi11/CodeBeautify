var code = ""
var work = [
    {
        "date": "Saturday, 27 May 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool Username Generator</li></ol>`,        "Time": "6",
    },
    {
        "date": "Monday, 29 May 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Updated Random Username Generator</li><li>Collecting Data for Random School-Name Generator.</li></ol>`,
        "Time": "2",
    },
    {
        "date": "Tuesday, 30 May 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Added copy to clipboard in random username generator.</li><li>Created new tool Random School-Name Generator.</li></ol>`,
        "Time": "4",
    },
    {
        "date": "Wednsday, 31 May 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool Japanese Name Generator</li></ol>`,
        "Time": "3.5",
    },
    {
        "date": "Thursday, 1 June 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Added Sharing in Generator.</li></ol>`,
        "Time": "4.5",
    },
    {
        "date": "Friday, 2 June 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Collecting data for Random Kingdom Generator.</li></ol>`,
        "Time": "3.2",
    },
    {
        "date": "Monday, 3 June 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Collecting data for Random DND  Generator.</li></ol>`,
        "Time": "3",
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