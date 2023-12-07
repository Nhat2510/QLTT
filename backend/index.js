import express from "express";
import connectToDb from "./src/DB/index.js";
import router from "./src/routes/index.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
    methods: "GET,PUT,POST,DELETE",
};
app.use(cors(corsOptions));

connectToDb(app);
router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
