const { authenticateToken } = require("../middlewares/authentication");
const prisma = require("@prisma/client");
const { Router } = require("express");

const trackingRouter = Router();
const prismaClient = new prisma.PrismaClient();

trackingRouter.get("/", authenticateToken, async (req, res) => {
  const { month, year } = req.query;

  const transactions = await prismaClient.transaction.findMany({
    where: {
      userId: req.user.userId,
      date: {
        gte: new Date(`${year}-${month}-01`),
        lt: new Date(`${year}-${Number(month) + 1}-01`),
      },
    },
    include: { category: true },
  });

  const expensesByCategory = transactions.reduce((acc, t) => {
    if (t.type === "expense") {
      const category = t.category.name;
      if (!acc[category]) acc[category] = 0;
      acc[category] += t.amount;
    }
    return acc;
  }, {});

  res.json(expensesByCategory);
});

module.exports = { trackingRouter };
