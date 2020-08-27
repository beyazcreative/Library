///// this for move by id in html page in all mobile and browser

function MoveId() {
    var elmntToView = document.getElementById(" for exapmle ID");
    elmntToView.scrollIntoView();
}


///// this is for hidden or unhidden objects

var hidden = false;

function action() {
    hidden = !hidden;
    if (hidden) {
        document.getElementById('ID').style.visibility = 'hidden';
    } else {
        document.getElementById('ID').style.visibility = 'visible';
    }
}

//// this code for make error in empity form
var staring = document.getElementById('ID');
if (staring == "") {
    document.write();
}

//// this code for ....