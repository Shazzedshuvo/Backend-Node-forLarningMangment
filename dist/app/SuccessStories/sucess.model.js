import { model, Schema } from "mongoose";
const successStorySchema = new Schema({
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
}, { timestamps: true });
export const SuccessStoryModel = model("SuccessStory", successStorySchema);
//# sourceMappingURL=sucess.model.js.map