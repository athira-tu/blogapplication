const mongoose = require('mongoose');
const blogschemas = new mongoose.Schema({
    title: { type: String, required: true }, description: { type: String, required: true }, dateposted: { type: String, required: true }, authorname: { type: String, required: true }, authorid: { type: String, required: true },
    category: { type: String, required: true }
})
const blogmodel = mongoose.model('blog', blogschemas);
module.exports = blogmodel