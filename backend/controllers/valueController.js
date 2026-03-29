import Value from "../models/valueModel.js";

/* GET ALL */
export const getValues = async(req,res)=>{
  const values = await Value.find().sort({order:1});
  res.json(values);
};

/* CREATE */
export const createValue = async(req,res)=>{
  const value = await Value.create(req.body);
  res.json(value);
};

/* UPDATE */
export const updateValue = async(req,res)=>{
  const updated = await Value.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.json(updated);
};

/* DELETE */
export const deleteValue = async(req,res)=>{
  await Value.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
};