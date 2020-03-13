const removeFromArray = function(arr, ...toRemove) {
    loop:
    for (let el of toRemove) {
        if (arr.indexOf(el) < 0) continue loop
        
        arr.splice(arr.indexOf(el), 1)
    }
    
    return arr;
}

module.exports = removeFromArray
