// src/app/modules/event/event.service.ts
import { EventModel } from "./Evant.Model.js";
// CREATE → নতুন event তৈরি
const createEventService = async (payload) => {
    return await EventModel.create(payload);
};
// GET ALL → সব event fetch করা
const getAllEventsService = async () => {
    return await EventModel.find();
};
// GET SINGLE → id দিয়ে single event fetch করা
const getSingleEventService = async (id) => {
    return await EventModel.findById(id);
};
// UPDATE → id দিয়ে event update করা
const updateEventService = async (id, payload) => {
    return await EventModel.findByIdAndUpdate(id, payload, { new: true });
};
// DELETE → id দিয়ে event delete করা
const deleteEventService = async (id) => {
    return await EventModel.findByIdAndDelete(id);
};
export const EventService = {
    createEventService,
    getAllEventsService,
    getSingleEventService,
    updateEventService,
    deleteEventService,
};
//# sourceMappingURL=Evant.Sarvises.js.map