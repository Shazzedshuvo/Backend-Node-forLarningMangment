// src/app/modules/event/event.service.ts

import type { IEventItem } from "./Evant.intarfase.js";
import { EventModel } from "./Evant.Model.js";


// CREATE → নতুন event তৈরি
const createEventService = async (payload: IEventItem): Promise<IEventItem> => {
  return await EventModel.create(payload);
};

// GET ALL → সব event fetch করা
const getAllEventsService = async (): Promise<IEventItem[]> => {
  return await EventModel.find();
};

// GET SINGLE → id দিয়ে single event fetch করা
const getSingleEventService = async (id: string): Promise<IEventItem | null> => {
  return await EventModel.findById(id);
};

// UPDATE → id দিয়ে event update করা
const updateEventService = async (
  id: string,
  payload: Partial<IEventItem>
): Promise<IEventItem
 | null> => {
  return await EventModel.findByIdAndUpdate(id, payload, { new: true });
};

// DELETE → id দিয়ে event delete করা
const deleteEventService = async (id: string): Promise<IEventItem | null> => {
  return await EventModel.findByIdAndDelete(id);
};

export const EventService = {
  createEventService,
  getAllEventsService,
  getSingleEventService,
  updateEventService,
  deleteEventService,
};
