const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");

const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());

const SECRET_KEY = process.env.SECRET_KEY;

app.get("/", (req, res) => {
  res.status(200).send({ message: "Home Route" });
});

// User registration
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: "Email already exists" });
  }
});

// User login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// Create a transaction
app.post("/transactions", async (req, res) => {
  const { userId, type, amount, date, categoryId, description } = req.body;

  try {
    const transaction = await prisma.transaction.create({
      data: {
        userId,
        type,
        amount,
        date: new Date(date),
        categoryId,
        description,
      },
    });
    res.status(201).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create transaction" });
  }
});

// Get all transactions for a user
app.get("/transactions/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: parseInt(userId) },
    });
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch transactions" });
  }
});

// Update a transaction
app.put("/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const { type, amount, date, categoryId, description } = req.body;

  try {
    const transaction = await prisma.transaction.update({
      where: { id: parseInt(id) },
      data: {
        type,
        amount,
        date: new Date(date),
        categoryId,
        description,
      },
    });
    res.json(transaction);
  } catch (error) {
    res.status(400).json({ error: "Failed to update transaction" });
  }
});

// Delete a transaction
app.delete("/transactions/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.transaction.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete transaction" });
  }
});

// Create a category
app.post("/categories", async (req, res) => {
  const { name, description } = req.body;

  try {
    const category = await prisma.category.create({
      data: {
        name,
        description,
      },
    });
    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create category" });
  }
});

// Get all categories
app.get("/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch categories" });
  }
});

// Get a category by ID
app.get("/categories/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
    });
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch category" });
  }
});

// Update a category
app.put("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const category = await prisma.category.update({
      where: { id: parseInt(id) },
      data: {
        name,
        description,
      },
    });
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: "Failed to update category" });
  }
});

// Delete a category
app.delete("/categories/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.category.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete category" });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
