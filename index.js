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
        bio: "Striving to live a bug-free life."
    }));
    
});
app.listen(6069, () => {
    console.log("Server running");
});

