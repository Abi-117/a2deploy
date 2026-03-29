import { useEffect,useState } from "react";
import axios from "axios";

export default function AdminValues(){

  const [values,setValues]=useState([]);

  
  const API = `${import.meta.env.VITE_API_URL}/values`;

  const load=async()=>{
    const res=await axios.get(API);
    setValues(res.data);
  };

  useEffect(()=>{load()},[]);

  const updateField=(id,field,value)=>{
    setValues(prev =>
      prev.map(v =>
        v._id===id ? {...v,[field]:value}:v
      )
    );
  };

  const save=async(v)=>{
    await axios.put(`${API}/${v._id}`,v);
    alert("Saved");
  };

  const add=async()=>{
    await axios.post(API,{
      icon:"Target",
      title:"",
      desc:"",
      order:values.length
    });
    load();
  };

  const remove=async(id)=>{
    await axios.delete(`${API}/${id}`);
    load();
  };

  return(
    <div className="p-10 text-black space-y-4 max-w-5xl mx-auto bg-pink-300 shadow-lg rounded-xl mt-10">

      <h2 className="text-xl font-bold">
        Values CMS
      </h2>

      {values.map(v=>(
        <div key={v._id} className="border p-4 space-y-2">

          <input
            value={v.icon}
            placeholder="Icon (Target, Heart, Rocket...)"
            onChange={(e)=>updateField(v._id,"icon",e.target.value)}
            className="border p-3 rounded w-full mb-3"
      />
          

          <input
            value={v.title}
            placeholder="Title"
            onChange={(e)=>updateField(v._id,"title",e.target.value)}
            className="border p-3 rounded w-full mb-3"
      />
          

          <textarea
            value={v.desc}
            placeholder="Description"
            onChange={(e)=>updateField(v._id,"desc",e.target.value)}
            className="border p-3 rounded w-full mb-3"/> 
          

          <button className="bg-blue-500 text-white p-2 rounded" onClick={()=>save(v)}>Save</button>
          <button className="bg-red-500 text-white p-2 rounded" onClick={()=>remove(v._id)}>Delete</button>

        </div>
      ))}

      <button className="bg-green-500 text-white p-2 rounded" onClick={add}>+ Add Value</button>

    </div>
  );
}