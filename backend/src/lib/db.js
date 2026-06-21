import mongoose, { mongo } from "mongoose";

export async function connectDB() {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO URI REQUIRED");
    }

    const conn = await mongoose.connect(mongoUri);

    console.log("MongoDB CONNECTED %s ---<3", conn.connection.host);
  } catch (error) {
    console.error("MongoO CONNECTION ERROR ---X ");
    process.exit(1);
  }
}
