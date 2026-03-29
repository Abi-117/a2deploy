import { useEffect, useState } from "react";
import axios from "axios";
import AdminPrice from "./AdminPricing";

const API = `${import.meta.env.VITE_API_URL}/services`;


/* ================= TYPES ================= */

interface Service {
  _id?: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
  features: string[];
}

/* ================= COMPONENT ================= */

export default function AdminServices() {

  const [services, setServices] = useState<Service[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState<Service>({
    title: "",
    desc: "",
    icon: "Code2",
    color: "from-neon-purple to-neon-blue",
    features: [""]
  });


  const moveService = async (index: number, direction: "up" | "down") => {

  const newServices = [...services];

  const swapIndex =
    direction === "up" ? index - 1 : index + 1;

  if (swapIndex < 0 || swapIndex >= services.length) return;

  // swap
  [newServices[index], newServices[swapIndex]] =
    [newServices[swapIndex], newServices[index]];

  setServices(newServices);

  // save order in DB
  await axios.put(`${API}/reorder`, {
    services: newServices
  });
};

  const [loading, setLoading] = useState(false);

  /* ================= LOAD SERVICES ================= */

  const load = async () => {
    try {
      const res = await axios.get(API);

      // safety check
      setServices(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Load error:", error);
      setServices([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  /* ================= SAVE ================= */

  const save = async () => {
  try {
    setLoading(true);

    const payload = {
      ...form,
      features: form.features.filter(f => f.trim() !== "")
    };

    if (editingId) {
      // ✅ UPDATE
      await axios.put(`${API}/${editingId}`, payload);
      alert("✅ Service Updated");
    } else {
      // ✅ CREATE
      await axios.post(API, payload);
      alert("✅ Service Saved");
    }

    setForm({
      title: "",
      desc: "",
      icon: "Code2",
      color: "from-neon-purple to-neon-blue",
      features: [""]
    });

    setEditingId(null);
    load();

  } catch (err) {
    console.error(err);
    alert("❌ Save Failed");
  } finally {
    setLoading(false);
  }
};

const edit = (service: Service) => {
  setForm({
    title: service.title,
    desc: service.desc,
    icon: service.icon,
    color: service.color,
    features: service.features.length
      ? service.features
      : [""]
  });

  setEditingId(service._id || null);

  window.scrollTo({ top: 0, behavior: "smooth" });
};

  /* ================= FEATURES ================= */

  const addFeature = () => {
    setForm({
      ...form,
      features: [...form.features, ""]
    });
  };

  const updateFeature = (i: number, value: string) => {
    const arr = [...form.features];
    arr[i] = value;
    setForm({ ...form, features: arr });
  };

  const removeFeature = (i: number) => {
    const arr = form.features.filter((_, index) => index !== i);
    setForm({ ...form, features: arr });
  };

  /* ================= DELETE ================= */

  const remove = async (id?: string) => {
    if (!id) return;

    if (!confirm("Delete this service?")) return;

    try {
      await axios.delete(`${API}/${id}`);
      load();
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="p-10 max-w-6xl mx-auto space-y-8">

      <h2 className="text-3xl text-gray-800 font-bold">🚀 Services Admin Panel</h2>

      {/* ================= FORM ================= */}

      <div className="bg-white shadow-xl rounded-xl p-6 space-y-4 text-black">

        <input
          className="border p-3 w-full rounded"
          placeholder="Service Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          className="border p-3 w-full rounded"
          placeholder="Description"
          rows={3}
          value={form.desc}
          onChange={(e) =>
            setForm({ ...form, desc: e.target.value })
          }
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="border p-3 rounded"
            placeholder="Icon (Code2, Target...)"
            value={form.icon}
            onChange={(e) =>
              setForm({ ...form, icon: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            placeholder="Gradient Color"
            value={form.color}
            onChange={(e) =>
              setForm({ ...form, color: e.target.value })
            }
          />
        </div>

        {/* FEATURES */}

        <div>
          <h3 className="font-semibold mb-2">Features</h3>

          {form.features.map((f, i) => (
            <div key={i} className="flex gap-2 mb-2">

              <input
                className="border p-2 flex-1 rounded"
                placeholder="Feature text"
                value={f}
                onChange={(e) => updateFeature(i, e.target.value)}
              />

              <button
                onClick={() => removeFeature(i)}
                className="bg-red-500 text-white px-3 rounded"
              >
                ✕
              </button>

            </div>
          ))}

          <button
            onClick={addFeature}
            className="bg-gray-200 px-4 py-2 rounded mt-2"
          >
            + Add Feature
          </button>
        </div>

        <button
          onClick={save}
          disabled={loading}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          {loading
  ? "Saving..."
  : editingId
  ? "Update Service"
  : "Save Service"}
        </button>

      </div>

      {/* ================= LIST ================= */}

      <div className="space-y-4">

        {services?.map((s, index) => (
          <div
            key={s._id}
            className="border rounded-lg p-5 flex justify-between items-center shadow-sm"
          >
            <div>
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-sm text-gray-500">
                {s.desc?.slice(0, 80)}...
              </p>
            </div>


            <div className="flex gap-2 items-center">

  {/* UP */}
  <button
    onClick={() => moveService(index, "up")}
    className="bg-gray-200 px-3 py-2 rounded"
  >
    ⬆️
  </button>

  {/* DOWN */}
  <button
    onClick={() => moveService(index, "down")}
    className="bg-gray-200 px-3 py-2 rounded"
  >
    ⬇️
  </button>

  <button
    onClick={() => edit(s)}
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    Edit
  </button>

  <button
    onClick={() => remove(s._id)}
    className="bg-red-500 text-white px-4 py-2 rounded"
  >
    Delete
  </button>

</div>

          </div>
        ))}

      </div>
      <hr/>
      <AdminPrice/>
    </div>
  );
}