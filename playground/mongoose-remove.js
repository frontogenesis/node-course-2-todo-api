const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Remove all docs from database
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Remove one record and remove
// Todo.findOneAndRemove({
//     _id: '5aaa998d6c572a8186924bef'
// }).then((result) => {
//     console.log(result);
// });

// Remove record by ID
Todo.findByIdAndRemove('5aaa998d6c572a8186924bef').then((todo) => {
    console.log(todo);
});
