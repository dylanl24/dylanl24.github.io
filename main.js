const form = document.getElementById('scoreForm');
const tableBody = document.querySelector('#scoreTable tbody');

form.addEventListener('addRound', function (e) {
    
    e.preventDefault();

    const course= getElementById('course').value;
    const date= getElementById('date').value;
    const score= getElementById('score').value;
    const putts= getElementById('putts').value;
    const greens= getElementById('greens').value;
    const fairways= getElementById('fairways').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${course}</td>
        <td>${date}</td>
        <td>${score}</td>
        <td>${putts}</td>
        <td>${greens}</td>
        <td>${fairways}</td>
    `;

    tableBody.appendChild(newRow);
    form.reset();
    });