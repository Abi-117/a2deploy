import { useEffect, useState } from "react";
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/process`;

export default function AdminProcess() {

  const [steps,setSteps] = useState<any[]>([]);

  const [form,setForm] = useState({
    title:"",
    desc:"",
    icon:"Lightbulb",
    details:[""],
    order:0
  });

  const [editing,setEditing] = useState<string|null>(null);

  const load = async ()=>{
    const res = await axios.get(API);
    setSteps(res.data);
  };

  useEffect(()=>{ load(); },[]);

  const save = async ()=>{

    const payload = {
      ...form,
      details: form.details.filter(d=>d.trim())
    };

    if(editing)
      await axios.put(`${API}/${editing}`,payload);
    else
      await axios.post(API,payload);

    setEditing(null);
    setForm({
      title:"",
      desc:"",
      icon:"Lightbulb",
      details:[""],
      order:0
    });

    load();
  };

  const edit = (s:any)=>{
    setForm(s);
    setEditing(s._id);
  };

  const remove = async(id:string)=>{
    await axios.delete(`${API}/${id}`);
    load();
  };

  const updateDetail=(i:number,val:string)=>{
    const arr=[...form.details];
    arr[i]=val;
    setForm({...form,details:arr});
  };

  return (
    <div className="p-10 text-black space-y-4 max-w-5xl mx-auto bg-pink-300 shadow-lg rounded-xl mt-10">

      <h2 className="text-3xl font-bold">Process Admin</h2>

      <input
        placeholder="Title"
        value={form.title}
        onChange={e=>setForm({...form,title:e.target.value})}
        className="border p-3 w-full"
      />

      <textarea
        placeholder="Description"
        value={form.desc}
        onChange={e=>setForm({...form,desc:e.target.value})}
        className="border p-3 w-full"
      />

      <input
        placeholder="Icon (Lightbulb, PenTool, Code2...)"
        value={form.icon}
        onChange={e=>setForm({...form,icon:e.target.value})}
        className="border p-3 w-full"
      />

      {form.details.map((d,i)=>(
        <input
          key={i}
          value={d}
          onChange={(e)=>updateDetail(i,e.target.value)}
          className="border p-2 w-full"
          placeholder="Detail"
        />
      ))}

      <button onClick={()=>setForm({...form,details:[...form.details,""]})}>
        + Detail
      </button>

      <button
        onClick={save}
        className="bg-purple-600 text-white px-6 py-3 rounded"
      >
        {editing ? "Update" : "Create"}
      </button>

      {steps.map(s=>(
        <div key={s._id} className="border p-4 flex justify-between">
          {s.title}
          <div>
            <button onClick={()=>edit(s)}>Edit</button>
            <button onClick={()=>remove(s._id)}>Delete</button>
          </div>
        </div>
      ))}

    </div>
  );
}