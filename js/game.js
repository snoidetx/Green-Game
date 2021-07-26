// pseudocode of game framework

/*
define all the constants here
*/

/*
define all the variables here
*/

function initState() {
    // assign initial value to all the variables here
}

function updateValues() {
    // as what has been written
}


// 6 types of items: city, farm, dock, mine, forest, energy
// functions of how adding/removing an item affect resource/tech point and other variables
function addLevelOneCity() {
    // an example
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

