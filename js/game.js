var onHand = null;

function setShovel() {
    if (onHand != "shovel") {
        onHand = "shovel";
    } else {
        onHand = null;
    }
}

function setCity() {
    showTech();
    if (onHand != "city") {
        onHand = "city";
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

function setDock() {
    showTech();
    if (onHand != "dock") {
        onHand = "dock";
    } else {
        onHand = null;
    }
}

function setPower() {
    showTech();
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
    initState();
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
            var width = 2/16;
            var height = 2/17;
            let top = (j + 1) * (height / 2) * 100;
            let bottom = 100 - top - height * 100;
            let left = i * (width / 2) * 100;
            let right = 100 - left - width * 100;
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
            rh.onclick = function() { actEvent("rh-" + row + col) };
        }
    }
}

// what happens to a grid
function actEvent(name) {
    // alert(onHand);
    let ele = document.getElementById(name);
    let child = ele.children[0];
    if (onHand == null) {
        return;
    } else if (onHand == "shovel") {
        ele.removeChild(ele.children[0]);
        onHand = null;
    } else if (onHand == "city") {
        ele.removeChild(ele.children[0]);
        let img = document.createElement("img");
        img.src = "img/city.png";
        img.width = "100%";
        img.className = "icon";
        ele.appendChild(img);
        onHand = null;
    } else if (onHand == "farm") {
        ele.removeChild(ele.children[0]);
        let img = document.createElement("img");
        img.src = "img/farm.png";
        img.width = "100%";
        img.className = "icon";
        ele.appendChild(img);
        onHand = null;
    } else if (onHand == "dock") {
        ele.removeChild(ele.children[0]);
        let img = document.createElement("img");
        img.src = "img/dock.png";
        ele.appendChild(img);
        img.width = "100%";
        img.className = "icon";
        onHand = null;
    } else if (onHand == "powerplant") {
        ele.removeChild(ele.children[0]);
        let img = document.createElement("img");
        img.src = "img/powerplant.png";
        img.width = "100%";
        img.className = "icon";
        ele.appendChild(img);
        onHand = null;
    } else {
        return;
    }
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
const beach_array = [];

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
var conservation = 0, numClickDock = 0, qnsAnswered = 0;

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
    document.getElementById("time").innerHTML = arr[1];
    document.getElementById("population").innerHTML = arr[0];
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
        return "ERROR_0";
    } else if (arr[3] > SEA_MAX) {
        return "ERROR_1";
    } else if (arr[4] > ECO_MAX) {
        return "ERROR_2";
    } else if (arr[0] > 50000 && arr[1] >= 200) {
        return "SUCCESS";
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
    let pop_new = (FERT_BASE + numTech / TECH_MAX - seaPollution_old / SEA_MAX + (popCapacity - population_old)/popCapacity) * population_old + population_old - randomDisaster(earthquakeLikelihood, population_old);
    let ecoImbalance_old = arr[4];
    let seaPollution_new = (seaPollution_old + DOCK_POLL * numClickDock + CITY_POLL * numCity) * 1.01 - SEA_REC - conservation;
    if (seaPollution_new < SEA_MIN) {
        seaPollution_new = SEA_MIN;
    }
    let ecoImbalance_new = ecoImbalance_old + CITY_POLL * numCity + POWERP_ECOI * numPowerPlant - FOREST_ECOB * numForest - conservation;

    techPoints += techGain + qnsAnswered;

    resourcePoints += resourceGain;

    year = arr[1];
    year += 10;
    let techPoints_new = arr[5] + techGain + qnsAnswered;
    arr = [pop_new, year, earthquakeLikelihood, seaPollution_new, ecoImbalance_new];
}

function clickDock() {
    numClickDock++;
    resourcePoints += 1000;
}

function answerQns() {
    qnsAnswered++;
}

function conserve() {
    resourcePoints -= 500;
    conservation = 100;
}

function Tech(type = "forest", level = 1, techGen=0, resourceGen=0, price=500, numNeg=1, popCap=0) {
    this.type = type;
    this.level = level;
    this.tech = techGen;
    this.gain = resourceGen;
    this.price = price;
    this.popCap = popCap; 
    this.num = numNeg;
}

city1 = Tech("city", 1, 5, resourceGen = -1000, price = 1000, numNeg = 1, popCap = 6000)
city2 = Tech("city", 2, 7, resourceGen = -1200, price = 1500, numNeg = 1.2, popCap = 8000) // may not be used in tutorial
city3 = Tech("city", 3, 9, resourceGen = -1300, price = 2000, numNeg = 1.3, popCap = 12000) // may not be used in tutorial
powerplant1 = Tech("powerplant", 1, 0, resourceGen = 1200, price = 800)
powerplant2 = Tech("powerplant", 2, 0, resourceGen = 3000, price = 1500, numNeg = 0.75) // may not be used in tutorial
powerplant3 = Tech("powerplant", 3, 0, resourceGen = 10000, price = 3000, numNeg = 0.3) // may not be used in tutorial
dock1 = Tech("dock", 1, 0, resourceGen = 1000, price = 600, numNeg = 1)
farm1 = Tech("farm", 1, 0, resourceGen = 200, price = 200, numNeg = 1, popCap = 1000) // 0 tech, unlocked when initialized

Tech.prototype.apply = function() {
    //if (this.type == "dock" && wrong position) {
    //    alert("Dock cannot be built here.");
    //} else {
    resourcePoints -= this.price;
    resourceGain += this.gain;
    popCapacity += this.popCap;
    techGain += this.tech;
    if (this.type != "forest") {
        numTech += 1;
    } else if (this.type == "dock") {
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
    } else if (this.type == "dock") {
        numDock -= this.num;
    } else if (this.type == "powerplant") {
        numPowerPlant -= this.num;
    } else if (this.type == "city") {
        numCity -= this.num;
    } else if (this.type == "farm") {
        numFarm -= this.num;
    }
}


/*

function initState() {
    return;
}

// pseudocode of game framework

const TECH_POP_COEFT = 0.2; // techpoints generated per capital
const SEA_MAX = 1500; // termination condition concerning sea pollution
const POP_MIN = 10;
const ECO_MAX = 2000;
const RD_MAX, RD_MIN; // TODO define termination condition in terms of time scale
const TECH_MAX = 40; // tmp defined
const FERT_BASE = 0.5; // TODO suggest to set to 0, this determines the average maximum popultion under the current citycapacity, eg. o.5 fert-base corresponds to 1.5 * city capacity
const MORT_BASE = 0.5; // may remove later
const EQ_COEFT = 0.1; // tmp defined
const DOCK_POLL = 100;
const CITY_POLL = 200;
const CITY_CONS = 1000; // TODO, remove later, city consumption, 一回合消耗1000 resource points, 能linear about population 更好
const FOREST_ECOB = 50; // forest recovery in terms of ecoImbalance
const POWERP_ECOI = 200; // powerplant harm to ecobalance
const SEA_REC = 250; // sea pollution self recovery
const RES_PC = 0; //resource gained by clicking the dock, to be determined with 
const SEA_MIN = 600;
// TODO 增加population的上限
const FARM1_TP = 2; // TP 是需要多少tech points解锁
const DOCK1_TP = 4;
const LANDCLEAR1_TP = 1;
const POWERPLANT1_TP = 4;
const POWERPLANT2_TP = 12;
const POWERPLANT3_TP = 30;
const CITY1_TP = 5;
const CITY2_TP = 12;
const CITY3_TP = 40;

/*

var population, resourcePoints, techPoints, popCapacity;
var earthquakeLikelihood, seaPollution, ecoImbalance, ecoImbalance;
var numForest, numDock, numFarm, numPowerPlant, numCity, numTechConstructed, cityCapacity; // should be able to read from the array of the map
var round, numTech;
var resourceGain, techGain, powerplantGain, farmGain, dockGain;
var conservation; // total effect of conservation achieved by technology
 // not sure whether this is a best practice
var yearCount = 0;
var numClickDock;
var arrayPerRound;

function initState() {
    // assign initial value to all the variables here
    round = 0;
    numTechConstructed = 0; // techs on the map placed by the player (not inherited from the initial settin), including powerplant, farm, dock, city
    population = 5000;
    cityCapacity = 6000;
    powerplantGain = 120; // TODO change later
    farmGain = 0; // TODO change later
    dockGain = 0; // TODO change later
    techGain = 5;
    resourcePoints = 500;
    earthquakeLikehood = 0;
    seaPollution = 1000;
    ecoImbalance = 0;
    numPowerPlant = 1;
    numForest = 5;
    numFarm = 1;
    numDock = 1;
    numCity = 1;
    numClickDock = 0; //TODO add the function of clicking dock
    arrayPerRound = [population, resourcePoints, earthquakelikelihood, seaPollution, ecoImbalance, techPoints];
}


function updateValues(arrayPerRound) {
    // as what has been written
    var seaPollution_old = arrayPerRound[3];
    var resourcePoints_old = arrayPerRound[1];
    var ecoImbalance_old = arrayPerRound[4];
    var population_old = arrayPerRound[0];
    var earthquakeLikelihood = (numPowerPlant + numFarm - numForest + numCity) * EQ_COEFT // aka when numPowerPlant + numFarm - numForest + numCity >= 1/EQ_COEFT, the game will terminate next round
    var population_new = (FERT_BASE + numTech / TECH_MAX - seaPollution / SEA_MAX + (popCapcity - population_old) / popCapacity) *
        population_old + population_old - randomDisaster(earthquakeLikelihood, population_old)
        // var population_new = (coefficient * (1 - population_old / cityCapacity) - seaPollution / SEA_MAX) * population_old + population_old - randomDisaster(earthquakeLikelihood)
    var seaPollution_new = (seaPollution_old + DOCK_POLL * numClickDock + CITY_POLL * numCity) * 1.01 - SEA_REC - conservation
        // dock 是码头 city是城镇 每回合码头和城镇都会对海洋产生污染 每回合海洋自己可以修复200, if nothing is done, terminate in 5 rounds
    if (seaPollution_new < SEA_MIN) {
        seaPollution_new = SEA_MIN
    }
    var ecoImbalance_new = ecoImbalance_old + CITY_POLL * numCity + POWERP_ECOI * numPowerPlant - FOREST_ECOB * numForest - conservation
    var resourcePoints_new = resourcePoints_old + resourceGain

    var techPoints_new = arrayPerRound[5] + techGain + qnsAnswered
    var arrayPerRound = [population_new, resourcePoints_new, earthquakeLikelihood, seaPollution_new, ecoImbalance_new, techPoints_new] 
    return arrayPerRound // 建议print的时候有个和上一轮的对比
}

// not really verified method of generating normally distributed values in js, credit given to https://mika-s.github.io/javascript/random/normal-distributed/2019/05/15/generating-normally-distributed-random-numbers-in-javascript.html

function randomDisaster(p, n) {
    if (0 < p < 1) {
        mean = n * p;
        variance = n * p * (1 - p); // here uses a binomial distribution variance, but variance correlates with distribution of population on the map might be more favoruable, this requires access to map
        stdev = Math.sqrt(variance);

        // boxMullerTransform
        const u1 = Math.random();
        const u2 = Math.random();
        const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        return z0 * stddev + mean;
    } else if (p <= 0) {
        return 0;
    } else {
        return n;
    }

}

// 6 types of items: city, farm, dock, powerplant, forest
// functions of how adding/removing an item affect resource/tech point and other variables


function Tech(type = "forest", level = 1, techGen = 0, resourceGen = 0, price = 500, numNeg = 1, popCap = 0) {
    this.type = type;
    this.level = level;
    this.tech = techGen;
    this.gain = resourceGen;
    this.price = price;
    this.popCap = popCap; // TODO change cityCap to popCap
    this.num = numNeg;
}

city1 = Tech("city", 1, 5, resourceGen = -1000, price = 1000, numNeg = 1, popCap = 6000)
city2 = Tech("city", 2, 7, resourceGen = -1200, price = 1500, numNeg = 1.2, popCap = 8000) // may not be used in tutorial
city3 = Tech("city", 3, 9, resourceGen = -1300, price = 2000, numNeg = 1.3, popCap = 12000) // may not be used in tutorial
powerplant1 = Tech("powerplant", 1, 0, resourceGen = 1200, price = 800)
powerplant2 = Tech("powerplant", 2, 0, resourceGen = 3000, price = 1500, numNeg = 0.75) // may not be used in tutorial
powerplant3 = Tech("powerplant", 3, 0, resourceGen = 10000, price = 3000, numNeg = 0.3) // may not be used in tutorial
dock1 = Tech("dock", 1, 0, resourceGen = 1000, price = 600, numNeg = 1)
farm1 = Tech("farm", 1, 0, resourceGen = 200, price = 200, numNeg = 1, popCap = 1000) // 0 tech, unlocked when initialized

Tech.prototype.apply = function(position) {
    if (this.type = "dock") { // 如果dock不在沿海，就不能建
        console.error();
    } else {
        resourcePoints -= this.price;
        resourceGain += this.gain; //TODO change to resourceGain
        if (this.type != "dock") {
            techGain += this.tech
        }
        popCapacity += this.popCap
        if (this.type != "forest") {
            numTech += 1
        } else {
            if (this.type = "dock") {
                numDock += this.num;
            } else if (this.type = "powerplant") {
                numPowerPlant += this.num;
            } else if (this.type = "city") {
                numCity += this.num
            } else if (this.type = "farm") {
                numFarm += this.num
            }
        }
    }
}

function restart() {
    initState();
}

function clickNum() {
    // 玩家点击 的function
    numDock++
    arrayPerRound[1] += 1000
}

function nextRound() {
    updateValues(arrayPerRound);
    checkState(arrayPerRound);
}

function checkState() {
    if (arrayPerRound[0] < POP_MIN) {
            return "Simulation fails due to too low population.";
        }else if (arrayPerRound[3] > SEA_MAX) {
            return "Simulation fails due to too high sea pollution.";
        }else if (arrayPerRound[4] > ECO_MAX) {
            return "Simulation fails due to too great ecosystem Imbalance.";
        }else if (arrayPerRound[0] > 50000 && yearCount >= 200) {
            return "Simulation Success";
        }else {
               yearCount +=10;}
}

*/