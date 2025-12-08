import { model, Schema } from "mongoose";
import type { ISuccessStory } from "./success.intarfase.js";


const successStorySchema = new Schema<ISuccessStory>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    youtubeUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const SuccessStoryModel = model<ISuccessStory>(
  "SuccessStory",
  successStorySchema
);
