import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.get("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
