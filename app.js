const express = require("express");
const cors = require("cors");
const merchandisesRouter = require("./app/routes/merchandise.route");
//const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Chào mừng bạn đến với ứng dụng quản lý bán hàng"});
});

app.use("/api/merchandises", merchandisesRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports = app;