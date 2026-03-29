import { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";

/* ================= TYPES ================= */

interface TeamMember {
  _id?: string;
  name: string;
  role: string;
  desc: string;
  icon: string;
}

const API = `${import.meta.env.VITE_API_URL}/team`;

const AdminTeam = () => {

  /* ================= STATE ================= */

  const [form, setForm] = useState<TeamMember>({
    name: "",
    role: "",
    desc: "",
    icon: "Users"
  });

  const [team, setTeam] = useState<TeamMember[]>([]);

  /* ================= LOAD ================= */

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    try {
      const res = await axios.get<TeamMember[]>(API);
      setTeam(res.data);
    } catch (err) {
      console.error("Load error:", err);
    }
  };

  /* ================= INPUT CHANGE ================= */

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  /* ================= SAVE ================= */

  const save = async () => {
  try {

    // ✅ frontend validation
    if (!form.name.trim() || !form.role.trim()) {
      alert("Name and Role are required");
      return;
    }

    await axios.post(
      API,
      form
    );

    alert("Saved successfully ✅");

    setForm({
      name: "",
      role: "",
      desc: "",
      icon: "Users"
    });

    loadTeam();

  } catch (err: any) {
    console.error("Save error:", err.response?.data || err);
    alert(err.response?.data?.message || "Save failed");
  }
};

  /* ================= DELETE ================= */

  const remove = async (id?: string) => {
    if (!id) return;

    try {
      await axios.delete(`${API}/${id}`);
      loadTeam();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="p-10 text-black space-y-4 max-w-5xl mx-auto bg-green-300 shadow-lg rounded-xl mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Team Management
      </h2>

      {/* FORM */}
      <div className="space-y-3 max-w-md">

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="desc"
          placeholder="Description"
          value={form.desc}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="icon"
          placeholder="Icon name (Rocket, Users, Star...)"
          value={form.icon}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          onClick={save}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Save Member
        </button>

      </div>

      {/* LIST */}
      <div className="mt-10 space-y-3">
        {team.map((t) => (
          <div
            key={t._id}
            className="border p-3 flex justify-between bg-white rounded"
          >
            <span>
              {t.name} — {t.role}
            </span>

            <button
              onClick={() => remove(t._id)}
              className="text-red-500 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminTeam;