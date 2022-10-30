const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));


app.get('/', (req, res) =>{

    res.send(JSON.stringify({
        slackUserName: "Ronin",
        backend: true,
        age: 28,
        bio: "Changing the world one semicolon at a time :) "
    }));
    
});
app.listen(process.env.PORT || 6069, () => {
    console.log("Server running");
});

