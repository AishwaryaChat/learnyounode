const fs = require('fs')
const path = require('path')

module.exports = function (dirname, extname, cb) {
  fs.readdir(dirname, extname, (err, files) => {
    if (err) {
      return cb(err)
    }
    var ext = '.' + extname
    files = files.filter((file) => {
      if (path.extname(file) === ext) {
        return file
      }
    })
    return cb(null, files)
  })
}
