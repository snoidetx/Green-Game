function showQuit() {
    var quit = document.getElementById("quit-popout-box");
    var qg = document.getElementById("quit-game");
    var quiz = document.getElementById("quiz-popout-box");
    var lst = document.getElementById("list-popout-box");
    var tech = document.getElementById("tech-popout-box");

    quiz.style.display = "none";
    lst.style.display = "none";
    tech.style.display = "none";

    if (quit.style.display === "none") {
        quit.style.display = "block";
        qg.style.display = "block";  
    } else {
        quit.style.display = "none";
        qg.style.display = "none";
    }
}

function showQuiz() {
    var quit = document.getElementById("quit-popout-box");
    var quiz = document.getElementById("quiz-popout-box");
    var lst = document.getElementById("list-popout-box");
    var tech = document.getElementById("tech-popout-box");

    quit.style.display = "none";
    lst.style.display = "none";
    tech.style.display = "none";

    if (quiz.style.display === "none") {
        quiz.style.display = "block";
    } else {
        quiz.style.display = "none";
    }
}

function showList() {
    var quit = document.getElementById("quit-popout-box");
    var quiz = document.getElementById("quiz-popout-box");
    var lst = document.getElementById("list-popout-box");
    var tech = document.getElementById("tech-popout-box");

    quit.style.display = "none";
    quiz.style.display = "none";
    tech.style.display = "none";

    if (lst.style.display === "none") {
        lst.style.display = "block";
    } else {
        lst.style.display = "none";
    }
}

function showTech() {
    var quit = document.getElementById("quit-popout-box");
    var quiz = document.getElementById("quiz-popout-box");
    var lst = document.getElementById("list-popout-box");
    var tech = document.getElementById("tech-popout-box");

    quiz.style.display = "none";
    lst.style.display = "none";
    quit.style.display = "none";

    if (tech.style.display === "none") {
        tech.style.display = "block";
    } else {
        tech.style.display = "none";
    }
}

function showBorder(name) {
    var rh = document.getElementById(name);
    rh.style.border = "3px solid white";
}

function hideBorder(name) {
    var rh = document.getElementById(name);
    rh.style.border = "3px hidden white";
}

function showSelect(name) {
    let box = document.getElementById(name);
    box.style.backgroundColor = "gray";
    box.style.opacity = 0.5;
}

function hideSelect(name) {
    var box = document.getElementById(name);
    box.style.backgroundColor = "gray";
    box.style.opacity = 0;
}

var hasSetRhombus = false;
const coordArray = ["002", "006", "101", "103", "107", "109", "202", "204", "210", "212", "311", "313", "412", "507", "511", "812", "901", "903", "905", "911", "1002", "1004", "1006", "1008", "1010", "1101", "1103", "1105", "1107", "1109", "1111", "1202", "1204", "1206", "1208", "1210", "1303", "1305", "1307", "1309"];

function addRhombus() {
    for (let i = 0; i < coordArray.length; i++) {
        let ele = document.createElement("div");
        ele.className = "rhombus";
        ele.id = "r_" + coordArray[i];
        ele.onmouseover = function() { showBorder(ele.id) };
        ele.onmouseout = function() { hideBorder(ele.id) };
        document.getElementById("main-grids").append(ele);
    }
}

function setRhombus() {
    if (hasSetRhombus) return;
    hasSetRhombus = true;
    addRhombus();
    for (let i = 0; i <= 13; i++) {
        for (let j = 1; j <= 13; j++) {
            var row = i.toString();
            var col;
            if (j < 10) {
                col = "0" + j.toString();
            } else {
                col = j.toString();
            }
            var rh = document.getElementById("r_" + row + col);
            if (rh == null) continue;
            rh.style.position = "absolute";
            var width = 2/16;
            var height = 2/17;
            var top = (j + 1) * (height / 2) * 100;
            var bottom = 100 - top - height * 100;
            var left = i * (width / 2) * 100;
            var right = 100 - left - width * 100;
            top = top + height / 2 * 100 -height / 2 * 2.449 / 2 * 100;
            bottom = bottom + height / 2 * 100 -height / 2 * 2.449 / 2 * 100;
            left = left + width / 2 * 100 - width / 2 * 1.414 / 2 * 100;
            right = right + width / 2 * 100 - width / 2 * 1.414 / 2 * 100;
            rh.style.top = top.toString() + "%";
            rh.style.bottom = bottom.toString() + "%";
            rh.style.left = left.toString() + "%";
            rh.style.right = right.toString() + "%";
            // alert(rh.style.top + ' ' + rh.style.bottom + ' ' + rh.style.left + ' ' + rh.style.right);
            rh.style.transform = "scale(1, 0.5) rotate(45deg)";
            rh.style.border = "3px hidden white";
            rh.style.opacity = 0.6;
            rh.style.cursor = "pointer";
        }
    }
}
