import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGODB);
  console.log("Conectado con MongoDB 👌👌👌");
} catch (error) {
  console.log("Error al conectar con mongo 🤬🤬🤬: " + error);
}