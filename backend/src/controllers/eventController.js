import {
  createEvent,
  deleteEvent,
  getEventById,
  listEvents,
  updateEvent,
} from "../services/eventService.js";

const handleGetEvent = async (req, res) => {
  let id = req.query.id;
  let result;
  result = await getEventById(id); // Lấy sự kiện theo id
  // Trả về kết quả dựa trên kết quả từ service
  return res.status(result.errCode === 0 ? 200 : 400).json(result);
};

const handleListEvents = async (req, res) => {
  const result = await listEvents(); // Lấy danh sách sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

const handleCreateEvent = async (req, res) => {
  const eventData = req.body; // Dữ liệu sự kiện từ request body
  const result = await createEvent(eventData); // Gọi service để tạo sự kiện

  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

const handleEditEvent = async (req, res) => {
  const eventId = req.query.id; // Lấy id sự kiện từ URL params
  const eventData = req.body; // Dữ liệu chỉnh sửa từ request body
  const result = await updateEvent(eventId, eventData); // Gọi service để cập nhật sự kiện

  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

const handleDeleteEvent = async (req, res) => {
  const eventId = req.query.id; // Lấy id sự kiện từ URL params
  const result = await deleteEvent(eventId); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

export {
  handleGetEvent,
  handleCreateEvent,
  handleDeleteEvent,
  handleEditEvent,
  handleListEvents,
};
