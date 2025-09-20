import "dotenv/config";
import app from "./src/app.js";
import {connectdb} from "./src/config/db.js";

const PATH = process.env.PATH || "http://localhost:3000";
const PORT = process.env.PORT || 5003;

const startServer = async () => {
  try {
    await connectdb();
    app.listen(PORT, () => {
      console.log(`✅ App is running : PORT - http://localhost:${PORT} `);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};
startServer();