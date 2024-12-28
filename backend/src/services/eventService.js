import Event from "../models/event.js";
import fs from "fs";
import path from "path";
import Organizer from "../models/organizer.js";
import Venue from "../models/venue.js";
import Ticket from "../models/ticket.js";
import TicketStatus from "../models/ticket_status.js";
import EventStatus from "../models/event_status.js";
import EventType from "../models/event_type.js";

// export const listEvents = async () => {
//   try {
//     const events = await Event.find({});

//     const eventsWithPrices = await Promise.all(
//       events.map(async (event) => {
//         const tickets = await Ticket.find({ event_id: event._id });
//         const minPrice = tickets.reduce((min, ticket) => {
//           const ticketPrice = parseFloat(ticket.price.toString());
//           return ticketPrice < min ? ticketPrice : min;
//         }, Infinity);

//         return {
//           ...event.toObject(),
//           ticketPrice: minPrice === Infinity ? null : minPrice, // Nếu không có vé, giá vé là null
//         };
//       })
//     );

//     return {
//       errCode: 0,
//       message: "Success",
//       data: eventsWithPrices,
//     };
//   } catch (error) {
//     console.error("Error fetching Events:", error.message);
//     return {
//       errCode: 1,
//       message: "Unable to fetch Events.",
//     };
//   }
// };

export const listEvents = async (filters) => {
  try {
    const filterConditions = {};

    // Lọc theo ngày diễn ra (start_date)
    if (filters.startDate) {
      filterConditions.start_date = { $gte: new Date(filters.startDate) }; // Ngày bắt đầu lớn hơn hoặc bằng startDate
    }

    // Lọc theo thể loại sự kiện (event_type)
    if (filters.eventType) {
      filterConditions.event_type_id = filters.eventType; // eventType là ID của loại sự kiện
    }

    // Lọc theo vị trí (venue.city)
    if (filters.City) {
      // Lọc tất cả các venue có city trùng với yêu cầu từ FE
      const venues = await Venue.find({ city: filters.City });

      // Nếu có ít nhất một venue có city trùng, lấy tất cả venue_ids
      if (venues.length > 0) {
        filterConditions.venue_id = { $in: venues.map((venue) => venue._id) }; // $in giúp tìm tất cả venue_id trùng
      } else {
        // Nếu không có venue nào, trả về kết quả rỗng
        filterConditions.venue_id = null;
      }
    }

    // Lọc sự kiện với các điều kiện đã tạo
    const events = await Event.find(filterConditions);

    const eventsWithPrices = await Promise.all(
      events.map(async (event) => {
        const tickets = await Ticket.find({ event_id: event._id });
        const minPrice = tickets.reduce((min, ticket) => {
          const ticketPrice = parseFloat(ticket.price.toString());
          return ticketPrice < min ? ticketPrice : min;
        }, Infinity);

        return {
          ...event.toObject(),
          ticketPrice: minPrice === Infinity ? null : minPrice, // Nếu không có vé, giá vé là null
        };
      })
    );

    return {
      errCode: 0,
      message: "Success",
      data: eventsWithPrices,
    };
  } catch (error) {
    console.error("Error fetching Events:", error.message);
    return {
      errCode: 1,
      message: "Unable to fetch Events.",
    };
  }
};

export const listEventsByUser = async (userId) => {
  try {
    // Bước 1: Tìm tất cả Organizer có user_id trùng với userId
    const organizers = await Organizer.find({ user_id: userId });

    if (organizers.length === 0) {
      return {
        errCode: 2,
        message: "No organizer found for the given user ID.",
      };
    }

    // Lấy tất cả các organizer_id từ danh sách organizers
    const organizerIds = organizers.map((organizer) => organizer._id);

    // Bước 2: Tìm tất cả Event có organizer_id trùng với các organizer_id
    const events = await Event.find({ organizer_id: { $in: organizerIds } });

    return {
      errCode: 0,
      message: "Success",
      events: events, // Trả về danh sách sự kiện
    };
  } catch (error) {
    console.error("Error fetching events:", error.message);
    return {
      errCode: 1,
      message: "Unable to fetch events.",
      error: error.message,
    };
  }
};

export const getEventsByUserId = async (userId) => {
  try {
    // Bước 1: Tìm tất cả Organizer có user_id trùng với userId
    const organizers = await Organizer.find({ user_id: userId });

    if (organizers.length === 0) {
      return {
        errCode: 2,
        message: "No organizer found for the given user ID.",
      };
    }

    // Lấy tất cả các organizer_id từ danh sách organizers
    const organizerIds = organizers.map((organizer) => organizer._id);

    // Bước 2: Tìm tất cả Event có organizer_id trùng với các organizer_id
    const events = await Event.find({ organizer_id: { $in: organizerIds } });

    return {
      errCode: 0,
      message: "Success",
      events: events, // Trả về danh sách sự kiện
    };
  } catch (error) {
    console.error("Error fetching events:", error.message);
    return {
      errCode: 1,
      message: "Unable to fetch events.",
      error: error.message,
    };
  }
};

// getEventById.js
export const getEventById = async (eventId) => {
  try {
    const event = await Event.findById(eventId)
      .populate("venue_id") // Lấy tất cả thông tin của Venue
      .populate("organizer_id") // Lấy tất cả thông tin của Organizer
      .populate("event_status_id", "status_name") // Lấy thông tin event_status
      .populate("event_type_id", "type_name"); // Lấy thông tin event_type

    if (!event) {
      return {
        errCode: 2,
        id: eventId,
        message: "Event not found.",
      };
    }

    // Lấy danh sách vé liên quan đến sự kiện
    const tickets = await Ticket.find({ event_id: eventId }).populate(
      "ticket_status_id",
      "status_name"
    );

    return {
      errCode: 0,
      message: "Success",
      event: {
        ...event.toObject(),
        tickets: tickets.map((ticket) => ({
          ticketType: ticket.ticket_type,
          price: parseFloat(ticket.price.toString()),
          status: ticket.ticket_status_id?.status_name || "Unknown",
          description: ticket.ticket_des,
          quantity: ticket.ticket_quantity,
          datetime: ticket.event_datetime,
        })),
      },
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
    // Tạo mới Organizer và Venue (Giả sử bạn có hàm createOrganizer và createVenue)
    const organizer = {
      organizer_name: eventData.organizer_name,
      organizer_info: eventData.organizer_info,
      organizer_email: eventData.organizer_email,
      organizer_phone_number: eventData.organizer_phone_number,
      account_number: eventData.account_number,
      bank_name: eventData.bank_name,
      owner_name: eventData.owner_name,
      user_id: eventData.user_id,
    };

    const venue = {
      venue_name: eventData.venue_name,
      street_name: eventData.street_name,
      ward: eventData.ward,
      district: eventData.district,
      city: eventData.city,
    };

    // Lưu Organizer và Venue vào cơ sở dữ liệu (Giả sử các hàm này sẽ trả về ID)
    const organizerId = await Organizer.create(organizer); // Tạo tổ chức
    const venueId = await Venue.create(venue); // Tạo địa điểm

    // Tạo sự kiện mới với thông tin từ FE
    const newEvent = {
      event_name: eventData.event_name,
      description: eventData.description,
      event_type_id: eventData.event_type_id,
      event_format: eventData.event_format,
      start_date: eventData.start_date,
      end_date: eventData.end_date,
      total_tickets: eventData.total_tickets,
      available_tickets: eventData.available_tickets,
      organizer_id: organizerId,
      venue_id: venueId,
    };

    // Lưu sự kiện vào cơ sở dữ liệu (Giả sử bạn có hàm createEvent)
    const event = await Event.create(newEvent);

    // 4. Tạo Tickets
    const ticketPromises = eventData.tickets.map((ticket) =>
      Ticket.create({
        ...ticket,
        event_id: event._id,
      })
    );
    await Promise.all(ticketPromises);

    return {
      errCode: 0,
      message: "Event created successfully.",
      data: event,
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

// export const updateEvent = async (eventId, eventData) => {
//   try {
//     // Lấy URL của các hình ảnh cũ từ cơ sở dữ liệu (nếu có)
//     const event = await Event.findById(eventId);

//     if (!event) {
//       return {
//         errCode: 2,
//         message: "Event not found",
//       };
//     }

//     const { logo_url, cover_image_url } = event;

//     // Xóa hình ảnh cũ nếu có
//     if (logo_url) {
//       // Kiểm tra và xóa logo cũ nếu có
//       const oldLogoPath = path.join("public/images", logo_url);
//       if (fs.existsSync(oldLogoPath)) {
//         fs.unlinkSync(oldLogoPath); // Xóa file cũ
//       }
//     }

//     if (cover_image_url) {
//       // Kiểm tra và xóa cover image cũ nếu có
//       const oldCoverPath = path.join("public/images", cover_image_url);
//       if (fs.existsSync(oldCoverPath)) {
//         fs.unlinkSync(oldCoverPath); // Xóa file cũ
//       }
//     }

//     // // Nếu có hình ảnh mới, thì update URL của hình ảnh vào eventData
//     // if (req.files.logo_url) {
//     //   eventData.logo_url = req.files.logo_url[0].filename; // Lưu tên file mới
//     // }
//     // if (req.files.cover_image_url) {
//     //   eventData.cover_image_url = req.files.cover_image_url[0].filename; // Lưu tên file mới
//     // }

//     const updateEvent = await Event.findByIdAndUpdate(eventId, eventData);

//     if (!updateEvent) {
//       return {
//         errCode: 2,
//         message: "Event not found",
//       };
//     }

//     return {
//       errCode: 0,
//       message: "Event updated successfully.",
//     };
//   } catch (error) {
//     console.error("Error updating Event:", error.message);
//     return {
//       errCode: 1,
//       error: error.message,
//       message: "Unable to update Event.",
//     };
//   }
// };

export const updateEvent = async (eventId, eventData) => {
  try {
    // Tìm sự kiện cần cập nhật
    const event = await Event.findById(eventId)
      .populate("organizer_id")
      .populate("venue_id");

    if (!event) {
      return {
        errCode: 2,
        message: "Event not found",
      };
    }

    // Cập nhật thông tin về Organizer
    if (
      eventData.organizer_name ||
      eventData.organizer_info ||
      eventData.organizer_email ||
      eventData.organizer_phone_number
    ) {
      const updatedOrganizer = {
        organizer_name:
          eventData.organizer_name || event.organizer_id.organizer_name,
        organizer_info:
          eventData.organizer_info || event.organizer_id.organizer_info,
        organizer_email:
          eventData.organizer_email || event.organizer_id.organizer_email,
        organizer_phone_number:
          eventData.organizer_phone_number ||
          event.organizer_id.organizer_phone_number,
        account_number:
          eventData.account_number || event.organizer_id.account_number,
        bank_name: eventData.bank_name || event.organizer_id.bank_name,
        owner_name: eventData.owner_name || event.organizer_id.owner_name,
        user_id: eventData.user_id || event.organizer_id.user_id,
      };

      await Organizer.findByIdAndUpdate(
        event.organizer_id._id,
        updatedOrganizer
      );
    }

    // Cập nhật thông tin về Venue
    if (
      eventData.venue_name ||
      eventData.street_name ||
      eventData.ward ||
      eventData.district ||
      eventData.city
    ) {
      const updatedVenue = {
        venue_name: eventData.venue_name || event.venue_id.venue_name,
        street_name: eventData.street_name || event.venue_id.street_name,
        ward: eventData.ward || event.venue_id.ward,
        district: eventData.district || event.venue_id.district,
        city: eventData.city || event.venue_id.city,
      };

      await Venue.findByIdAndUpdate(event.venue_id._id, updatedVenue);
    }

    // Cập nhật thông tin event
    const { logo_url, cover_image_url } = event;

    // Xóa hình ảnh cũ nếu có và thay bằng hình ảnh mới
    if (logo_url) {
      const oldLogoPath = path.join("public/images", logo_url);
      if (fs.existsSync(oldLogoPath)) {
        fs.unlinkSync(oldLogoPath); // Xóa file cũ
      }
    }

    if (cover_image_url) {
      const oldCoverPath = path.join("public/images", cover_image_url);
      if (fs.existsSync(oldCoverPath)) {
        fs.unlinkSync(oldCoverPath); // Xóa file cũ
      }
    }

    // Cập nhật thông tin event
    const updatedEventData = {
      event_name: eventData.event_name || event.event_name,
      description: eventData.description || event.description,
      event_type_id: eventData.event_type_id || event.event_type_id,
      event_status_id: eventData.event_status_id || event.event_status_id,
      event_format: eventData.event_format || event.event_format,
      start_date: eventData.start_date || event.start_date,
      end_date: eventData.end_date || event.end_date,
      total_tickets: eventData.total_tickets || event.total_tickets,
      available_tickets: eventData.available_tickets || event.available_tickets,
      organizer_id: event.organizer_id._id,
      venue_id: event.venue_id._id,
    };

    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      updatedEventData
    );

    // Cập nhật thông tin các vé (tickets)
    if (eventData.tickets && eventData.tickets.length > 0) {
      // Lấy tất cả các vé hiện tại của sự kiện
      const existingTickets = await Ticket.find({ event_id: eventId });

      // Duyệt qua từng vé mới và cập nhật hoặc tạo mới nếu chưa có
      const ticketPromises = eventData.tickets.map(async (ticket) => {
        const existingTicket = existingTickets.find(
          (existing) => existing._id.toString() === ticket._id.toString()
        );

        if (existingTicket) {
          // Nếu vé đã tồn tại, cập nhật thông tin của vé
          const updatedTicket = {
            ticket_type: ticket.ticket_type || existingTicket.ticket_type,
            price: ticket.price || existingTicket.price,
            ticket_status_id:
              ticket.ticket_status_id || existingTicket.ticket_status_id,
            ticket_des: ticket.ticket_des || existingTicket.ticket_des,
            ticket_quantity:
              ticket.ticket_quantity || existingTicket.ticket_quantity,
            event_datetime:
              ticket.event_datetime || existingTicket.event_datetime,
          };

          // Cập nhật vé
          return Ticket.findByIdAndUpdate(existingTicket._id, updatedTicket, {
            new: true,
          });
        } else {
          // Nếu vé chưa tồn tại, tạo mới vé
          return Ticket.create({
            ...ticket,
            event_id: eventId, // Gán ID sự kiện cho vé mới
          });
        }
      });

      // Chờ tất cả các cập nhật/tạo mới vé
      await Promise.all(ticketPromises);
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

// export const deleteEvent = async (eventId) => {
//   try {
//     const event = await Event.findById(eventId);

//     if (!event) {
//       return {
//         errCode: 21,
//         message: "Event not found.",
//       };
//     }

//     // Lấy các hình ảnh cần xóa
//     const { logo_url, cover_image_url } = event;

//     // Xóa hình ảnh logo nếu có
//     if (logo_url) {
//       const oldLogoPath = path.join("public/images", logo_url);
//       if (fs.existsSync(oldLogoPath)) {
//         fs.unlinkSync(oldLogoPath); // Xóa file cũ
//       }
//     }

//     // Xóa hình ảnh cover image nếu có
//     if (cover_image_url) {
//       const oldCoverPath = path.join("public/images", cover_image_url);
//       if (fs.existsSync(oldCoverPath)) {
//         fs.unlinkSync(oldCoverPath); // Xóa file cũ
//       }
//     }

//     const delete_event = await Event.findByIdAndDelete(eventId);
//     if (!delete_event) {
//       return {
//         errCode: 2,
//         message: "Event not found.",
//       };
//     }
//     return {
//       errCode: 0,
//       message: "Event deleted successfully.",
//     };
//   } catch (error) {
//     console.error("Error deleting Event:", error.message);
//     return {
//       errCode: 1,
//       error: error.message,
//       message: "Unable to delete Event.",
//     };
//   }
// };

export const deleteEvent = async (eventId) => {
  try {
    // Lấy sự kiện cần xóa
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

    // Xóa tất cả vé của sự kiện
    await Ticket.deleteMany({ event_id: eventId });

    // Xóa Venue nếu không còn sự kiện nào sử dụng
    await Venue.findByIdAndDelete(event.venue_id); // Xóa venue nếu không còn sự kiện nào
    // Xóa Organizer nếu không còn sự kiện nào sử dụng
    await Organizer.findByIdAndDelete(event.organizer_id); // Xóa organizer nếu không còn sự kiện nào

    // Xóa sự kiện
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
