const os = require('os')

console.log(`Node.js temp dir: ${os.tmpdir()}`)
console.log(`TMP env directory: ${process.env.TMP}`)
console.log(`TEMP env directory: ${process.env.TEMP}`)
