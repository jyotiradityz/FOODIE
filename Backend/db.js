const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        const db = mongoose.connection;
        const foodItemsCollection = db.collection("food_items");
        const foodCatCollection=db.collection("foodCategory")
        // Await the result of the find operation
        const data = await foodItemsCollection.find({}).toArray();
        const catData = await foodCatCollection.find({}).toArray();
        global.food_item = data;
        global.food_cat = catData;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;