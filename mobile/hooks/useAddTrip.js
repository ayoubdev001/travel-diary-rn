import { useState } from "react";
import { addTrip } from "../api/apiService";

export const useAddTrip = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitTrip = async (tripData) => {
    setLoading(true);
    setError(null);
    try {
      const newTrip = await addTrip(tripData);
      return newTrip;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitTrip, loading, error };
};