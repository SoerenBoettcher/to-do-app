import mongoose from "mongoose";

export async function mongoConnect() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      dbName: "todos",
    });
    console.log("Connection zu MongoDB erfolgreich");
  } catch (error) {
    console.log(error);
  }
}

export function mongoErrorListner() {
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
}

export function mongoDCListner() {
  mongoose.connection.on("disconnected", (err) => {
    console.log(err);
  });
}
