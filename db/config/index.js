const mongoose = require('mongoose');
const URI = 'mongodb://test:test@ds143907.mlab.com:43907/mongo-todo-list'

const connection = mongoose.connect(URI, {}).then(() => {
  console.log('Successfully connected to Database')
});

module.exports = connection;