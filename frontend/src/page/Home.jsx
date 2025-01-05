import React from "react";
import SearchBar from "../components/SearchBar";
import ClientForm from "../components/ClientForm";
import ClientList from "../components/ClientList";

const Home = ({ onSearch, onAddClient, clients, setClients }) => {
  return (
    <div className="bg-slate-800 text-white">
      <h1>WebHostManager</h1>
      <SearchBar onSearch={onSearch} />
      <ClientForm onAddClient={onAddClient} />
      <ClientList clients={clients} setClients={setClients} />
    </div>
  );
};

export default Home;
