
exports.min = function min (array) {
  if (array && array.length > 0) {
    return array.reduce((min, current) => {
      return min >= current ? current : min;
    })
  }
  return 0;
}

exports.max = function max (array) {
  if (array && array.length > 0) {
    return array.reduce((max, current) => {
      return max >= current ? max : current;
    })
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array && array.length > 0) {
    return (array.reduce((avg, current) => {
      return avg + current
    }))/ array.length
  }
  return 0;
}
