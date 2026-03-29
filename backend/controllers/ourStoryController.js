import OurStory from "../models/OurStory.js";
import Milestone from "../models/Milestone.js";

/* GET ALL */
export const getOurStory = async (req, res) => {
  try {
    let story = await OurStory.findOne();

    if (!story) story = await OurStory.create({});

    const milestones = await Milestone.find().sort({ order: 1 });

    res.json({ story, milestones });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE STORY */
export const updateOurStory = async (req, res) => {
  try {
    let story = await OurStory.findOne();

    if (!story) {
      story = await OurStory.create(req.body);
    } else {
      Object.assign(story, req.body);
      await story.save();
    }

    res.json(story);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ADD MILESTONE */
export const addMilestone = async (req, res) => {
  const milestone = await Milestone.create(req.body);
  res.json(milestone);
};

/* UPDATE MILESTONE */
export const updateMilestone = async (req, res) => {
  const updated = await Milestone.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

/* DELETE */
export const deleteMilestone = async (req, res) => {
  await Milestone.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};