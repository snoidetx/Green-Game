function showList() {
    var lst = document.getElementById("list-popout-box");
    var tech = document.getElementById("tech-popout-box");

    tech.style.display = "none";

    if (lst.style.display === "none") {
        lst.style.display = "block";
    } else {
        lst.style.display = "none";
    }
}

function showTech() {
    var lst = document.getElementById("list-popout-box");
    var tech = document.getElementById("tech-popout-box");

    lst.style.display = "none";

    if (tech.style.display === "none") {
        tech.style.display = "block";
    } else {
        tech.style.display = "none";
    }
}