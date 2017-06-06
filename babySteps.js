// Write a program that accepts one or more numbers as command-line arguments

let sum = 0
for (var i = 2; i < process.argv.length; i++) {
  sum = sum + Number(process.argv[i])
}
console.log(sum)
