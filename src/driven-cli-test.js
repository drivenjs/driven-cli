#!/usr/bin/env node
const path = require('path')
const program = require('commander')
const chalk = require('chalk')
const fs = require('fs-sync')
const drivenTest = require('driven-test')
const {loadTests, getTestFiles} = require('./helpers.js')

program
  .version('0.0.1')
  .option('-f, --file [url]', 'File or wildcard')
  .parse(process.argv)

const wildcard = program.file || path.join('**', 'test_*')
const files = getTestFiles(wildcard)

if (files.length == 0) {
  console.log(`No test files at ${program.file}`)
}

loadTests(files)
drivenTest.runner.run()
