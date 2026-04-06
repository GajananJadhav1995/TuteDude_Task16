// I created this array to store student data

var students = [
    { name: "Rahul", marks: 85, class: "10th", address: "Pune" },
    { name: "Sneha", marks: 90, class: "9th", address: "Mumbai" },
    { name: "Amit", marks: 75, class: "8th", address: "Nagpur" },
    { name: "Priya", marks: 88, class: "10th", address: "Nashik" },
    { name: "Karan", marks: 70, class: "7th", address: "Solapur" },
    { name: "Sagar", marks: 82, class: "9th", address: "Kolhapur" }
];

// I got container where I will show cards
var container = document.getElementById("cards");


// function to display students
function displayStudents(list) {

    // earlier I used innerHTML += but it was slow
    // so now I am building full html first

    var html = "";

    for (var i = 0; i < list.length; i++) {

        html = html + `
        <div class="card">
            <h3>${list[i].name}</h3>
            <p>Marks: ${list[i].marks}</p>
            <p>Class: ${list[i].class}</p>
            <p>Address: ${list[i].address}</p>
        </div>
        `;
    }

    container.innerHTML = html;
}


// when page loads show all students
displayStudents(students);


// search function
function searchStudent() {

    // get value from input
    var value = document.getElementById("searchBox").value;

    var result = [];

    // I used filter to check each student
    result = students.filter(function(item) {

        // exact match
        if (item.name === value) {
            return true;
        }

        // starting match
        // I used startsWith because requirement says start only
        if (item.name.startsWith(value)) {
            return true;
        }

        return false;
    });

    // if nothing typed show all
    if (value === "") {
        displayStudents(students);
    } else {
        displayStudents(result);
    }
}