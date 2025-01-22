import {
  addBannerEvent,
  addSpecialEvent,
  addTrendEvent,
  createEvent,
  deleteBannerEvent,
  deleteEvent,
  deleteSpecialEvent,
  deleteTrendEvent,
  getEventById,
  listBannerEvent,
  listEvents,
  listEventsByUser,
  listSpecialEvent,
  listTrendEvent,
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
  const result = await listEvents(req.query); // Lấy danh sách sự kiện với tham số lọc
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleListEventsByUser = async (req, res) => {
<<<<<<< HEAD
  const userId = req.query.userId;
=======
  const userId = req.body._id;
>>>>>>> origin/frontend
  const result = await listEventsByUser(userId); // Lấy danh sách sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleCreateEvent = async (req, res) => {
  let uploadedFiles = []; // Lưu đường dẫn file tạm
  try {
    const eventData = req.body; // Lấy dữ liệu sự kiện từ request body
    const files = req.files;
    // Kiểm tra file bắt buộc và xử lý ảnh nếu có
    const logoUrlPath = files["logo_url"];
    const coverImageUrlPath = files["cover_image_url"];
    console.log("logo", logoUrlPath);
    console.log("cover image", coverImageUrlPath);

    if (files) {
      if (files.logo_url) {
        logoUrlPath = files.logo_url[0].filename; // Đường dẫn ảnh logo
        uploadedFiles.push(
          path.join("public/images", req.files.logo_url[0].filename)
        );
      }

      if (files.cover_image_url) {
        coverImageUrlPath = files.cover_image_url[0].filename; // Đường dẫn ảnh cover image
        uploadedFiles.push(
          path.join("public/images", req.files.cover_image_url[0].filename)
        );
      }
    }

    // Thêm thông tin file vào dữ liệu sự kiện, chỉ thêm ảnh nếu có
    const newEvent = {
      ...eventData,
      logo_url: logoUrlPath || null, // Nếu không có logo, để null
      cover_image_url: coverImageUrlPath || null, // Nếu không có cover image, để null
    };
    console.log(newEvent);
    // Gọi service để tạo sự kiện
    const result = await createEvent(newEvent);

    // Trả về kết quả
    return res.status(result.errCode === 0 ? 200 : 400).json(result);
  } catch (error) {
    // Xóa file đã upload nếu tạo sự kiện thất bại
    uploadedFiles.forEach((filePath) => {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });
    return res.status(500).json({
      errCode: -1,
      message: "Lỗi server khi tạo sự kiện",
      error: error.message,
    });
  }
};

const handleEditEvent = async (req, res) => {
  const eventId = req.body.id; // Lấy id sự kiện từ URL params

  const eventData = req.body;

  // Lấy thông tin file upload
  if (req.files) {
    if (req.files.logo_url) {
      eventData.logo_url = req.files.logo_url[0].filename; // Lấy tên file
    }
    if (req.files.cover_image_url) {
      eventData.cover_image_url = req.files.cover_image_url[0].filename; // Lấy tên file
    }
  }
  const result = await updateEvent(eventId, eventData); // Gọi service để cập nhật sự kiện

  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

const handleDeleteEvent = async (req, res) => {
  const eventId = req.body.id; // Lấy id sự kiện từ URL params
  const result = await deleteEvent(eventId); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

// special
const handleListSpecialEvent = async (req, res) => {
  const result = await listSpecialEvent(); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleAddSpecialEvent = async (req, res) => {
  const EventId = req.body.EventId;
  const result = await addSpecialEvent(EventId); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleDeleteSpecialEvent = async (req, res) => {
  const EventId = req.body.EventId;
  const result = await deleteSpecialEvent(EventId); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

// trend
const handleListTrendEvent = async (req, res) => {
  const result = await listTrendEvent(); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleAddTrendEvent = async (req, res) => {
  const EventId = req.body.EventId;
  const result = await addTrendEvent(EventId); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleDeleteTrendEvent = async (req, res) => {
  const EventId = req.body.EventId;
  const result = await deleteTrendEvent(EventId); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

// banner
const handleListBannerEvent = async (req, res) => {
  const result = await listBannerEvent(); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleAddBannerEvent = async (req, res) => {
  const EventId = req.body.EventId;
  const result = await addBannerEvent(EventId); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleDeleteBannerEvent = async (req, res) => {
  const EventId = req.body.EventId;
  const result = await deleteBannerEvent(EventId); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

export {
  handleGetEvent,
  handleCreateEvent,
  handleDeleteEvent,
  handleEditEvent,
  handleListEvents,
  handleListEventsByUser,
  handleAddBannerEvent,
  handleAddSpecialEvent,
  handleAddTrendEvent,
  handleDeleteBannerEvent,
  handleDeleteSpecialEvent,
  handleDeleteTrendEvent,
  handleListBannerEvent,
  handleListSpecialEvent,
  handleListTrendEvent,
};
