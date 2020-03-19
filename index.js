const react = require('react');
const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;



const todosRoutes = require('./routers/todos');
const app = express();


app.use(express.static(__dirname + '/css'));
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.urlencoded({
    extended: true
}));


app.use(todosRoutes);

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://MrTetris:julia2020@cluster0-c3dal.mongodb.net/guest', {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            });
        app.listen(PORT, () => {
            console.log("Server is starting...");
        });
    } catch (e) {
        console.log(e);
    }
}
start();