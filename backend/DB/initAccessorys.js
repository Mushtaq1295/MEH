const mongoose = require("mongoose");
const { accessoriesData } = require("./accessoriesData");
const Accessory = require("../models/accessoryModel");
const connectDB = require("../config/db");

require("dotenv").config({ path: "../.env" }); // Load environment variables

const db_url = process.env.ATLAS_DB_URL;

const seedAccessories = async () => {
  try {
    await connectDB(db_url);
    await Accessory.deleteMany(); // Clear old data
    console.log("🗑️ Accessories data deleted.");

    await Accessory.insertMany(accessoriesData);
    console.log("✅ Accessories data inserted successfully!");

    mongoose.connection.close();
    console.log("🔌 MongoDB connection closed.");
  } catch (error) {
    console.error("❌ Error inserting data:", error.message);
    process.exit(1);
  }
};

// Run the function
seedAccessories();
