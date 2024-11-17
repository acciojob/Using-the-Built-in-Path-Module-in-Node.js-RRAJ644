const path = require('path')

const filePaths = process.argv.slice(2)
const p1 = filePaths[0]
const p2 = filePaths[1]

const joinPaths = (p1, p2) => path.join(p1, p2)

const joinedPath = joinPaths(p1, p2)
console.log(joinedPath)
