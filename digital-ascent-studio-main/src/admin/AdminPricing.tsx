import { useEffect, useState } from "react";
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/pricing`;

interface Plan {
  _id?: string;
  name: string;
  price: string;
  desc: string;
  features: string[];
  popular?: boolean;
}

export default function AdminPricing() {

  const [plans, setPlans] = useState<Plan[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState<Plan>({
    name: "",
    price: "Custom",
    desc: "",
    features: [""],
    popular: false
  });

  /* LOAD */
  const load = async () => {
    const res = await axios.get(API);
    setPlans(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  /* SAVE */
  const save = async () => {

    const payload = {
      ...form,
      features: form.features.filter(f => f.trim() !== "")
    };

    if (editingId)
      await axios.put(`${API}/${editingId}`, payload);
    else
      await axios.post(API, payload);

    setEditingId(null);
    setForm({
      name: "",
      price: "Custom",
      desc: "",
      features: [""],
      popular: false
    });

    load();
  };

  /* EDIT */
  const edit = (p: Plan) => {
    setForm(p);
    setEditingId(p._id!);
  };

  /* DELETE */
  const remove = async (id?: string) => {
    if (!id) return;
    await axios.delete(`${API}/${id}`);
    load();
  };

  /* FEATURE HANDLING */
  const updateFeature = (i: number, value: string) => {
    const arr = [...form.features];
    arr[i] = value;
    setForm({ ...form, features: arr });
  };

  const addFeature = () =>
    setForm({ ...form, features: [...form.features, ""] });

  return (
    <div className="p-10 space-y-6 text-black max-w-4xl mx-auto">

      <h2 className="text-3xl text-blue-300 font-bold">Pricing Admin</h2>

      {/* FORM */}
      <div className="bg-white p-6 rounded space-y-3">

        <input placeholder="Plan Name"
          value={form.name}
          onChange={e=>setForm({...form,name:e.target.value})}
          className="border p-3 w-full"/>

        <input placeholder="Price"
          value={form.price}
          onChange={e=>setForm({...form,price:e.target.value})}
          className="border p-3 w-full"/>

        <textarea placeholder="Description"
          value={form.desc}
          onChange={e=>setForm({...form,desc:e.target.value})}
          className="border p-3 w-full"/>

        {form.features.map((f,i)=>(
          <input key={i}
            value={f}
            placeholder="Feature"
            onChange={(e)=>updateFeature(i,e.target.value)}
            className="border p-2 w-full"/>
        ))}

        <button onClick={addFeature}>+ Feature</button>

        <label className="flex gap-2">
          <input
            type="checkbox"
            checked={form.popular}
            onChange={(e)=>setForm({...form,popular:e.target.checked})}
          />
          Popular Plan
        </label>

        <button
          onClick={save}
          className="bg-purple-600 text-white px-6 py-3 rounded"
        >
          {editingId ? "Update" : "Create"}
        </button>

      </div>

      {/* LIST */}
      {plans.map(p=>(
        <div key={p._id} className="border p-4 text-white flex justify-between">
          <div>{p.name}</div>

          <div className="flex gap-2">
            <button onClick={()=>edit(p)}>Edit</button>
            <button onClick={()=>remove(p._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}