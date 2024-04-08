function multiplesOf3Or5(number) {
    const multiples = [...Array(number).keys()]
    const result = multiples.reduce((curr, next) => {
      return next % 3 == 0 || next % 5 == 0 ? curr + next : curr
    }, 0)
    return result
  }
  
  multiplesOf3Or5(1000);