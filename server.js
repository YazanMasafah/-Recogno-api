const express = require('express');

const app = express();

const database = {
    users: [
        {
            id: '123',
            name: 'yazan',
            email: 'yazan@xyz.com',
            password: 'iloveu',
            entries: 0,
            joined: new Date()
        },
        {
            id: '456',
            name: 'omar',
            email: 'omar@xyz.com',
            password: 'iloveu2',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send('this is working');
})

app.post('/signin', (req, res) => {
    res.json('signin');
})

app.listen(4000,()=> {
console.log('app is running on port 4000');
})

/*
res = this is working
/signin --> pot = Success /Fail
/register --> post = user
/profile/userId --> get = user
/image --> put --> user or count


*/