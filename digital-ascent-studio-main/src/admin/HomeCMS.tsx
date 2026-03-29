import { useEffect, useState } from "react";
import axios from "axios";
const BASE_API = import.meta.env.VITE_API_URL;

const HERO_API = `${BASE_API}/hero`;
const FEATURES_API = `${BASE_API}/features`;
const CLIENTS_API = `${BASE_API}/clients`;
const SERVICES_API = `${BASE_API}/services`;
const STATS_API = `${BASE_API}/stats`;
const ABOUT_API = `${BASE_API}/about`;
const TECH_API = `${BASE_API}/tech`;
const TESTIMONIAL_API = `${BASE_API}/testimonials`;
const FAQ_API = `${BASE_API}/faqs`;

const HeroAdmin = () => {

  /* ================= DEFAULT FORM ================= */
  const defaultForm = {
    badgeText: "",
    title: "",
    highlightText: "",
    description: "",
    button1Text: "",
    button1Link: "",
    button2Text: "",
    button2Link: "",
    button3Text: "",
    button3Link: "",

    titleColor: "#ffffff",
    highlightColor: "#7c3aed",
    descriptionColor: "#9ca3af",

    /* GRADIENT */
    titleGradientFrom: "",
    titleGradientTo: "",

    titleSize: "64",
    descSize: "20",

    align: "center"
  };

  const [stats,setStats] = useState([
  { value:150, suffix:"+", label:"Projects" },
  { value:80, suffix:"+", label:"Clients" },
  { value:5, suffix:"+", label:"Years" }
]);
const iconList = [
  "Zap",
  "Shield",
  "HeartHandshake",
  "TrendingUp",
  "Clock",
  "Headphones"
];
const [about,setAbout] = useState({
  badge:"",
  title:"",
  highlight:"",
  paragraph1:"",
  paragraph2:"",
  highlights:[],
  typingTexts:[]
});


  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [techStack, setTechStack] = useState([]);

  /* ================= LOAD HERO ================= */
  const loadHero = async () => {
    try {
      const res = await axios.get(HERO_API);
      setForm({ ...defaultForm, ...res.data });
    } catch (err) {
      console.log("Hero load error", err);
    }
  };

 
  /* ================= INPUT CHANGE ================= */
  const changeFeature = (i:number, key:string, value:string) => {

  setFeatures(prev =>
    prev.map((item,index)=>
      index === i
        ? { ...item, [key]: value }
        : item
    )
  );

};
  /* ================= SAVE ================= */
 const saveFeatures = async () => {
  try {

    const cleanData = features.map(f => ({
      icon: f.icon || "Zap",
      title: f.title || "",
      desc: f.desc || ""
    }));

    await axios.put(
      FEATURES_API,
      cleanData
    );

    alert("Features Updated ✅");

    load(); // reload latest data

  } catch (err) {
    console.error(err);
    alert("Save Failed ❌");
  }
};
const loadClients = async () => {

  try {

    const res = await axios.get(
      CLIENTS_API
    );

    setClients(res.data.map(c => c.name));

  } catch (err) {

    console.log("Client load error", err);

  }

};

/* CLIENT SECTION */

const [clients, setClients] = useState([]);

const addClient = () => {
  setClients([...clients, ""]);
};

const updateClient = (index, value) => {
  const updated = [...clients];
  updated[index] = value;
  setClients(updated);
};

const saveClients = async () => {

  const data = clients.map((c) => ({ name: c }));

  await axios.put(CLIENTS_API, data);

  localStorage.setItem(
    "clientsUpdated",
    Date.now().toString()
  );

  alert("Clients Updated 🚀");

};

const [services,setServices] = useState([
{
title:"",
description:"",
icon:"Code2",
gradientFrom:"#7c3aed",
gradientTo:"#06b6d4"
}
]);

const addService = () => {

setServices([
...services,
{
title:"",
description:"",
icon:"Code2",
gradientFrom:"#7c3aed",
gradientTo:"#06b6d4"
}
]);

};

const changeService = (index,field,value)=>{

const updated=[...services];

updated[index][field]=value;

setServices(updated);

};

const saveServices = async ()=>{

await axios.put(
SERVICES_API,
services
);

localStorage.setItem(
"servicesUpdated",
Date.now().toString()
);

alert("Services Updated 🚀");

};

const loadServices = async () => {
  try {

    const res = await axios.get(
      SERVICES_API
    );

    setServices(res.data);

  } catch (err) {

    console.log("Service load error", err);

  }
};
const changeStat = (index, field, value) => {

  const updated = [...stats];

  updated[index][field] =
    field === "value" ? Number(value) : value;

  setStats(updated);
};
const addStat = () => {

  setStats([
    ...stats,
    { value:0, suffix:"", label:"" }
  ]);

};
const loadStats = async () => {
  const res = await axios.get(STATS_API);
  setStats(res.data);
};

const saveStats = async () => {

  await axios.put(
    STATS_API,
    stats
  );

  localStorage.setItem(
    "statsUpdated",
    Date.now().toString()
  );

  alert("Stats Updated ✅");
};

const [features, setFeatures] = useState<any[]>([]);

  /* LOAD */
  const load = async () => {
    const res = await axios.get(FEATURES_API);
    setFeatures(res.data);
  };

 
const changeHero = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value
  }));
};
  /* CHANGE */
  // const change = (i:number, key:string, value:string) => {
  //   const updated = [...features];
  //   updated[i][key] = value;
  //   setFeatures(updated);
  // };

  /* ADD */
  const addFeature = () => {
    setFeatures([
      ...features,
      { icon: "Zap", title: "", desc: "" }
    ]);
  };

  /* SAVE */
  // const save = async () => {
  //   await axios.put(
  //     "http://localhost:5000/api/features",
  //     features
  //   );

  //   alert("Features Updated ✅");
  // };
  const saveHero = async () => {
  setLoading(true);

  await axios.put(
    HERO_API,
    form
  );

  setLoading(false);
  alert("Hero Updated ✅");
};

const loadAbout = async () => {
  const res = await axios.get(ABOUT_API);
  setAbout(res.data);
};

const changeAbout = (e:any) => {
  const { name, value } = e.target;
  setAbout(prev => ({ ...prev, [name]: value }));
};

const addHighlight = () => {
  setAbout({
    ...about,
    highlights:[...about.highlights,{text:""}]
  });
};

const updateHighlight = (i,value) => {
  const updated=[...about.highlights];
  updated[i].text=value;
  setAbout({...about,highlights:updated});
};

const deleteHighlight = (i) => {
  const updated = about.highlights.filter((_,idx)=>idx!==i);
  setAbout({...about,highlights:updated});
};

const addTyping = () => {
  setAbout({
    ...about,
    typingTexts:[...about.typingTexts,{text:""}]
  });
};

const updateTyping = (i,value)=>{
  const updated=[...about.typingTexts];
  updated[i].text=value;
  setAbout({...about,typingTexts:updated});
};

const deleteTyping = (i)=>{
  const updated = about.typingTexts.filter((_,idx)=>idx!==i);
  setAbout({...about,typingTexts:updated});
};

const saveAbout = async () => {
  await axios.put(
    ABOUT_API,
    about
  );

  alert("About Updated ✅");
};


const loadTech = async () => {
  const res = await axios.get(TECH_API);
  setTechStack(res.data);
};

const addTech = (type) => {
  setTechStack([
    ...techStack,
    { name: "", type }
  ]);
};

const changeTech = (i, value) => {
  const updated = [...techStack];
  updated[i].name = value;
  setTechStack(updated);
};


const saveTech = async () => {
  await axios.put(
    TECH_API,
    techStack
  );

  alert("Tech Stack Updated 🚀");
};

const [testimonialForm, setTestimonialForm] = useState({
  name: "",
  role: "",
  text: ""
});

const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(TESTIMONIAL_API)
      .then(res => setData(res.data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      TESTIMONIAL_API,
      testimonialForm
    );

    setTestimonialForm({ name:"", role:"", text:"" });
    fetchData();
  };

  const deleteItem = async (id) => {
    await axios.delete(
      `${TESTIMONIAL_API}/${id}`
    );
    fetchData();
  };

const [faqs, setFaqs] = useState([]);
  const [faqform, faqsetForm] = useState({
    question: "",
    answer: "",
  });
  const API = FAQ_API;
   const loadFaqs = async () => {
    const res = await axios.get(API);
    setFaqs(res.data);
  };

   const saveFaq = async () => {
    if (!faqform.question || !faqform.answer) return;

    await axios.post(API, faqform);

    faqsetForm({ question: "", answer: "" });
    loadFaqs();
  };

  const deleteFaq = async (id: string) => {
    await axios.delete(`${API}/${id}`);
    loadFaqs();
  };

 useEffect(() => {
     loadHero();
  loadServices();
  loadClients();
  loadStats();
  load();
  loadAbout();
  loadTech();
  fetchData();
  loadFaqs();
  }, []);

  return (
<div className="p-8 bg-gray-100 text-gray-900 min-h-screen">

<div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

<h2 className="text-2xl font-bold mb-6">
Hero Section CMS
</h2>

{/* ================= TEXT CONTENT ================= */}

<div className="grid md:grid-cols-2 gap-6">

<input name="badgeText" value={form.badgeText} onChange={changeHero} placeholder="Badge Text" className="border p-3 rounded"/>

<input name="title" value={form.title} onChange={changeHero} placeholder="Main Title" className="border p-3 rounded"/>

<input name="highlightText" value={form.highlightText} onChange={changeHero} placeholder="Highlight Text" className="border p-3 rounded"/>

<textarea name="description" value={form.description} onChange={changeHero} placeholder="Description" className="border p-3 rounded col-span-2"/>

</div>

{/* ================= BUTTONS ================= */}

<h3 className="text-lg font-semibold mt-8 mb-4">Buttons</h3>

<div className="grid md:grid-cols-3 gap-4">

<input name="button1Text" value={form.button1Text} onChange={changeHero} placeholder="Button1 Text" className="border p-3 rounded"/>
<input name="button1Link" value={form.button1Link} onChange={changeHero} placeholder="Button1 Link" className="border p-3 rounded"/>

<input name="button2Text" value={form.button2Text} onChange={changeHero} placeholder="Button2 Text" className="border p-3 rounded"/>
<input name="button2Link" value={form.button2Link} onChange={changeHero} placeholder="Button2 Link" className="border p-3 rounded"/>

<input name="button3Text" value={form.button3Text} onChange={changeHero} placeholder="Button3 Text" className="border p-3 rounded"/>
<input name="button3Link" value={form.button3Link} onChange={changeHero} placeholder="Button3 Link" className="border p-3 rounded"/>

</div>

{/* ================= COLORS ================= */}

<h3 className="text-lg font-semibold mt-8 mb-4">
Colors
</h3>

<div className="grid md:grid-cols-3 gap-6">

<div>
<label>Title Color</label>
<input type="color" name="titleColor" value={form.titleColor} onChange={changeHero} className="w-full h-10"/>
</div>

<div>
<label>Highlight Color</label>
<input type="color" name="highlightColor" value={form.highlightColor} onChange={changeHero} className="w-full h-10"/>
</div>

<div>
<label>Description Color</label>
<input type="color" name="descriptionColor" value={form.descriptionColor} onChange={changeHero} className="w-full h-10"/>
</div>

</div>

{/* ================= GRADIENT ================= */}

<h3 className="text-lg font-semibold mt-8 mb-4">
Title Gradient (Optional)
</h3>

<div className="grid md:grid-cols-2 gap-6">

<div>
<label>Gradient From</label>
<input
type="color"
name="titleGradientFrom"
value={form.titleGradientFrom || "#7c3aed"}
onChange={changeHero}
className="w-full h-10"
/>
</div>

<div>
<label>Gradient To</label>
<input
type="color"
name="titleGradientTo"
value={form.titleGradientTo || "#06b6d4"}
onChange={changeHero}
className="w-full h-10"
/>
</div>

</div>

{/* ================= FONT SIZE ================= */}

<h3 className="text-lg font-semibold mt-8 mb-4">
Font Settings
</h3>

<div className="grid md:grid-cols-2 gap-6">

<div>
<label>Title Size</label>
<input type="number" name="titleSize" value={form.titleSize} onChange={changeHero}className="border p-3 rounded w-full"/>
</div>

<div>
<label>Description Size</label>
<input type="number" name="descSize" value={form.descSize} onChange={changeHero} className="border p-3 rounded w-full"/>
</div>

</div>

{/* ================= ALIGN ================= */}

<h3 className="text-lg font-semibold mt-8 mb-4">
Text Position
</h3>

<select name="align" value={form.align} onChange={changeHero} className="border p-3 rounded w-full">
<option value="left">Left</option>
<option value="center">Center</option>
<option value="right">Right</option>
</select>

{/* ================= SAVE ================= */}

<button
onClick={saveHero}
className="mt-8 bg-black text-white px-8 py-3 rounded hover:opacity-80"
>
{loading ? "Updating..." : "Update Hero Section"}
</button>

{/* ================= LIVE PREVIEW ================= */}

<h3 className="text-xl font-bold mt-12 mb-6">
Live Preview
</h3>

<div className="p-10 bg-black rounded-lg" style={{ textAlign: form.align }}>

<p className="text-sm text-gray-400">{form.badgeText}</p>

<h1
style={{
fontSize: `${form.titleSize}px`,
background:
form.titleGradientFrom && form.titleGradientTo
? `linear-gradient(90deg, ${form.titleGradientFrom}, ${form.titleGradientTo})`
: "none",
WebkitBackgroundClip:
form.titleGradientFrom ? "text" : "unset",
WebkitTextFillColor:
form.titleGradientFrom ? "transparent" : form.titleColor
}}
>
{form.title}

<span style={{ color: form.highlightColor }}>
{" "}{form.highlightText}
</span>

</h1>

<p style={{ color: form.descriptionColor, fontSize: `${form.descSize}px` }}>
{form.description}
</p>

<div className="flex gap-4 mt-6 justify-center">

<button className="bg-purple-600 px-6 py-2 rounded text-white">
{form.button1Text}
</button>

<button className="border px-6 py-2 rounded text-white">
{form.button2Text}
</button>

<button className="border px-6 py-2 rounded text-white">
{form.button3Text}
</button>

</div>

</div>

</div>
<div className="max-w-5xl mx-auto bg-amber-200 shadow-lg rounded-xl p-8 mt-10">
<h3 className="text-xl font-bold mt-16 mb-6">
Client Logos CMS
</h3>

{clients.map((client, i) => (

<input
key={i}
value={client}
onChange={(e)=>updateClient(i,e.target.value)}
placeholder="Client Name"
className="border p-3 rounded w-full mb-3"
/>

))}

<button
onClick={addClient}
className="bg-gray-800 text-white px-6 py-2 rounded mt-2"
>
Add Client
</button>

<button
onClick={saveClients}
className="bg-purple-600 text-white px-6 py-2 rounded mt-4 ml-4"
>
Save Clients
</button>

</div>

<div className="max-w-5xl mx-auto bg-red-200 shadow-lg rounded-xl p-8 mt-10">
<h3 className="text-xl font-bold mt-16 mb-6">
Services CMS
</h3>

{services.map((s,i)=>(
<div key={i} className="grid md:grid-cols-2 gap-4 mb-4">

<input
placeholder="Title"
value={s.title}
onChange={(e)=>changeService(i,"title",e.target.value)}
className="border p-3 rounded"
/>

<input
placeholder="Description"
value={s.description}
onChange={(e)=>changeService(i,"description",e.target.value)}
className="border p-3 rounded"
/>

<input
placeholder="Icon Name (Code2)"
value={s.icon}
onChange={(e)=>changeService(i,"icon",e.target.value)}
className="border p-3 rounded"
/>

<div className="flex gap-2">

<input
type="color"
value={s.gradientFrom}
onChange={(e)=>changeService(i,"gradientFrom",e.target.value)}
/>

<input
type="color"
value={s.gradientTo}
onChange={(e)=>changeService(i,"gradientTo",e.target.value)}
/>

</div>

</div>
))}

<button
onClick={addService}
className="bg-gray-800 text-white px-6 py-2 rounded"
>
Add Service
</button>

<button
onClick={saveServices}
className="bg-purple-600 text-white px-6 py-2 rounded ml-4"
>
Save Services
</button>
</div>

<div className="max-w-5xl mx-auto bg-orange-300 shadow-lg rounded-xl p-8 mt-10">
<h3 className="text-xl font-bold mt-16 mb-6">
Stats CMS
</h3>

{stats.map((s,i)=>(
<div key={i} className="grid grid-cols-3 gap-4 mb-4">

<input
type="number"
value={s.value}
placeholder="Value (150)"
onChange={(e)=>changeStat(i,"value",e.target.value)}
className="border p-3 rounded"
/>

<input
value={s.suffix}
placeholder="Suffix (+)"
onChange={(e)=>changeStat(i,"suffix",e.target.value)}
className="border p-3 rounded"
/>

<input
value={s.label}
placeholder="Label (Projects)"
onChange={(e)=>changeStat(i,"label",e.target.value)}
className="border p-3 rounded"
/>

</div>
))}

<button
onClick={addStat}
className="bg-gray-800 text-white px-6 py-2 rounded"
>
Add Stat
</button>

<button
onClick={saveStats}
className="bg-purple-600 text-white px-6 py-2 rounded ml-4"
>
Save Stats
</button>
  </div>
<div className="max-w-5xl mx-auto bg-red-300 shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Why Choose Us CMS
      </h2>

      {features.map((f,i)=>(
        <div key={i} className="grid grid-cols-3 gap-4 mb-4">

          {/* ICON */}
          <select
            value={f.icon}
            onChange={(e)=>changeFeature(i,"icon",e.target.value)}
            className="border p-3 rounded"
          >
            {iconList.map(icon=>(
              <option key={icon}>{icon}</option>
            ))}
          </select>

          {/* TITLE */}
          <input
            value={f.title}
            placeholder="Title"
            onChange={(e)=>changeFeature(i,"title",e.target.value)}
            className="border p-3 rounded"
          />

          {/* DESC */}
          <input
            value={f.desc}
            placeholder="Description"
            onChange={(e)=>changeFeature(i,"desc",e.target.value)}
            className="border p-3 rounded"
          />

        </div>
      ))}

      <button
        onClick={addFeature}
        className="bg-gray-800 text-white px-6 py-2 rounded"
      >
        Add Feature
      </button>

      <button
       onClick={saveFeatures}
        className="bg-purple-600 text-white px-6 py-2 rounded ml-4"
      >
        Save Features
      </button>
      </div>
       <div className="max-w-5xl mx-auto bg-red-200 shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold mt-16 mb-6">
About Section CMS
</h2>

<input name="badge" value={about.badge}
onChange={changeAbout}
placeholder="Badge"
className="border p-3 rounded w-full mb-3"/>

<input name="title" value={about.title}
onChange={changeAbout}
placeholder="Title"
className="border p-3 rounded w-full mb-3"/>

<input name="highlight" value={about.highlight}
onChange={changeAbout}
placeholder="Highlight"
className="border p-3 rounded w-full mb-3"/>

<textarea name="paragraph1"
value={about.paragraph1}
onChange={changeAbout}
placeholder="Paragraph 1"
className="border p-3 rounded w-full mb-3"/>

<textarea name="paragraph2"
value={about.paragraph2}
onChange={changeAbout}
placeholder="Paragraph 2"
className="border p-3 rounded w-full mb-6"/>

<h3 className="font-bold mb-3">Highlights</h3>

{about.highlights?.map((h,i)=>(
<div key={i} className="flex gap-2 mb-2">

<input
value={h.text}
onChange={(e)=>updateHighlight(i,e.target.value)}
className="border p-3 rounded w-full"
/>

<button
onClick={()=>deleteHighlight(i)}
className="bg-red-500 text-white px-4 rounded">
Delete
</button>

</div>
))}

<button onClick={addHighlight}
className="bg-gray-800 text-white px-6 py-2 rounded">
Add Highlight
</button>

<h3 className="font-bold mt-6 mb-3">Typing Text</h3>

{about.typingTexts?.map((t,i)=>(
<div key={i} className="flex gap-2 mb-2">

<input
value={t.text}
onChange={(e)=>updateTyping(i,e.target.value)}
className="border p-3 rounded w-full"
/>

<button
onClick={()=>deleteTyping(i)}
className="bg-red-500 text-white px-4 rounded">
Delete
</button>

</div>
))}

<button onClick={addTyping}
className="bg-gray-800 text-white px-6 py-2 rounded">
Add Typing
</button>

<button
onClick={saveAbout}
className="bg-purple-600 text-white px-6 py-2 rounded ml-4">
Save About
</button>
</div>
<div className="max-w-5xl mx-auto bg-orange-300 shadow-lg rounded-xl p-8 mt-10">
  <h2 className="text-2xl font-bold mt-16 mb-6">
Tech Stack CMS
</h2>

{techStack.map((t,i)=>(
  <input
    key={i}
    value={t.name}
    placeholder="Technology"
    onChange={(e)=>changeTech(i,e.target.value)}
    className="border p-3 rounded w-full mb-3"
  />
))}

<button
onClick={()=>addTech("stack1")}
className="bg-gray-800 text-white px-6 py-2 rounded">
Add Stack 1
</button>

<button
onClick={()=>addTech("stack2")}
className="bg-gray-800 text-white px-6 py-2 rounded ml-3">
Add Stack 2
</button>

<button
onClick={saveTech}
className="bg-purple-600 text-white px-6 py-2 rounded ml-3">
Save Tech Stack
</button>
</div>
       <div className="max-w-5xl mx-auto bg-red-200 shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-2xl mb-6">Manage Testimonials</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input placeholder="Name" className="border p-3 rounded w-1/2 mb-3"
          value={testimonialForm.name}
          onChange={e=>setTestimonialForm({...testimonialForm,name:e.target.value})}
        />

        <input placeholder="Role" className="border p-3 rounded w-1/2 mb-3"
          value={testimonialForm.role}
          onChange={e=>setTestimonialForm({...testimonialForm,role:e.target.value})}
        />

        <textarea placeholder="Text" className="border p-3 rounded w-full mb-3"
          value={testimonialForm.text}
          onChange={e=>setTestimonialForm({...testimonialForm,text:e.target.value})}
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>

      <hr className="my-6"/>

      {data.map(item => (
        <div key={item._id} className="mb-3 flex justify-between items-center border-separated border border-black p-3 rounded">
          {item.name} -  {item.role} - {item.text}
          <button className="bg-red-500 text-white px-4 py-2 rounded ml-3" onClick={()=>deleteItem(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
 <div className="p-8 space-y-6">

      <h1 className="text-2xl font-bold">FAQ Manager</h1>

      {/* FORM */}
      <div className="space-y-3">
        <input
          placeholder="Question"
          value={faqform.question}
          onChange={(e) =>
            faqsetForm({ ...faqform, question: e.target.value })
          }
          className="border p-2 w-full"
        />

        <textarea
          placeholder="Answer"
          value={faqform.answer}
          onChange={(e) =>
            faqsetForm({ ...faqform, answer: e.target.value })
          }
          className="border p-2 w-full"
        />

        <button
          onClick={saveFaq}
          className="bg-purple-600 text-white px-4 py-2"
        >
          Save FAQ
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {faqs.map((faq: any) => (
          <div key={faq._id} className="border p-4 flex justify-between">
            <div>
              <p className="font-semibold">{faq.question}</p>
              <p className="text-sm text-gray-500">{faq.answer}</p>
            </div>

            <button
              onClick={() => deleteFaq(faq._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
</div>
  );
};

export default HeroAdmin;