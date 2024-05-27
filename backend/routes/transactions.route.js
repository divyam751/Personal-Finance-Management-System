const { authenticateToken } = require("../middlewares/authentication");
const prisma = require("@prisma/client");
const { Router } = require("express");

const transactionsRouter = Router();
const prismaClient = new prisma.PrismaClient();

transactionsRouter.get("/", authenticateToken, async (req, res) => {
  const transactions = await prismaClient.transaction.findMany({
    where: { userId: req.user.userId },
    include: { category: true },
  });
  res.json(transactions);
});

transactionsRouter.post("/", authenticateToken, async (req, res) => {
  const { amount, type, categoryId, description, date } = req.body;

  const transaction = await prismaClient.transaction.create({
    data: {
      amount,
      type,
      categoryId,
      description,
      date,
      userId: req.user.userId,
    },
  });
  res.status(201).json(transaction);
});

transactionsRouter.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { amount, type, categoryId, description } = req.body;

  const transaction = await prismaClient.transaction.update({
    where: { id: Number(id) },
    data: { amount, type, categoryId, description },
  });
  res.json(transaction);
});

transactionsRouter.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  await prismaClient.transaction.delete({ where: { id: Number(id) } });
  res.status(204).end();
});

module.exports = { transactionsRouter };
