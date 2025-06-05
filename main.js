const form = document.getElementById('scoreForm');
const tableBody = document.querySelector('#scoreTable tbody');

form.getEventListenerI('addRound', function e()
    {
    
    e.preventDefault();

    const course= getElementById('course').value;
    const date= getElementById('date').value;
    const score= getElementById('score').value;
    const putts= getElementById('putts').value;
    const greens= getElementById('greens').value;
    const fairways= getElementById('fairways').value;

    tableBody.insertRow(0);
    let cell1 = tableBody.insertCell(0);
    let cell2 = tableBody.insertCell(1);
    let cell3 = tableBody.insertCell(2);
    let cell4 = tableBody.insertCell(3);
    let cell5 = tableBody.insertCell(4);
    let cell6 = tableBody.insertCell(5);

    cell1.innerHTML = course;
    cell2.innerHTML = date;
    cell3.innerHTML = score;
    cell4.innerHTML = putts;
    cell5.innerHTML = greens;
    cell6.innerHTML = fairways;
}
)