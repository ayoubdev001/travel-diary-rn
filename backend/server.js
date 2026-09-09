import app from "./app.js";
import sequelize from "./config/database.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log(" Database synced");

    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" Failed to sync database", err);
    process.exit(1);
  }
};

startServer();