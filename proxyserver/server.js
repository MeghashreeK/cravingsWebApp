const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();
const host = '0.0.0.0';
const port = 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: []
}).listen(port, host, () => {
    console.log(`CORS Anywhere server is running on ${host}:${port}`);
});
