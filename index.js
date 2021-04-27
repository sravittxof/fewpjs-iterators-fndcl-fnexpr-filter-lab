// Code your solution here
function findMatching(drivers, string){
    const matches = drivers.filter(name => {
        return name.toUpperCase() === string.toUpperCase();
    });
    return matches;
}

function fuzzyMatch(drivers, string){
    const matches = drivers.filter(name => {
        return name.slice(0, string.length) === string;
    })
    return matches;
}

function matchName(drivers, string){
    const matches = drivers.filter(driver => {
        return driver['name'] === string;
    })
    return matches;
}