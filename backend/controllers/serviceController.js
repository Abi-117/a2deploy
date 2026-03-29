import Service from "../models/Service.js";

/* GET SERVICES */

export const getServices = async (req, res) => {

  try {

    const services = await Service.find();

    res.json(services);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

/* UPDATE SERVICES */

export const updateServices = async (req, res) => {

  try {

    await Service.deleteMany();

    const services = await Service.insertMany(req.body);

    res.json(services);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};