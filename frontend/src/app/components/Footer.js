export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Logo và Giới thiệu */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0">
            {/* Logo */}
            <img src="/logo.png" alt="Logo" className="h-12 mb-3" />
            <p className="text-gray-400 text-sm">
              Nền tảng hàng đầu để mua và bán vé sự kiện, dễ dàng và đáng tin
              cậy.
            </p>
          </div>

          {/* Các liên kết */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Cột 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Khám phá</h3>
              <ul className="text-gray-400 text-sm">
                <li>
                  <a className="hover:text-primary">Trang chủ</a>
                </li>
                <li>
                  <a className="hover:text-primary">Sự kiện</a>
                </li>
                <li>
                  <a className="hover:text-primary">Giá vé</a>
                </li>
                <li>
                  <a className="hover:text-primary">Về chúng tôi</a>
                </li>
              </ul>
            </div>

            {/* Cột 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
              <ul className="text-gray-400 text-sm">
                <li>
                  <a className="hover:text-primary">Trung tâm trợ giúp</a>
                </li>
                <li>
                  <a className="hover:text-primary">Chính sách</a>
                </li>
                <li>
                  <a className="hover:text-primary">Câu hỏi thường gặp</a>
                </li>
              </ul>
            </div>

            {/* Cột 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
              <ul className="text-gray-400 text-sm">
                <li>Email: support@ticketplatform.com</li>
                <li>Điện thoại: +84 123 456 789</li>
                <li>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bản quyền và mạng xã hội */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 TicketPlatform. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a className="text-gray-400 hover:text-primary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-gray-400 hover:text-primary">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-gray-400 hover:text-primary">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
