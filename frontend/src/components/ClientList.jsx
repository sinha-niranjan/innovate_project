import React from "react";
import axios from "axios";

const ClientList = ({ clients, setClients }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/clients/${id}`)
      .then(() => setClients(clients.filter((client) => client._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <ul>
      {clients.map((client) => (
        <li key={client._id}>
          {client.name} - {client.email}
          <button onClick={() => handleDelete(client._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
