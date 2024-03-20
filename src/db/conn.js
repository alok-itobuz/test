import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/abcd').then(() => console.log('Successfully connected to db')).catch(err => console.log('Error', err))