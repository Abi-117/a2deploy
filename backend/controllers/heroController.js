import Hero from "../models/Hero.js";

/* GET HERO DATA */
export const getHero = async (req, res) => {
  try {
    let hero = await Hero.findOne();

    if (!hero) {
      hero = await Hero.create({
        badgeText: "Premium Digital Agency — 150+ Projects Delivered",
        title: "We Build Digital Experiences",
        highlightText: "That Grow Businesses",
        description:
          "We craft high-performance websites, powerful marketing strategies, and stunning brand identities that drive real results.",
        typingTexts: [
          "Web Development",
          "SEO Optimization",
          "Digital Marketing",
          "Brand Identity",
          "E-Commerce Solutions",
        ],
        button1Text: "Get Started",
        button1Link: "/contact",
        button2Text: "View Services",
        button2Link: "/services",
        button3Text: "Our Work",
        button3Link: "/portfolio",
      });
    }

    res.json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* UPDATE HERO */
export const updateHero = async (req, res) => {
  try {
    const hero = await Hero.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });

    res.json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};