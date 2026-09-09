import { useState, useEffect } from "react";
import { getTripById } from "../api/apiService";

export const useTripDetail = (id) => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getTripById(id);
        setTrip(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id]);

  return { trip, loading, error };
};