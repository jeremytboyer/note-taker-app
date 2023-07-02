const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'));


app.get('*', (clientReq, serverRes) => {
    serverRes.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(3333, () => console.log('port running on 3333'))