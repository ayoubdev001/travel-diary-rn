import { Trip } from "../models/trip.js";

export const getAllTrips = async () => {
  return Trip.findAll({ order: [["startDate", "DESC"]] });
};

export const getTripById = async (id) => {
  const trip = await Trip.findByPk(id);
  if (!trip) {
    const error = new Error("Trip not found");
    error.status = 404;
    throw error;
  }
  return trip;
};

export const createTrip = async (data) => {
  const { title, destination, startDate, endDate } = data;

  if (!title || !destination || !startDate || !endDate) {
    const error = new Error(
      "title, destination, startDate and endDate are required"
    );
    error.status = 400;
    throw error;
  }

  return Trip.create(data);
};