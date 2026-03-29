import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";
import featureRoutes from "./routes/featureRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import techRoutes from "./routes/techRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import aboutHeroRoutes from "./routes/aboutHeroRoutes.js";
import ourStoryRoutes from "./routes/ourStoryRoutes.js";
import valueRoutes from "./routes/valueRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import servicepageRoutes from "./routes/servicepageRoutes.js";
import pricingRoutes from "./routes/pricingRoutes.js";
import processRoutes from "./routes/processRoutes.js";


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api", clientRoutes);
app.use("/api/services-main", serviceRoutes);
app.use("/api", statsRoutes);
app.use("/api", featureRoutes);
app.use("/api", aboutRoutes);
app.use("/api/tech", techRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/about-hero", aboutHeroRoutes);
app.use("/api/our-story", ourStoryRoutes);
app.use("/api/values", valueRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/services", servicepageRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/process", processRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);