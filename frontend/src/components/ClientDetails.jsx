import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ClientDetails = () => {
  const [client, setClient] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/clients/${id}`)
      .then((response) => setClient(response.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!client) return <p>Loading...</p>;

  return (
    <div>
      <h2>{client.name}</h2>
      <p>Email: {client.email}</p>
      <p>Phone: {client.phone}</p>
      <p>Hosting Plan: {client.hostingPlan}</p>
      <p>Renewal Date: {new Date(client.renewalDate).toLocaleDateString()}</p>
      <p>Notes: {client.notes}</p>
    </div>
  );
};

export default ClientDetails;
