// pseudocode of game framework

/*
define all the constants here
*/
const TECH_POP_COEFT = 0.2 // techpoints generated per capital
const SEA_MAX = 1500 // termination condition concerning sea pollution
const POP_MIN = 1;
const ECO_MAX = 2000;
const RD_MAX, RD_MIN; // TODO define termination condition in terms of time scale
const TECH_MAX = 10 // tmp defined
const FERT_BASE = 0.5 // TODO suggest to set to 0, this determines the average maximum popultion under the current citycapacity, eg. o.5 fert-base corresponds to 1.5 * city capacity
const MORT_BASE = 0.5 // may remove later
const EQ_COEFT = 0.05 // tmp defined
const DOCK_POLL = 100
const CITY_POLL = 200
const CITY_CONS = 1000 // city consumption, 一回合消耗1000 resource points, 能linear about population 更好
const FOREST_ECOB = 50 // forest recovery in terms of ecoImbalance
const POWERP_ECOI = 200 // powerplant harm to ecobalance
const SEA_REC = 200 // sea pollution self recovery

/*
define all the variables here
*/

var population, resourcePoints, techPoints, cityCapacity
var earthquakeLikelihood, seaPollution, ecoImbalance, ecoImbalance;
var numForest, numDock, numFarm, numPowerPlant, numCity; // should be able to read from the array of the map
var round, numTech;
var powerplantGain, farmGain, dockGain;
var conservation; // total effect of conservation achieved by technology
var arrayPerRound = [population, resourcePoints, earthquakeLikelihood, seaPollution, ecoImbalance, techPoints]; // not sure whether this is a best practice

function initState() {
    // assign initial value to all the variables here
    round = 0
    numTechConstructed = 0 // techs on the map placed by the player (not inherited from the initial settin), including powerplant, farm, dock, city
    population = 5000
    cityCapacity = 6000
    resourcePoints = 0
    earthquakeLikehood = 0
    seaPollution = 1000
    ecoImbalance = 1000
    numPowerPlant = 1
    numForest = 5
    numFarm = 1
    numDock = 1
}

function updateValues(arrayPerRound) {
    // as what has been written
    var seaPollution_old = arrayPerRound[3];
    var resourcePoints_old = arrayPerRound[1];
    var ecoImbalance_old = arrayPerRound[4];
    var population_old = arrayPerRound[0];
    var earthquakeLikelihood = (numPowerPlant + numFarm - numForest + numCity) * EQ_COEFT
    var population_new = (FERT_BASE + numTech / TECH_MAX * 0.5 - seaPollution / SEA_MAX + (cityCapcity - population_old) / cityCapacity) *
        population_old + population_old - randomDisaster(earthquakeLikelihood, population_old)
        // var population_new = (coefficient * (1 - population_old / cityCapacity) - seaPollution / SEA_MAX) * population_old + population_old - randomDisaster(earthquakeLikelihood)
    var seaPollution_new = (seaPollution_old + DOCK_POLL * numDock + CITY_POLL * numCity) * 1.01 - SEA_REC - conservation
        // dock 是码头 city是城镇 每回合码头和城镇都会对海洋产生污染 每回合海洋自己可以修复200

    var ecoImbalance_new = ecoImbalance_old + CITY_POLL * numCity + POWERP_ECOI * numPowerPlant - FOREST_ECOB * numForest - conservation
    var resourcePoints_new = resourcePoints_old - cityConsumption + powerplantGain + farmlandlGain + dockGain

    var techPoints_new = arrayPerRound[5] + population_old * TECH_POP_COEFT + qnsAnswered
    var arrayPerRound = [population_new, resourcePoints_new, earthquakeLikelihood, seaPollution_new, ecoImbalance_new, techPoints_new]
}

// not really verified method of generating normally distributed values in js, credit given to https://mika-s.github.io/javascript/random/normal-distributed/2019/05/15/generating-normally-distributed-random-numbers-in-javascript.html

function randomDisaster(p, n) {
    mean = n * p;
    variance = n * p * (1 - p); // here uses a binomial distribution variance, but variance correlates with distribution of population on the map might be more favoruable, this requires access to map
    stdev = Math.sqrt(variance);

    // boxMullerTransform
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0 * stddev + mean;

}

// 6 types of items: city, farm, dock, powerplant, forest
// functions of how adding/removing an item affect resource/tech point and other variables
function addLevelOneCity() {
    // an example
    cityCapacity += 6000
}

function restart() {
    initState();
}

function checkState() {
    // check if goal is achieved/terminating condition is met
}

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