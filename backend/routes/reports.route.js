const prisma = require("@prisma/client");
const { Router } = require("express");
const { authenticateToken } = require("../middlewares/authentication");

const reportRouter = Router();
const prismaClient = new prisma.PrismaClient();

reportRouter.get("/", authenticateToken, async (req, res) => {
  const { month, year } = req.query;

  const transactions = await prismaClient.transaction.findMany({
    where: {
      userId: req.user.userId,
      date: {
        gte: new Date(`${year}-${month}-01`),
        lt: new Date(`${year}-${Number(month) + 1}-01`),
      },
    },
  });

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  res.json({ totalIncome, totalExpense, balance: totalIncome - totalExpense });
});

module.exports = { reportRouter };
