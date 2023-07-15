


function findMatching(array, query) {
    const lower = query.toLowerCase()
    const result = array.filter(el => el.toLowerCase() === lower)
    return result
}


function fuzzyMatch(array, query) {
    let result = array.filter(el => el.toLowerCase().startsWith(query.toLowerCase()))
    return result
}

function matchName(array, query) {
    let result = array.filter(el => el.name === query)
    return result
}
