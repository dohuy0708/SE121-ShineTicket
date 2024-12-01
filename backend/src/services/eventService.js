import Events from "../models/event.js";

export const listEvents = async () => {
  try {
    const events = await Events.findAll();
    return {
      errCode: 0,
      message: "Success",
      data: events,
    };
  } catch (error) {
    console.error("Error fetching Events:", error.message);
    return {
      errCode: 1,
      message: "Unable to fetch Events.",
    };
  }
};

export const getEventById = async (eventId) => {
  try {
    const event = await Events.findByPk(eventId);
    if (!event) {
      return {
        errCode: 2,
        message: "Event not found.",
      };
    }
    return {
      errCode: 0,
      message: "Success",
      data: event,
    };
  } catch (error) {
    console.error("Error fetching Event:", error.message);
    return {
      errCode: 1,
      message: "Unable to fetch Event.",
    };
  }
};

export const createEvent = async (eventData) => {
  try {
    const newEvent = await Events.create(eventData);
    return {
      errCode: 0,
      message: "Event created successfully.",
      data: newEvent,
    };
  } catch (error) {
    console.error("Error creating Event:", error.message);
    return {
      errCode: 1,
      message: "Unable to create Event.",
    };
  }
};

export const updateEvent = async (eventId, eventData) => {
  try {
    const [updatedRowsCount] = await Events.update(eventData, {
      where: { event_id: eventId },
    });
    if (updatedRowsCount === 0) {
      return {
        errCode: 2,
        message: "Event not found",
      };
    }
    return {
      errCode: 0,
      message: "Event updated successfully.",
    };
  } catch (error) {
    console.error("Error updating Event:", error.message);
    return {
      errCode: 1,
      message: "Unable to update Event.",
    };
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const deletedRowsCount = await Events.destroy({
      where: { event_id: eventId },
    });
    if (deletedRowsCount === 0) {
      return {
        errCode: 2,
        message: "Event not found.",
      };
    }
    return {
      errCode: 0,
      message: "Event deleted successfully.",
    };
  } catch (error) {
    console.error("Error deleting Event:", error.message);
    return {
      errCode: 1,
      message: "Unable to delete Event.",
    };
  }
};
