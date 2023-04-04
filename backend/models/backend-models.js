const mongoose = require('mongoose');


const userschemas = new mongoose.Schema({ name: { type: String, maxLength: 30, required: true }, email: { type: String, required: true }, phonenumber: { type: String, required: true }, password: { type: String, required: true } })
const samplemodel = mongoose.model('user', userschemas);
module.exports = samplemodel