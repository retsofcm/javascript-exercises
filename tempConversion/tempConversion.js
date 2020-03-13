const ftoc = function(temp) {
  return oneDecimal((temp - 32) * 5/9)
}

const ctof = function(temp) {
  return oneDecimal((temp * 9/5) + 32)
}

function oneDecimal(num) {
  return Math.round(num * 10) / 10
}

module.exports = {
  ftoc,
  ctof
}
