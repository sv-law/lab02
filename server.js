// Require the Express module
const express = require('express');
// Create an Express web application instance
const app = express();

// Specify how to respond to GET /
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Start listening for HTTP requests on port 3000
app.listen(3000, () => {
    console.log('Server started');
});
