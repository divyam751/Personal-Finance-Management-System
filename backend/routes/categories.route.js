const prisma = require("@prisma/client");
const { Router } = require("express");
const { authenticateToken } = require("../middlewares/authentication");

const categoriesRouter = Router();
const prismaClient = new prisma.PrismaClient();

// create a new category
categoriesRouter.post("/", authenticateToken, async (req, res) => {
  const { name, description } = req.body;

  try {
    const category = await prismaClient.category.create({
      data: { name, description },
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: "Category creation failed" });
  }
});

// get all category
categoriesRouter.get("/", authenticateToken, async (req, res) => {
  try {
    const categories = await prismaClient.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// get a category by id
categoriesRouter.get("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const category = await prismaClient.category.findUnique({
      where: { id: parseInt(id) },
    });
    if (!category) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.json(category);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch category" });
  }
});

// update category

categoriesRouter.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const updatedCategory = await prismaClient.category.update({
      where: { id: parseInt(id) },
      data: { name, description },
    });
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: "Category update failed" });
  }
});

// delete category
categoriesRouter.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await prismaClient.category.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: "Category deletion failed" });
  }
});

module.exports = categoriesRouter;
