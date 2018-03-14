const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5aa8567995773923d957bf99';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((e) => {
//     console.log(e);
// });

const id = '5aa7e2d6466254150ca70112';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log('Invalid ID:', e.reason);
});