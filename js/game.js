window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() {
        window.location.href = href
    }, 500)
}

if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    document.querySelector('body').style.opacity = 1
} else {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('document was not ready, place code here');
        document.querySelector('body').style.opacity = 1
    });
}

var onHand = null;

function setShovel() {
    if (onHand != "shovel") {
        showSelect('shovel-box');
        onHand = "shovel";
    } else {
        onHand = null;
        hideSelect('shovel-box');
    }
}
var city1Unlock = false;
var dock1Unlock = false;
var power1Unlock = false;

function setCity() {
    showTech();
    if (city1Unlock == false && techPoints < 5) {
        alert("Insufficient tech points to unlock this technology!");
        return;
    };
    if (techPoints >= 5) {
        techPoints -= 5;
        city1Unlock = true
        document.getElementById("tech-point").innerHTML = techPoints;
        alert("Unlock City 1 technology with 5 tech points");
    }
    if (onHand != "city") {
        onHand = "city";
    } else {
        onHand = null;
    }

}

function setDock() {
    showTech();
    if (dock11Unlock == false && techPoints < 5) {
        alert("Insufficient tech points to unlock this technology!");
        return;
    };
    if (techPoints >= 5) {
        techPoints -= 5;
        dock1Unlock = true
        document.getElementById("tech-point").innerHTML = techPoints;
        alert("Unlock Dock 1 technology with 5 tech points");
    }
    if (onHand != "dock") {
        onHand = "dock";
    } else {
        onHand = null;
    }

}

function setFarm() {
    showTech();
    if (onHand != "farm") {
        onHand = "farm";
    } else {
        onHand = null;
    }
}

function setPower() {
    showTech();
    if (power1Unlock == false && techPoints < 5) {
        alert("Insufficient tech points to unlock this technology!");
        return;
    };
    if (techPoints >= 5) {
        techPoints -= 5;
        power1Unlock = true;
        document.getElementById("tech-point").innerHTML = techPoints;
        alert("Unlock Power Plant 1 technology with 5 tech points");
    }
    if (onHand != "powerplant") {
        onHand = "powerplant";
    } else {
        onHand = null;
    }

}
// the following are regarding GUI

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
    beginTheQuiz(); // Show quiz and then immediately begin quiz?
}

var trueBtn, questionText, falseBtn, quitBtn, nextBtn;

window.onload = function() {
    trueBtn = document.getElementById("trueBtn");
    questionText = document.getElementById("questionText");
    falseBtn = document.getElementById("falseBtn");
    nextBtn = document.getElementById("next-question");
    quitBtn = document.getElementById("quit-quiz");
    nextBtn.addEventListener("click", next);
    nextBtn.style.display = "none";
    quitBtn.addEventListener("click", showQuiz);
}

var questionPassed = [];
const TOTAL_QN = 15 // TODO change later
var userScore = 0 // TODO reset userScore when next round begines
const questions = [{
        question: "Government alone should be responsible for the environment. We as individuals are not.",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]
    },
    {
        question: "How much waste does an average person generate per year?",
        answers: [
            { option: "50kg", answer: false },
            { option: "500kg", answer: true }
        ]
    },
    {
        question: "Sewage discharged into rivers do not affect oceans far away.",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]
    },
    {
        question: "Hydro energy, solar energy and wind energy are all clean energy.",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
    {
        question: "Natural gas is renewable energy.",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]
    },
    {
        question: "Carbon dioxide, methane, nitrogen oxide and water vapour are all greenhouse gas.",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
    {
        question: "Deforestation and industrialisation contribute to global warming.",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
    {
        question: "Forests mitigate greenhouse effect through",
        answers: [
            { option: "cell mitosis", answer: false },
            { option: "photosynthesis", answer: true }
        ]
    },
    {
        question: "Sea pollution only affects coastal cities, not inland cities..",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]
    },
    {
        question: "Deforestation causes global warming, biodiversity loss and soil erosion.",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
    {
        question: "Climate change causes extreme weathers, sea level rise and extinction of species.",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
    {
        question: "Individuals\' actions are inconsequential to global warming but industrial corporations.",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]
    },
    {
        question: "Sea level rise causes loss of beach areas, habitat loss to polar bears and stronger storms and floods.",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
    {
        question: "We should give up all polluting modern developments right now.",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]
    },
    {
        question: "Extinction of other species do not concern humans. We care only for humanitarian purposes.",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]
    }
];

function next() {
    beginTheQuiz();
}

function beginTheQuiz() {
    nextBtn.style.display = "none"
    currentQuestion = pickQuizQuestion(questionPassed, TOTAL_QN);
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano = 0;
        if (questions[currentQuestion].answers[ano].answer) {
            userScore += 1;
            techPoints += 1;
            nextBtn.style.display = "block";
            questionPassed.push(currentQuestion);
            alert("Congrats! You've earned one tech point.")
            document.getElementById("tech-point").innerHTML = techPoints;
        } else {
            alert("Please try later.")
            showQuiz()
        }

    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano = 1;
        if (questions[currentQuestion].answers[ano].answer) {
            userScore += 1;
            techPoints += 1;
            nextBtn.style.display = "block"; // TODO  答对了可以答下一题，打错了这一轮不能再答题
            questionPassed.push(currentQuestion);
            alert("Congrats! You've earned one tech point.")
            document.getElementById("tech-point").innerHTML = techPoints;
        } else {
            alert("Please try later.")
            showQuiz()
        }
    }

}

function pickQuizQuestion(questionPassed, TOTAL_QN) {
    if (questionPassed.length == TOTAL_QN) {
        alert("I need sometime to update my archive. Please obtain TechPoints another way.");
    } else {
        currentQuestion = Math.floor(Math.random() * (TOTAL_QN));
        if (currentQuestion in questionPassed) {
            pickQuizQuestion(questionPassed);
        } else {
            return currentQuestion;
        }

    }
}

function showList() {
    printText();
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
    if (name == "shovel-box" && onHand == "shovel") return;
    box.style.backgroundColor = "gray";
    box.style.opacity = 0;
}

var hasSetRhombus = false;
const coordArray = ["002", "006", "101", "103", "107", "109", "202", "204", "210", "212", "311", "313", "412", "507", "511", "812", "901", "903", "905", "911", "1002", "1004", "1006", "1008", "1010", "1101", "1103", "1105", "1107", "1109", "1111", "1202", "1204", "1206", "1208", "1210", "1303", "1305", "1307", "1309", "713", "913", "1012", "1212", "1311"];

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
    initState();
    iconWidth = document.getElementById("rh-313").children[0].width;
    hasSetRhombus = true;
    addRhombus();
    for (let i = 0; i <= 13; i++) {
        for (let j = 1; j <= 13; j++) {
            let row = i.toString();
            let col;
            if (j < 10) {
                col = "0" + j.toString();
            } else {
                col = j.toString();
            }
            let rh = document.getElementById("r_" + row + col);
            if (rh == null) continue;
            rh.style.position = "absolute";
            var width = 2 / 16;
            var height = 2 / 17;
            let top = (j + 1) * (height / 2) * 100;
            let bottom = 100 - top - height * 100;
            let left = i * (width / 2) * 100;
            let right = 100 - left - width * 100;
            top = top + height / 2 * 100 - height / 2 * 2.449 / 2 * 100;
            bottom = bottom + height / 2 * 100 - height / 2 * 2.449 / 2 * 100;
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
            rh.onclick = function() { actEvent(row + col) };
        }
    }
}

var text = "";

function printText() {
    text = "Forest: " + numForest + "\nCity: " + numCity + "\nFarm: " + numFarm + "\nDock: " + numDock + "\nPowerplant: " + numPowerPlant;
    document.getElementById("item-forest").innerHTML = "Forest: " + numForest;
    document.getElementById("item-city").innerHTML = "City: " + numCity;
    document.getElementById("item-farm").innerHTML = "Farm: " + numFarm;
    document.getElementById("item-dock").innerHTML = "Dock: " + numDock;
    document.getElementById("item-pplant").innerHTML = "Powerplant: " + numPowerPlant;
}

var iconWidth;
// what happens to a grid
function actEvent(name) {
    // alert(onHand);
    let ele = document.getElementById("rh-" + name);
    let isDock = beach_arr.includes(name);
    let child = ele.children[0];
    if (onHand == null && isDock && ele.children.length != 0) {
        clickDock();
    } else if (onHand == null) {
        return;
    } else if (onHand == "shovel") {
        if (ele.children.length == 0) {
            onHand = null;
            hideSelect('shovel-box');
            return;
        }
        let imgOld = ele.children[0];
        let itemName = imgOld.alt;
        ele.removeChild(ele.children[0]);
        if (itemName == "forest") numForest--;
        if (itemName == "city") city1.remove();
        if (itemName == "farm") farm1.remove();
        if (itemName == "dock") dock1.remove();
        if (itemName == "powerplant") powerplant1.remove();
        onHand = null;
        hideSelect('shovel-box');
    } else if (onHand == "city") {
        if (ele.children.length != 0 || isDock) {
            onHand = null;
            return;
        }

        let img = document.createElement("img");
        city1.apply();
        img.src = "img/city.png";
        img.alt = "city";
        img.width = iconWidth;
        img.className = "icon";
        ele.appendChild(img);
        onHand = null;
    } else if (onHand == "farm") {
        if (ele.children.length != 0 || isDock) {
            onHand = null;
            return;
        }
        farm1.apply();
        let img = document.createElement("img");
        img.src = "img/farm.png";
        img.alt = "farm";
        img.width = iconWidth;
        img.className = "icon";
        ele.appendChild(img);
        onHand = null;
    } else if (onHand == "dock") {
        if (ele.children.length != 0 || !isDock) {
            onHand = null;
            return;
        }
        dock1.apply();
        let img = document.createElement("img");
        img.src = "img/dock.png";
        img.alt = "dock";
        ele.appendChild(img);
        img.width = iconWidth;
        img.className = "icon";
        onHand = null;
    } else if (onHand == "powerplant") {
        if (ele.children.length != 0 || isDock) {
            onHand = null;
            return;
        }
        powerplant1.apply();
        let img = document.createElement("img");
        img.src = "img/powerplant.png";
        img.alt = "powerplant";
        img.width = iconWidth;
        img.className = "icon";
        ele.appendChild(img);
        onHand = null;
    } else {
        return;
    }

    printText();
}

// below are regarding game core

const POP_MIN = 10;
const ECO_MAX = 2000;
const SEA_MAX = 1500;
const TECH_MAX = 40;
const FERT_BASE = 0.5;
const EQ_COEFT = 0.1;
const SEA_REC = 200;
const SEA_MIN = 600;
const DOCK_POLL = 100;
const CITY_POLL = 200;
const FOREST_ECOB = 50;
const POWERP_ECOI = 200;
const beach_arr = ["713", "913", "1012", "1212", "1311"];

var year, population;
var numTech = 0;
var numDock = 0;
var numFarm = 0;
var numPowerPlant = 0;
var numCity = 0;
var numForest = 0;
var resourceGain = 0;
var popCapacity = 0;
var techGain = 0;
var resourcePoints = 0;
var techPoints = 0;
var earthquakeLikelihood, seaPollution, ecoImbalance;
var arr;
var conservation = 0,
    numClickDock = 0,
    qnsAnswered = 0;

function initState() {
    numTech = 0;
    numDock = 0;
    numFarm = 0;
    numPowerPlant = 0;
    numCity = 0;
    numForest = 40;
    resourceGain = 0;
    popCapacity = 6000; // 0
    techGain = 0;
    resourcePoints = 500;
    techPoints = 0;
    earthquakeLikelihood = 0;
    seaPollution = 1000;
    ecoImbalance = 0;
    year = 0;
    population = 5000;
    arr = [population, year, earthquakeLikelihood, seaPollution, ecoImbalance];
}

function nextRound() {
    updateValues();
    // alert(arr[1] + ",,," + arr[0] + ",,," + resourcePoints + ",,,"+ techPoints + ",,,");
    document.getElementById("time").innerHTML = arr[1] + " year";
    document.getElementById("population").innerHTML = Math.round(arr[0]);
    document.getElementById("resource-point").innerHTML = resourcePoints;
    document.getElementById("tech-point").innerHTML = techPoints;
    checkState();
}

function resetOnclickGain() {
    conservation = 0;
    numClickDock = 0;
    qnsAnswered = 0;
}

function checkState() {
    if (arr[0] < POP_MIN) {
        alert("Too few population!");
        transitionToPage('mission-failed.html');
    } else if (arr[3] > SEA_MAX) {
        alert("Sea is severely polluted!");
        transitionToPage('mission-failed.html');
    } else if (arr[4] > ECO_MAX) {
        alert("Ecosystem is too unbalanced!");
        transitionToPage('mission-failed.html');
    } else if (arr[0] > 50000 && arr[1] >= 200) {
        transitionToPage('mission-success.html');
    } else if (resourcePoints < 0) {
        alert("Running out of resources!")
        transitionToPage("mission-failed.html")
    }
}

function randomDisaster(p, n) {
    if (p > 0 && p < 1) {
        let mean = n * p;
        let variance = n * p * (1 - p);
        let stddev = Math.sqrt(variance);
        let u1 = Math.random();
        let u2 = Math.random();
        let z0 = Math.sqrt(-2 * log(u1)) * conservation(2 * Math.PI * u2);
        return z0 * stddev + mean;
    } else if (p <= 0) {
        return 0;
    } else {
        return n;
    }
}

function updateValues() {
    let population_old = arr[0];
    let seaPollution_old = arr[3];
    earthquakeLikelihood = (numPowerPlant + numFarm - numForest + numCity) * EQ_COEFT;
    let pop_new = (FERT_BASE + numTech / TECH_MAX - seaPollution_old / SEA_MAX + (popCapacity - population_old) / popCapacity) * population_old + population_old - randomDisaster(earthquakeLikelihood, population_old);
    let ecoImbalance_old = arr[4];
    let seaPollution_new = (seaPollution_old + DOCK_POLL * numClickDock + CITY_POLL * numCity) * 1.01 - SEA_REC - conservation;
    if (seaPollution_new < SEA_MIN) {
        seaPollution_new = SEA_MIN;
    }
    let ecoImbalance_new = ecoImbalance_old + CITY_POLL * numCity + POWERP_ECOI * numPowerPlant - FOREST_ECOB * numForest - conservation;

    techPoints += techGain;

    resourcePoints += resourceGain;

    year = arr[1];
    year += 10;
    let techPoints_new = arr[5] + techGain;
    arr = [pop_new, year, earthquakeLikelihood, seaPollution_new, ecoImbalance_new];
}

function clickDock() {
    numClickDock++;
    resourcePoints += 1000;
    document.getElementById("resource-point").innerHTML = resourcePoints;
}

function answerQns() {
    qnsAnswered++;
}

function conserve() {
    resourcePoints -= 500;
    conservation = 100;
    document.getElementById("resource-point").innerHTML = resourcePoints;
}

function Tech(type = "forest", level = 1, techGen = 0, resourceGen = 0, price = 500, numNeg = 1, popCap = 0) {
    this.type = type;
    this.level = level;
    this.tech = techGen;
    this.gain = resourceGen;
    this.price = price;
    this.popCap = popCap;
    this.num = numNeg;
}

var city1 = new Tech("city", 1, 5, resourceGen = -1000, price = 1000, numNeg = 1, popCap = 6000);
var city2 = new Tech("city", 2, 7, resourceGen = -1200, price = 1500, numNeg = 1.2, popCap = 8000); // may not be used in tutorial
var city3 = new Tech("city", 3, 9, resourceGen = -1300, price = 2000, numNeg = 1.3, popCap = 12000); // may not be used in tutorial
var powerplant1 = new Tech("powerplant", 1, 0, resourceGen = 1200, price = 800);
var powerplant2 = new Tech("powerplant", 2, 0, resourceGen = 3000, price = 1500, numNeg = 0.75); // may not be used in tutorial
var powerplant3 = new Tech("powerplant", 3, 0, resourceGen = 10000, price = 3000, numNeg = 0.3); // may not be used in tutorial
var dock1 = new Tech("dock", 1, 0, resourceGen = 1000, price = 600, numNeg = 1);
var farm1 = new Tech("farm", 1, 0, resourceGen = 200, price = 200, numNeg = 1, popCap = 1000); // 0 tech, unlocked when initialized

Tech.prototype.apply = function() {
    resourcePoints -= this.price;
    document.getElementById("resource-point").innerHTML = resourcePoints;
    resourceGain += this.gain;
    popCapacity += this.popCap;
    techGain += this.tech;
    if (this.type != "forest") {
        numTech += 1;
    }
    if (this.type == "dock") {
        numDock += this.num;
    } else if (this.type == "powerplant") {
        numPowerPlant += this.num;
    } else if (this.type == "city") {
        numCity += this.num;
    } else if (this.type == "farm") {
        numFarm += this.num;
    }
}

Tech.prototype.remove = function() {
    // resourcePoints -= this.price;
    resourceGain -= this.gain;
    popCapacity -= this.popCap;
    techGain -= this.tech;
    if (this.type != "forest") {
        numTech -= 1;
    }
    if (this.type == "dock") {
        numDock -= this.num;
    } else if (this.type == "powerplant") {
        numPowerPlant -= this.num;
    } else if (this.type == "city") {
        numCity -= this.num;
    } else if (this.type == "farm") {
        numFarm -= this.num;
    }
}

function cheat() {
    techPoints += 5;
    document.getElementById("resource-point").innerHTML = resourcePoints;
}