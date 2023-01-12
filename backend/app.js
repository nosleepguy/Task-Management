import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { initDatabase } from './repositories/index.js';
import Routes from './Router/user/index.js';
import { logRequest } from './Utils/index.js';

dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
initDatabase();

app.use((req, res, next) => {
    logRequest(req, res, next);
});
Routes.forEach((route) => {
    app[route.method](route.route, route.middleware ? route.middleware : [], (req, res) => { route.action(req, res) })
})
app.listen(PORT, (err) => {
    if (!err) {
        console.log("Listening on port", PORT);
    }
});
