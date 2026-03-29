import { useEffect, useState } from "react";
import axios from "axios";
import AdminValues from "./AdminValues";
import AdminTeam from "./AdminTeam";

export default function AdminAboutHero() {
     const API=`${import.meta.env.VITE_API_URL}/our-story`;


  const [form, setForm] = useState({
    badgeText: "",
    title: "",
    highlightText: "",
    description: ""
  });
const [story,setStory]=useState<any>({});
  const [milestones,setMilestones]=useState<any[]>([]);

  const loadOurStory = async ()=>{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/our-story`);
    setStory(res.data.story);
    setMilestones(res.data.milestones);
  };

  useEffect(() => {
    load();
    loadOurStory();

  }, []);

  const load = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/about-hero`
    );
    setForm(res.data);
  };

  const save = async () => {
    await axios.put(
      `${import.meta.env.VITE_API_URL}/about-hero`,
      form
    );
    alert("Updated!");
  };

  const saveStory = async ()=>{
    await axios.put(
      `${import.meta.env.VITE_API_URL}/our-story`,
      story
    );
    alert("Story Updated");
  };

  const addMilestone = async ()=>{
    await axios.post(
      `${import.meta.env.VITE_API_URL}/our-story/milestone`,
      { year:"2025", title:"New", desc:"Description", order:milestones.length }
    );
    loadOurStory();
  };
  const updateField = (id:string, field:string, value:string)=>{
    setMilestones(prev =>
      prev.map(m =>
        m._id === id ? { ...m, [field]: value } : m
      )
    );
  };
  const saveMilestone = async (m:any)=>{
    await axios.put(`${API}/milestone/${m._id}`, m);
    alert("Milestone Saved");
  };
    const deleteMilestone = async(id:string)=>{
        await axios.delete(
        `${import.meta.env.VITE_API_URL}/our-story/milestone/${id}`
        );
        loadOurStory();
    };
      
  return (
    <div>
    <div className="p-10 text-black space-y-4 max-w-5xl mx-auto bg-pink-300 shadow-lg rounded-xl mt-10">
      <h2>About Hero CMS</h2>

      <input
        placeholder="Badge"
        value={form.badgeText}
        onChange={(e)=>setForm({...form, badgeText:e.target.value})}
        className="border p-3 rounded w-full mb-3"
      />

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e)=>setForm({...form, title:e.target.value})}
        className="border p-3 rounded w-full mb-3"
      />

      <input
        placeholder="Highlight Word"
        value={form.highlightText}
        onChange={(e)=>setForm({...form, highlightText:e.target.value})}
        className="border p-3 rounded w-full mb-3"
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e)=>setForm({...form, description:e.target.value})}
        className="border p-3 rounded w-full mb-3"
      />

      <button onClick={save}>Save</button>
    </div>

    <div className="p-10 space-y-4 text-black max-w-5xl mx-auto bg-orange-300 shadow-lg rounded-xl mt-10">

      <h2>Our Story CMS</h2>

      <input value={story.badgeText||""}
        onChange={e=>setStory({...story,badgeText:e.target.value})}
        placeholder="Badge" className="border p-3 rounded w-full mb-3"
      />

      <input value={story.title||""}
        onChange={e=>setStory({...story,title:e.target.value})}
        placeholder="Title" className="border p-3 rounded w-full mb-3"
      />

      <input value={story.highlightText||""}
        onChange={e=>setStory({...story,highlightText:e.target.value})}
        placeholder="Highlight" className="border p-3 rounded w-full mb-3"
      />

      <textarea value={story.paragraph1||""}
        onChange={e=>setStory({...story,paragraph1:e.target.value})}
        placeholder="Paragraph 1" className="border p-3 rounded w-full mb-3"
      />

      <textarea value={story.paragraph2||""}
        onChange={e=>setStory({...story,paragraph2:e.target.value})}
        placeholder="Paragraph 2" className="border p-3 rounded w-full mb-3"
      />

      <button onClick={saveStory}>Save Story</button>

      <hr/>

      <h3 className="text-lg font-bold">Milestones</h3>

      {milestones.map((m)=>(
        <div key={m._id} className="border p-4 space-y-2 rounded">

          <input
            value={m.year}
            placeholder="Year"
            onChange={(e)=>updateField(m._id,"year",e.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            value={m.title}
            placeholder="Title"
            onChange={(e)=>updateField(m._id,"title",e.target.value)}
            className="border p-2 rounded w-full"
          />

          <textarea
            value={m.desc}
            placeholder="Description"
            onChange={(e)=>updateField(m._id,"desc",e.target.value)}
            className="border p-2 rounded w-full"
          />

          <div className="flex gap-2">
            <button onClick={()=>saveMilestone(m)}>
              Save
            </button>

            <button onClick={()=>deleteMilestone(m._id)}>
              Delete
            </button>
          </div>

        </div>
      ))}

      <button onClick={addMilestone}>
        + Add Milestone
      </button>
    </div>
     <AdminValues />
     <AdminTeam />
    </div>
  );
}
