const { authenticateToken } = require("../middlewares/authentication");
const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");

const budgetsRouter = Router();
const prismaClient = new PrismaClient();

// Get budgets for authenticated user
budgetsRouter.get("/", authenticateToken, async (req, res) => {
  try {
    const budgets = await prismaClient.budget.findMany({
      where: { userId: req.user.userId },
    });
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch budgets" });
  }
});

// Add a new budget
budgetsRouter.post("/", authenticateToken, async (req, res) => {
  const { amount, categoryId, startDate, endDate } = req.body;

  try {
    const budget = await prismaClient.budget.create({
      data: {
        amount,
        categoryId,
        startDate,
        endDate,
        userId: req.user.userId,
      },
    });
    res.status(201).json(budget);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create budget" });
  }
});

// Update a budget
budgetsRouter.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { amount, categoryId, startDate, endDate } = req.body;

  try {
    const budget = await prismaClient.budget.update({
      where: { id: Number(id) },
      data: { amount, categoryId, startDate, endDate },
    });
    res.json(budget);
  } catch (error) {
    res.status(400).json({ error: "Failed to update budget" });
  }
});

// Delete a budget
budgetsRouter.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await prismaClient.budget.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: "Failed to delete budget" });
  }
});

module.exports = { budgetsRouter };
