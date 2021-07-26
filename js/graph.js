function showList() {
    var lst = document.getElementById("list-popout-box");
    if (lst.style.display === "none") {
        lst.style.display = "block";
    } else {
        lst.style.display = "none";
    }
}