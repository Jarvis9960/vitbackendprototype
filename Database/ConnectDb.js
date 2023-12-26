import mongoose from "mongoose";

const connectDb = async () => {
  try {
    return mongoose.connect("mongodb+srv://anshulgupta:anshulgupta@cluster0.g14exjh.mongodb.net/?retryWrites=true&w=majority");
  } catch (error) {
    return error;
  }
};

export default connectDb;
