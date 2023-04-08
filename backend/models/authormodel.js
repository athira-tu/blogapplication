const mongoose = require('mongoose')
const authorschemas = new mongoose.Schema({ authorname: { type: String }, comment: { type: String }, dateposted: { type: String }, blogid: { type: String }, authorid: { type: String } })

const authormodel = mongoose.model('author', authorschemas)
module.exports = authormodel