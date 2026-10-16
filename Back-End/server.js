const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routerurl = require('./router/router');
const bookingurl = require('./router/BookingRouter');
import dotenv from "dotenv";
dotenv.config();

// ✅ Chat AI setup (new OpenAI SDK)
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const dbURI = 'mongodb+srv://user-soundar:soundar2704@cluster0.17hrs.mongodb.net/Hotel-customer-Details?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Error:', err));

// Routes
app.use("/app", routerurl);
app.use("/booking", bookingurl);

// ✅ Chat endpoint (with OpenAI v5)
const openai = new OpenAI({
  apiKey: "your-openai-api-key", // 🔐 Replace with real API key
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    });

    res.json({ reply: aiResponse.choices[0].message.content });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ reply: "AI server error. Try again later." });
  }
});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
