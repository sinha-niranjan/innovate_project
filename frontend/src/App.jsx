import React, { useState, useEffect } from "react";
import axios from "axios";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";
import SearchBar from "./components/SearchBar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import ClientDetails from "./components/ClientDetails";

const App = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/clients")
      .then((response) => setClients(response.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-800 min-h-screen text-white ">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onSearch={setSearchTerm}
              onAddClient={(newClient) => setClients([...clients, newClient])}
              clients={filteredClients}
              setClients={setClients}
            />
          }
        />
        <Route path="/:id" element={<ClientDetails />} />
      </Routes>
    </div>
  );
};

export default App;
