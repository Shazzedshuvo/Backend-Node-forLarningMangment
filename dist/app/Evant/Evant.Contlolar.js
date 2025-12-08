import { EventService } from "./Evant.Sarvises.js";
// CREATE → Create new event
export const createEventController = async (req, res) => {
    try {
        const event = await EventService.createEventService(req.body);
        return res.status(201).json({
            success: true,
            message: "Event created successfully",
            data: event,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// GET ALL → Fetch all events
export const getAllEventsController = async (_req, res) => {
    try {
        const events = await EventService.getAllEventsService();
        return res.status(200).json({
            success: true,
            data: events,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// GET SINGLE → Fetch event by ID
export const getSingleEventController = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await EventService.getSingleEventService(id);
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: event,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// UPDATE → Update event by ID
export const updateEventController = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await EventService.updateEventService(id, req.body);
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Event updated successfully",
            data: event,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// DELETE → Delete event by ID
export const deleteEventController = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await EventService.deleteEventService(id);
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Event deleted successfully",
            data: event,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// Export all controllers
export const EventController = {
    createEventController,
    getAllEventsController,
    getSingleEventController,
    updateEventController,
    deleteEventController,
};
//# sourceMappingURL=Evant.Contlolar.js.map