const marks = []
const subjects = []


const calculate_avg = (marks) => {
    return marks.reduce((total, item) => {
        return total + item
    }, 0) / marks.length / 50 * 100 + "%"
}

const EditItem = (index) => {
    // Get the current subject and marks for the specified index
    const currentSubject = subjects[index];
    const currentMarks = marks[index];

    // Prompt the user for new values (you can use window.prompt or any other method)
    const newSubject = prompt("Enter the updated subject:", currentSubject);
    const newMarks = parseInt(prompt("Enter the updated marks:", currentMarks));

    // Update the arrays with the new values
    subjects[index] = newSubject;
    marks[index] = newMarks;

    // Refresh the table display
    let html = "";
    marks.forEach((item, i) => {
        html += RowEntry(subjects[i], item, i);
    });

    document.getElementById("tbody").innerHTML = html;
    document.getElementById("output").innerText = marks;
    document.getElementById("avg").innerText = calculate_avg(marks);
};

const RowEntry = (subject,marks,index) => {
    return `<tr>
    <td>${subject}</td>
    <td>${marks}</td>
    <td>
        <button onclick=DeleteItem(${index})>Delete</button>
        <button onclick=EditItem(${index})>Edit</button>
    </td>
    </tr>`
}

const DeleteItem = (index) => {
    marks.splice(index, 1)
    subjects.splice(index, 1)
    let html = ""
    marks.forEach((item, index) => {
        html += RowEntry(subjects[index],item,index)
    })
    document.getElementById("tbody").innerHTML = html
    document.getElementById("output").innerText = marks
    document.getElementById("avg").innerText = calculate_avg(marks)

}
const AddMarks = () => {
    const mark = parseInt(document.getElementById("marks").value);
    const subject = document.getElementById("subject").value;
    marks.push(mark)
    subjects.push(subject)
    document.getElementById("output").innerText = marks
    document.getElementById("avg").innerText = calculate_avg(marks)
    html = RowEntry(subject,mark,marks.length - 1)
    document.getElementById("tbody").innerHTML = document.getElementById("tbody").innerHTML + html
}