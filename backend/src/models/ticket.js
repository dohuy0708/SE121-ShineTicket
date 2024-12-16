import mongoose from "mongoose";

// Tạo schema cho Tickets
const ticketSchema = new mongoose.Schema(
  {
    event_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event", // Liên kết với collection Event
      required: true,
    },
    ticket_type: {
      type: String,
      required: true,
      maxlength: 50,
    },
    price: {
      type: mongoose.Decimal128,
      required: true,
    },
    ticket_status_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TicketStatus", // Liên kết với collection TicketStatus
      required: true,
    },
    ticket_image: {
      type: String,
    },
    event_datetime: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false, // Bỏ qua trường __v của Mongoose
    timestamps: false, // Không tạo các trường createdAt và updatedAt
  }
);

// Tạo model từ schema
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
