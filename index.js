const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length-2], drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (riders) {
    return function(fare) {
        return fare*riders;
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, funct){
    return funct(drivers);
}
