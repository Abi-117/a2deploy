import Client from "../models/Client.js";

/* GET CLIENTS */
export const getClients = async (req, res) => {
  try {

    const clients = await Client.find();

    res.json(clients);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};

/* UPDATE CLIENTS */

export const updateClients = async (req, res) => {

  try {

    await Client.deleteMany();

    const clients = await Client.insertMany(req.body);

    res.json(clients);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};