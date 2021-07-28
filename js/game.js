// pseudocode of game framework

/*
define all the constants here
*/
const TECH_POP_COEFT = 0.2 // techpoints generated per capital
const SEA_MAX = 1500 // termination condition concerning sea pollution
const POP_MIN = 10;
const ECO_MAX = 2000;
const RD_MAX, RD_MIN; // TODO define termination condition in terms of time scale
const TECH_MAX = 40 // tmp defined
const FERT_BASE = 0.5 // TODO suggest to set to 0, this determines the average maximum popultion under the current citycapacity, eg. o.5 fert-base corresponds to 1.5 * city capacity
const MORT_BASE = 0.5 // may remove later
const EQ_COEFT = 0.1 // tmp defined
const DOCK_POLL = 100
const CITY_POLL = 200
const CITY_CONS = 1000 // TODO, remove later, city consumption, 一回合消耗1000 resource points, 能linear about population 更好
const FOREST_ECOB = 50 // forest recovery in terms of ecoImbalance
const POWERP_ECOI = 200 // powerplant harm to ecobalance
const SEA_REC = 250 // sea pollution self recovery
const RES_PC = 0 //resource gained by clicking the dock, to be determined with 
const SEA_MIN = 600
    // TODO 增加population的上限
const FARM1_TP = 2 // TP 是需要多少tech points解锁
const DOCK1_TP = 4
const LANDCLEAR1_TP = 1
const POWERPLANT1_TP = 4
const POWERPLANT2_TP = 12
const POWERPLANT3_TP = 30
const CITY1_TP = 5
const CITY2_TP = 12
const CITY3_TP = 40

/*
define all the variables here
*/

var population, resourcePoints, techPoints, popCapacity;
var earthquakeLikelihood, seaPollution, ecoImbalance, ecoImbalance;
var numForest, numDock, numFarm, numPowerPlant, numCity; // should be able to read from the array of the map
var round, numTech;
var resourceGain, techGain;
var conservation; // total effect of conservation achieved by technology
 // not sure whether this is a best practice
var yearCount = 0

function main() {
    //infinite loop telling when to terminate, 
    initState()
    while (True) {
        //玩家操作 拖拽，答题等
        updateValues(arrayPerRound)
        randomDisaster(arrayPerRound[2])
        if (arrayPerRound[0] < POP_MIN) {
            return "Simulation fails due to too low population."
        }else if (arrayPerRound[3] > SEA_MAX) {
            return "Simulation fails due to too high sea pollution."
        }else if (arrayPerRound[4] > ECO_MAX) {
            return "Simulation fails due to too great ecosystem Imbalance."
        }else {
               yearCount +=10}
    }
}

function initState() {
    // assign initial value to all the variables here
    round = 0
    numTechConstructed = 0 // techs on the map placed by the player (not inherited from the initial settin), including powerplant, farm, dock, city
    population = 5000
    cityCapacity = 6000
    powerplantGain = 120 // TODO change later
    farmGain = 0 // TODO change later
    dockGain = 0 // TODO change later
    techGain = 5
    resourcePoints = 500
    earthquakeLikehood = 0
    seaPollution = 1000
    ecoImbalance = 0
    numPowerPlant = 1
    numForest = 5
    numFarm = 1
    numDock = 1
    numCity = 1
    numClickDock = 0 //TODO add the function of clicking dock
    arrayPerRound = [population, resourcePoints, earthquakelikelihood, seaPollution, econImbalance, techPoints]
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
    var arrayPerRound = [population_new, resourcePoints_new, earthquakeLikelihood, seaPollution_new, ecoImbalance_new, techPoints_new] // 建议print的时候有个和上一轮的对比
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
/* function addLevelOneCity() {
    // an example
    if (resourcePoints < 1000)
        console.error
    else {
        resourcePoints -= 1000
        cityCapacity += 6000
    }
}

function addLevelTwoCity() {
    // attributes are logarithmic to price
    if (resourcePoints < 2000)
        console.error
    else {
        resourcePoints -= 1500
        cityCapacity += 10000
    }
}

function addLevelThreeCity() {
    // similarly
    if (resourcePoints < 3000)
        console.error
    else {
        resourcePoints -= 2000
        cityCapacity += 15000
    }
} */

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
        techGain += this.tech;
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

function checkState() {
    // check if goal is achieved/terminating condition is met
}

function main() {
    initState();

    while (true) {
        updateValues();

        // then player will trigger a series of actions

        if (player clicks next round) {
            checkState();
            if (goal is achieved) {
                show mission completed;
            } else if (terminating condition is met) {
                show mission failed;
            } else {
                continue;
            }
        }
    }

}
