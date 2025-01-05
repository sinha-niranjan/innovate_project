import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ClientList = ({ clients, setClients }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/clients/${id}`)
      .then(() => setClients(clients.filter((client) => client._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <ul className="flex items-center justify-center flex-col m-10 font-semibold text-2xl gap-10 text-start">
      {clients.map((client) => (
        <li key={client._id}>
          {client.name} - {client.email}
          <button
            onClick={() => handleDelete(client._id)}
            className="mx-5  bg-red-500  rounded-md p-2 border-2 hover:border-black border-transparent "
          >
            Delete
          </button>
          <Link
            to={`/${client._id}`}
            className="mx-5  bg-blue-500  rounded-md p-2 border-2 hover:border-black border-transparent "
          >
            View
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
