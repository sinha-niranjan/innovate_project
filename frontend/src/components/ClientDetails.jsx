import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientDetails = ({ clientId }) => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/clients/${clientId}`)
      .then((response) => setClient(response.data))
      .catch((err) => console.error(err));
  }, [clientId]);

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
