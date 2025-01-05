import React, { useState } from "react";
import axios from "axios";

const ClientForm = ({ onAddClient }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    hostingPlan: "",
    renewalDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/clients", form)
      .then((response) => onAddClient(response.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-[550px] min-w-[400px] m-auto  items-center justify-center bg-white flex rounded-lg ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-slate-200 p-2 rounded-md text-slate-900 border-2 border-slate-950 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-slate-200 p-2 rounded-md text-slate-900 border-2 border-slate-950 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Phone"
          required
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="bg-slate-200 p-2 rounded-md text-slate-900 border-2 border-slate-950 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Hosting Plan"
          required
          onChange={(e) => setForm({ ...form, hostingPlan: e.target.value })}
          className="bg-slate-200 p-2 rounded-md text-slate-900 border-2 border-slate-950 focus:outline-none"
        />
        <input
          type="date"
          required
          onChange={(e) => setForm({ ...form, renewalDate: e.target.value })}
          className="bg-slate-200 p-2 rounded-md text-slate-900 border-2 border-slate-950 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 p-2 rounded-md border-2 border-transparent hover:border-blue-900 hover:bg-blue-700 "
        >
          Add Client
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
