const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));

var port = process.env.PORT || 1337;


app.get('/', (req, res) =>{

    res.send({
        slackUsername: "Ronin",
        backend: true,
        age: 28,
        bio: "Changing the world one semicolon at a time :) "
    });
    
});
app.listen(port, () => {
    console.log("Server running");
});

