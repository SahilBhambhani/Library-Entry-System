let count = 0;

document.getElementById("entryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const enrollment = document.getElementById("enrollment").value.trim();
    const department = document.getElementById("department").value;

    if (name === "" || enrollment === "" || department === "") {
        alert("Please fill all fields!");
        return;
    }

    count++;

    const entryTime = new Date().toLocaleTimeString();

    const table = document.getElementById("entryTable");
    const row = table.insertRow();

    row.innerHTML = `
        <td>${count}</td>
        <td>${name}</td>
        <td>${enrollment}</td>
        <td>${department}</td>
        <td>${entryTime}</td>
    `;

    // Clear form
    document.getElementById("entryForm").reset();
});
