const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes')

require('dotenv/config');
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, (req, res) => {
    console.log('Rodando na porta ' + port);
    console.log(`link: http://localhost:${port}`);
})
