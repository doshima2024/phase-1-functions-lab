// Code your solution in this file!
function distanceFromHqInBlocks(currentLocation) {

    return Math.abs(currentLocation - 42);
}

function distanceFromHqInFeet(currentLocation) {
   return distanceFromHqInBlocks(currentLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    const ruleOne = Math.abs(destination - start) * 264;
    if (ruleOne < 400) {
        return 0
    }
    else if (400 <= ruleOne && ruleOne <= 2000) {
        return (ruleOne - 400) * .02
    }
    else if (ruleOne > 2000 && ruleOne <= 2500) {
        return 25
    }
    else {
        return ("cannot travel that far")
    }
}