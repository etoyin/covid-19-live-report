const mongoose = require('mongoose');
const schema = require('./schema');

const PostSchema = mongoose.Schema(schema)

module.exports = mongoose.model('Posts', PostSchema);