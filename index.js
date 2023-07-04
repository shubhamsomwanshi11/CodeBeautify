var code = ""
var work = [
    {
        "date": "Tuesday, 27 June 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool Memorable Password Generator.</li></ol>`,
        "Time": "5:00",
    },
    {
        "date": "Wednesday, 28 June 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool Magic School Name Generator.</li></ol>`,
        "Time": "2:30",
    },
    {
        "date": "Thursday, 29 June 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool Halloween Costume Generator.</li><li>Created new tool Book Title Generator.</li></ol>`,
        "Time": "5:10",
    },
    {
        "date": "Saturday, 1 July 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool Disney Character Generator.</li></ol>`,
        "Time": "4:20",
    },
    {
        "date": "Sunday, 2 July 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool God Name Generator.</li></ol>`,
        "Time": "3:10",
    },
    {
        "date": "Tuesday, 4 July 2023",
        "Link": "",
        "Description": `<ol class="has-text-left"><li>Created new tool Random Setting Generator Generator.</li><li>Created new tool Twitch Name Generator.</li></ol>`,
        "Time": "4:20",
    }
]
document.addEventListener("DOMContentLoaded", () => {
    for (let i = work.length - 1; i >= 0; i--) {
        const date = work[i].date;
        const link = work[i].Link;
        const description = work[i].Description;
        const timeParts = work[i].Time.split(':');
        const hours = timeParts[0];
        const minutes = timeParts[1];

        code += `
          <tr>
            <td>${date}</td>
            <td>${link}</td>
            <td>${description}</td>
            <td>${hours} Hours ${minutes} Minutes</td>
          </tr>`;
    }
    document.getElementById("tbody").innerHTML = code;
});