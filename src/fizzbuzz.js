// TODO: Write your function in this file

function fizzerBuzzer(lower, upper) {
  const result = []
  for (i = lower; i <= upper; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz')
    } else if (i % 3 === 0) {
      result.push('Fizz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(i)
    }
  }
  return result
}

console.log(fizzerBuzzer(70, 124))

// TODO: Change undefined below to the name of your function
module.exports = fizzerBuzzer
