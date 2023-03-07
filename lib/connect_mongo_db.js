import mongoose from "mongoose";
const MONGO_USERNAME = process.env.NEXT_PUBLIC_MONGO_USERNAME;
const MONGO_PASSWORD = process.env.NEXT_PUBLIC_MONGO_PASSWORD;
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cybermatta-events-db.am2tmob.mongodb.net/users_db`;

const ConnectMongoDB = async () => mongoose.connect(MONGO_URL);

export default ConnectMongoDB;
