const axios = require("axios");
const { Router } = require("express");

const conversionRouter = Router();

conversionRouter.get("/", async (req, res) => {
  const { amount, fromCurrency, toCurrency } = req.query;

  // Input validation
  if (!amount || !fromCurrency || !toCurrency) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const CONVERSION_API = process.env.CONVERSION_API;
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${CONVERSION_API}/latest/${fromCurrency}`
    );

    if (!response.data || !response.data.conversion_rates) {
      return res.status(404).json({ error: "Currency data not found" });
    }

    const conversionRates = response.data.conversion_rates;

    if (!conversionRates.hasOwnProperty(toCurrency)) {
      return res
        .status(404)
        .json({ error: `Conversion rate for ${toCurrency} not found` });
    }

    const rate = conversionRates[toCurrency];
    const convertedAmount = amount * rate;

    // Sending success response with converted amount and original parameters
    res.json({
      success: true,
      convertedAmount,
      originalAmount: amount,
      fromCurrency,
      toCurrency,
    });
  } catch (error) {
    console.error("Currency conversion failed:", error.message);
    res.status(500).json({ error: "Currency conversion failed" });
  }
});

module.exports = { conversionRouter };
