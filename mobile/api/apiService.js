const BASE_URL = "http://10.0.2.2:3000";

export const getTrips = async () => {
  const res = await fetch(`${BASE_URL}/trips`);
  if (!res.ok) throw new Error("Failed to fetch trips");
  return res.json();
};

export const getTripById = async (id) => {
  const res = await fetch(`${BASE_URL}/trips/${id}`);
  if (!res.ok) throw new Error("Failed to fetch trip");
  return res.json();
};

export const addTrip = async (tripData) => {
  const res = await fetch(`${BASE_URL}/trips`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripData),
  });
  if (!res.ok) throw new Error("Failed to create trip");
  return res.json();
};