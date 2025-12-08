import mongoose, { Schema, Document } from "mongoose";
import type { IEventItem } from "./Evant.intarfase.js";


const EventItemSchema = new Schema<IEventItem>({
  id: { type: Number, required: true, unique: true },
  speakerName: { type: String, required: true },
  eventTitle: { type: String, required: true },
  speaker: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

export const EventModel = mongoose.model<IEventItem>("Event", EventItemSchema);
