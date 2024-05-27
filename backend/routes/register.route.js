const bcrypt = require("bcryptjs");
const prisma = require("@prisma/client");
const { Router } = require("express");

const registerRouter = Router();
const prismaClient = new prisma.PrismaClient();

registerRouter.post("/", async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prismaClient.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: "User already exists" });
  }
});

module.exports = { registerRouter };
