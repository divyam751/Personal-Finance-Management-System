const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const { registerRouter } = require("./routes/register.route");
const { loginRouter } = require("./routes/login.route");
const { budgetsRouter } = require("./routes/budgets.route");
const { conversionRouter } = require("./routes/conversion.route");
const { reportRouter } = require("./routes/reports.route");
const { trackingRouter } = require("./routes/tracking.route");
const { transactionsRouter } = require("./routes/transactions.route");
const categoriesRouter = require("./routes/categories.route");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Api is working it's Home Route");
});

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/budgets", budgetsRouter);
app.use("/convert", conversionRouter);
app.use("/reports/monthly", reportRouter);
app.use("/reports/categories", trackingRouter);
app.use("/transactions", transactionsRouter);
app.use("/categories", categoriesRouter);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
