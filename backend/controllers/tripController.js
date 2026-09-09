import * as tripService from "../services/tripService.js";

export const getTrips = async (req, res, next) => {
  try {
    const trips = await tripService.getAllTrips();
    res.status(200).json(trips);
  } catch (err) {
    next(err);
  }
};

export const getTripById = async (req, res, next) => {
  try {
    const trip = await tripService.getTripById(req.params.id);
    res.status(200).json(trip);
  } catch (err) {
    next(err);
  }
};

export const createTrip = async (req, res, next) => {
  try {
    const trip = await tripService.createTrip(req.body);
    res.status(201).json(trip);
  } catch (err) {
    next(err);
  }
};