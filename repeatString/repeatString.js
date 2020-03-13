const repeatString = function(string, num) {
    let repeatedString = '';
    let i = 0;

    if (num < 0) return 'ERROR';

    if (num == 0) return repeatedString;

    while (i < num) {
        repeatedString += string;
        i++;
    }

    return repeatedString;
}

module.exports = repeatString
