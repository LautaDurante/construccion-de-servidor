const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = expres();

app.use(express.json())
app.use(require("../routes/home.routes"))

const port = 3000
