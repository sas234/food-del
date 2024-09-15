import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(
      'mongodb+srv://greatstacksasi:9182269803@cluster0.u7zduyh.mongodb.net/food-del',
    ).then(()=>console.log("DB connected"))
};

