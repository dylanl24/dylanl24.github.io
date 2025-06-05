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

    var scoreTable = getElementById('scoreTable');

    scoreTable.insertRow(-1);
    var cell1 = scoreTable.insertCell(0);
    var cell2 = scoreTable.insertCell(1);
    var cell3 = scoreTable.insertCell(2);
    var cell4 = scoreTable.insertCell(3);
    var cell5 = scoreTable.insertCell(4);
    var cell6 = scoreTable.insertCell(5);

    cell1.innerHTML = course;
    cell2.innerHTML = date;
    cell3.innerHTML = score;
    cell4.innerHTML = putts;
    cell5.innerHTML = greens;
    cell6.innerHTML = fairways;
}



)
