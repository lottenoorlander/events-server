const express = require("express");
const app = express();
const db = require("./db");
const Event = require("./event/model");
const port = 4000;
const eventRouter = require("./event/router");
const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);
const bodyParser = require("body-parser");
const bodyParserMiddleware = bodyParser.json();
app.use(bodyParserMiddleware);

app.use(eventRouter);

app.listen(port, () => console.log("app is listening to port " + port));
