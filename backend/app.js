import express from "express";
import cors from "cors";
import tripRoutes from "./routes/tripRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import { apiReference } from "@scalar/express-api-reference";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

app.use("/scalar.yaml", express.static("scalar.yaml"));
app.use(
  "/docs",
  apiReference({
    theme: "purple",
    url: "/scalar.yaml",
  })
);

app.use("/trips", tripRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

export default app;