const express = require('express');

const app = express();
// npx http-server -c-1 -p 8080 -P http://localhost:3000
// http://localhost:8080/
app.listen(3000, () => console.log('app is running'));
