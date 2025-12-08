import mongoose, { Schema, Document } from "mongoose";
const EventItemSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    speakerName: { type: String, required: true },
    eventTitle: { type: String, required: true },
    speaker: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String, required: true },
    imageUrl: { type: String, required: true }
});
export const EventModel = mongoose.model("Event", EventItemSchema);
//# sourceMappingURL=Evant.Model.js.map