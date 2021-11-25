// Code your solution here
function findMatching(array, string) {
    let nameMatch = array.filter(function(driver){
        return driver.toLowerCase() === string.toLowerCase()
    });
    return nameMatch
};

function fuzzyMatch(array, string){
    let letterMatch = array.filter(function(driver){
        return driver.startsWith(string)
    })
    return letterMatch
}

function matchName(array, string){
    let match = array.filter(function(driver){
        return driver.name === string || driver.hometown === string
    })
    return match
}