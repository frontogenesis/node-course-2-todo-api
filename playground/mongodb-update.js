//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('Todoapp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5aa72dcc6c572a81869216aa')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aa6c63db5429df3818d4fe9')
    }, {
        $set: {
            name: 'Mylanta'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    }, (err) => {
        console.log('Database not updated: ', err.message)
    });

    // client.close();
});