const fs = require('fs-extra')
const path = require('path')

exports.onPostBuild = () => {
  console.log('Copying locales ...')
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales')
  )
}

// https://github.com/gatsbyjs/gatsby/issues/4750
// XMLHttpRequest polyfill
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
