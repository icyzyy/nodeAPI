let express = require('express');
let dotenv = require('dotenv');
let bodyParser = require('body-parser');
let users = require('./routes/routers');
let app = express();
const PORT = 3000;

dotenv.config();

app.disable('x-powered-by');
app.use('/', users);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`server run listening on port ${PORT}`));