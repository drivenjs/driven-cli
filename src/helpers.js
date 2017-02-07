const path = require('path')
const fs = require('fs-sync')


const loadTests = (files) => files.forEach(require)

const getTestFiles = (widcard) => {
  if(!path.isAbsolute(wildcard)) {
    wildcard = path.join(process.cwd(), wildcard)
  }

  const files = fs.expand(wildcard)
    .filter((file) => file.indexOf('node_modules') === -1)

  return files
}

module.exports = {
  loadTests: loadTests,
  getTestFiles: getTestFiles
}
