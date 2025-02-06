const express = require('express');


// express instace 
const app = express();


const port = 3000;

app.get('/', (req, res) => {
    res.send('Backend Begins');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});