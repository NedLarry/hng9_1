const express = require('express');
const cors = require('cors');
const  Util = require('./compiled-js/workings');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors({
    origin: '*'
}));

var port = process.env.PORT || 1337;


app.get('/', (req, res) =>{

    var response = {
        slackUsername: "Ronin",
        backend: true,
        age: 28,
        bio: "Changing the world one semicolon at a time :) "
    }
    res.send(response);
});

app.post('/op', (req, res) => {

    var result = Util.performOperation(req.body);

    res.send(result)
})

app.listen(port, () => {
    console.log("Server running");
});

