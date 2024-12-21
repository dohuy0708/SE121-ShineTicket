import Event from "../models/event.js";
import fs from "fs";
import path from "path";
export const listEvents = async () => {
  try {
    const events = await Event.find({});
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
    const event = await Event.findById(eventId);
    if (!event) {
      return {
        errCode: 2,
        id: eventId,
        message: "Event not found.",
      };
    }
    return {
      errCode: 0,
      message: "Success",
      event,
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
    const newEvent = await Event.create(eventData);
    return {
      errCode: 0,
      message: "Event created successfully.",
      data: newEvent,
    };
  } catch (error) {
    console.error("Error creating Event:", error.message);
    return {
      errCode: 1,
      error: error.message,
      message: "Unable to create Event.",
    };
  }
};

export const updateEvent = async (eventId, eventData) => {
  try {
    // Lấy URL của các hình ảnh cũ từ cơ sở dữ liệu (nếu có)
    const event = await Event.findById(eventId);

    if (!event) {
      return {
        errCode: 2,
        message: "Event not found",
      };
    }

    const { logo_url, cover_image_url } = event;

    // Xóa hình ảnh cũ nếu có
    if (logo_url) {
      // Kiểm tra và xóa logo cũ nếu có
      const oldLogoPath = path.join("public/images", logo_url);
      if (fs.existsSync(oldLogoPath)) {
        fs.unlinkSync(oldLogoPath); // Xóa file cũ
      }
    }

    if (cover_image_url) {
      // Kiểm tra và xóa cover image cũ nếu có
      const oldCoverPath = path.join("public/images", cover_image_url);
      if (fs.existsSync(oldCoverPath)) {
        fs.unlinkSync(oldCoverPath); // Xóa file cũ
      }
    }

    // // Nếu có hình ảnh mới, thì update URL của hình ảnh vào eventData
    // if (req.files.logo_url) {
    //   eventData.logo_url = req.files.logo_url[0].filename; // Lưu tên file mới
    // }
    // if (req.files.cover_image_url) {
    //   eventData.cover_image_url = req.files.cover_image_url[0].filename; // Lưu tên file mới
    // }

    const updateEvent = await Event.findByIdAndUpdate(eventId, eventData);

    if (!updateEvent) {
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
      error: error.message,
      message: "Unable to update Event.",
    };
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return {
        errCode: 21,
        message: "Event not found.",
      };
    }

    // Lấy các hình ảnh cần xóa
    const { logo_url, cover_image_url } = event;

    // Xóa hình ảnh logo nếu có
    if (logo_url) {
      const oldLogoPath = path.join("public/images", logo_url);
      if (fs.existsSync(oldLogoPath)) {
        fs.unlinkSync(oldLogoPath); // Xóa file cũ
      }
    }

    // Xóa hình ảnh cover image nếu có
    if (cover_image_url) {
      const oldCoverPath = path.join("public/images", cover_image_url);
      if (fs.existsSync(oldCoverPath)) {
        fs.unlinkSync(oldCoverPath); // Xóa file cũ
      }
    }

    const delete_event = await Event.findByIdAndDelete(eventId);
    if (!delete_event) {
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
      error: error.message,
      message: "Unable to delete Event.",
    };
  }
};
