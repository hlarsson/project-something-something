const express = require('express');
const app = express();
app.get('/login', (res, req) => {
    res.send({status: 'success'});
});
app.listen(3000, () => {
    console.log("Server running...");
})