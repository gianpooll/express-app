import mongoose from "mongoose";
const { Schema, model } = mongoose;

const esquemaUsuario = new Schema({
  nombre_usuario: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
    type: String,
    required: true,
    trim: true,
  },
  usuario: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model("user", esquemaUsuario);
