require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Task} = require('./models/Task');
var {User} = require('./models/User');
var {authenticate} = require('./middleware/authenticate');

var app = express();
app.use(bodyParser.json());
var PORT = process.env.PORT;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth");
    res.header("access-control-expose-headers", "x-auth");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    next();
  });

// root of the api
app.get('/', (req, res) => {
    res.send('root api');
});


////////////////////// USER APIS //////////////

// sign a new user up
app.post('/users', async (req, res) => {
    let body = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    let user = new User(body);

    try {
        await user.save()
        const token = await user.generateAuthToken();
        res.header('x-auth', token).send(user);
    } catch(e) {
        res.status(400).send(e);
    };
});

// get the information of loged in user
app.get('/users/me', authenticate ,(req, res) => {
    res.send(req.user);
});

// login a user
app.post('/users/login', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;    

    try {
        var user = await User.findByCredentials(email, password);
        var token = await user.generateAuthToken();
        res.header('x-auth', token).send(user);
    } catch {
        res.status(400).send();
    }
});

// delete a users's token
app.delete('/users/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }).catch((error) => {
        res.status(400).send();
    });
});

// update information of a single user
app.patch('users/:id', (req, res) => {
    res.send('update informateion of a single user')
});


////////////////////// TASKS APIS //////////////

// get back all tasks created by user
app.get('/tasks', authenticate, async (req, res) => {
    try {
        const tasks = await Task.find({_creator: req.user._id});
        res.status(200).send(tasks);
    } catch (e) {
        res.status(400).send(error);
    }
});

// create a new task
app.post('/tasks', authenticate, async (req, res) => {
    var task = new Task({
        title: req.body.title,
        description: req.body.description,
        _creator: req.user._id
    });    

    try {
        const createdTask = await task.save();
        res.status(200).send(createdTask);
    } catch(e) {
        res.status(400).send(error);
    }
});

// get information of a single task
app.get('/tasks/:id', authenticate, async (req, res) => {

    if(!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('Task id is invalid');
    }
    
    try {
        const task = await Task.findOne({_id: req.params.id, _creator: req.user._id});
        if(!task) {
            return res.status(404).send('There is no task by this id');
        } 
        res.status(200).send(task);
    } catch (e) {
        res.status(400).send(error);
    }
});

// detele a singel task
app.delete('/tasks/:id', authenticate, async (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('Task id is invalid');
    }

    try {
        const task = await Task.findOneAndDelete({_id: req.params.id, _creator: req.user._id});
        if (!task) {
            return res.status(404).send('There is no task by this id');
        }
        res.status(200).send(task);
    } catch(e) {
        res.status(400).send('error');
    }
});

// update a single task
app.patch('/tasks/:id', authenticate, async (req, res) => {

    let body = {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    }
    

    if(!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('Task id is invalid');
    }
    

    if(body.completed === true) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false,
        body.completedAt = null
    }

    try {
        var task = await Task.findOneAndUpdate({_id: req.params.id, _creator: req.user._id}, {$set: body}, {new: true});
        if(!task) {
            return res.status(404).send('There is no task by this id');
        }
        res.status(200).send(task);
    } catch(e) {
        res.status(400).send();
    }
});

app.listen(PORT, () => {
    console.log(`server is run on port ${PORT}`);
    
});

