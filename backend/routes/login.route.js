const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = require("@prisma/client");
const { Router } = require("express");

const loginRouter = Router();
const prismaClient = new prisma.PrismaClient();

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  const JWT_SECRET = process.env.JWT_SECRET;

  const user = await prismaClient.user.findUnique({ where: { email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = { loginRouter };
