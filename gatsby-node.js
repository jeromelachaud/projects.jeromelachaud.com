/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname, "/src")
const projectIdsFile = `${dirPath}/components/_projects-ids.scss`
fs.readdir(`${dirPath}/static`, function(err, files) {
  if (err) {
    console.error("Could not list the directory.", err)
    process.exit(1)
  }

  if (fs.existsSync(projectIdsFile)) {
    fs.unlinkSync(projectIdsFile)
  }

  fs.writeFile(projectIdsFile, "$projects_ids:", function(err) {
    if (err) {
      console.log(err)
    }
  })

  files.forEach(function(file, index) {
    const fileName = file.substring(0, file.length - 4)
    if (fileName === ".DS_S") return
    fs.appendFile(projectIdsFile, `"${fileName}", `, function(err) {
      if (err) return console.log(err)
    })
  })
})
